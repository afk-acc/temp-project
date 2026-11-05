"""Растровая обработка поэтажных планов: маска стен, морфология, компоненты, прямоугольники.

Без OpenCV/SciPy — только numpy, чтобы скрипт запускался на любом маке.
Все функции работают с булевыми масками numpy (True = стена / занято).
"""
from __future__ import annotations

from collections import deque

import numpy as np
from PIL import Image

WALL_GRAY = 48          # стены на планах Profitbase залиты #303030
WALL_TOL = 22           # допуск по каждому каналу
SHAFT_LO, SHAFT_HI = 180, 215  # светло-серые шахты/вентканалы


def load_rgba(path: str) -> np.ndarray:
    return np.array(Image.open(path).convert('RGBA'))


def wall_mask(rgba: np.ndarray) -> np.ndarray:
    """Тёмно-серые нейтральные пиксели. Чёрная мебель (0,0,0) и тёмно-синие значки не попадают."""
    rgb = rgba[..., :3].astype(np.int16)
    alpha = rgba[..., 3]
    neutral = (rgb.max(axis=2) - rgb.min(axis=2)) < 10
    return (alpha > 200) & neutral & (np.abs(rgb - WALL_GRAY).max(axis=2) < WALL_TOL)


def shaft_mask(rgba: np.ndarray) -> np.ndarray:
    rgb = rgba[..., :3].astype(np.int16)
    alpha = rgba[..., 3]
    neutral = (rgb.max(axis=2) - rgb.min(axis=2)) < 8
    g = rgb[..., 0]
    return (alpha > 200) & neutral & (g >= SHAFT_LO) & (g <= SHAFT_HI)


def downsample(mask: np.ndarray, factor: float, thresh: float = 0.35) -> np.ndarray:
    """Сжатие маски до сетки: клетка занята, если в ней больше thresh пикселей маски."""
    h, w = mask.shape
    gh, gw = int(h / factor), int(w / factor)
    img = Image.fromarray((mask * 255).astype(np.uint8))
    small = np.array(img.resize((gw, gh), Image.BOX)) / 255.0
    return small > thresh


def _box_any(mask: np.ndarray, r: int, axis: int) -> np.ndarray:
    """Есть ли True в окне [-r, r] вдоль оси — 1D-дилатация через кумулятивную сумму."""
    if r <= 0:
        return mask.copy()
    m = mask.astype(np.int32)
    pad = [(0, 0), (0, 0)]
    pad[axis] = (r + 1, r)
    c = np.cumsum(np.pad(m, pad), axis=axis)
    n = m.shape[axis]
    hi = np.take(c, np.arange(2 * r + 1, 2 * r + 1 + n), axis=axis)
    lo = np.take(c, np.arange(0, n), axis=axis)
    return (hi - lo) > 0


def dilate(mask: np.ndarray, rx: int, ry: int | None = None) -> np.ndarray:
    ry = rx if ry is None else ry
    return _box_any(_box_any(mask, rx, 1), ry, 0)


def erode(mask: np.ndarray, rx: int, ry: int | None = None) -> np.ndarray:
    return ~dilate(~mask, rx, ry)


def close_axis(mask: np.ndarray, r: int) -> np.ndarray:
    """Закрытие вдоль каждой оси отдельно: заполняет разрывы до 2r в прямых стенах,
    но не склеивает стены по диагонали."""
    cx = erode(dilate(mask, r, 0), r, 0)
    cy = erode(dilate(mask, 0, r), 0, r)
    return cx | cy


def fill_holes(mask: np.ndarray) -> np.ndarray:
    """Всё, что не достижимо из рамки по свободным клеткам, считается внутренностью."""
    outside = flood(~mask, seeds=_border_seeds(mask.shape))
    return ~outside


def _border_seeds(shape):
    h, w = shape
    for x in range(w):
        yield (0, x)
        yield (h - 1, x)
    for y in range(h):
        yield (y, 0)
        yield (y, w - 1)


def flood(free: np.ndarray, seeds) -> np.ndarray:
    h, w = free.shape
    seen = np.zeros_like(free, dtype=bool)
    q = deque()
    for y, x in seeds:
        if free[y, x] and not seen[y, x]:
            seen[y, x] = True
            q.append((y, x))
    while q:
        y, x = q.popleft()
        for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= ny < h and 0 <= nx < w and free[ny, nx] and not seen[ny, nx]:
                seen[ny, nx] = True
                q.append((ny, nx))
    return seen


def components(mask: np.ndarray, min_size: int = 1):
    """Связные области (4-связность). Возвращает (labels, список размеров)."""
    h, w = mask.shape
    labels = np.zeros((h, w), dtype=np.int32)
    sizes = [0]
    cur = 0
    ys, xs = np.nonzero(mask)
    for y0, x0 in zip(ys, xs):
        if labels[y0, x0]:
            continue
        cur += 1
        n = 0
        q = deque([(y0, x0)])
        labels[y0, x0] = cur
        while q:
            y, x = q.popleft()
            n += 1
            for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
                if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not labels[ny, nx]:
                    labels[ny, nx] = cur
                    q.append((ny, nx))
        sizes.append(n)
    if min_size > 1:
        small = [i for i, s in enumerate(sizes) if i and s < min_size]
        if small:
            labels[np.isin(labels, small)] = 0
    return labels, sizes


def rectangles(mask: np.ndarray) -> list[tuple[int, int, int, int]]:
    """Разбиение маски на прямоугольники: склейка одинаковых пробегов в соседних строках.
    Возвращает (x0, y0, x1, y1) в клетках, правая и нижняя границы не включены."""
    h, w = mask.shape
    open_runs: dict[tuple[int, int], int] = {}
    out = []
    for y in range(h + 1):
        runs = set()
        if y < h:
            row = mask[y]
            d = np.diff(np.concatenate(([0], row.astype(np.int8), [0])))
            starts = np.nonzero(d == 1)[0]
            ends = np.nonzero(d == -1)[0]
            runs = set(zip(starts.tolist(), ends.tolist()))
        for key in list(open_runs):
            if key not in runs:
                y0 = open_runs.pop(key)
                out.append((key[0], y0, key[1], y))
        for key in runs:
            if key not in open_runs:
                open_runs[key] = y
    return out


def polygon_area(pts) -> float:
    a = 0.0
    n = len(pts)
    for i in range(n):
        x1, y1 = pts[i]
        x2, y2 = pts[(i + 1) % n]
        a += x1 * y2 - x2 * y1
    return abs(a) / 2


def point_in_polygon(x: float, y: float, pts) -> bool:
    inside = False
    n = len(pts)
    j = n - 1
    for i in range(n):
        xi, yi = pts[i]
        xj, yj = pts[j]
        if (yi > y) != (yj > y) and x < (xj - xi) * (y - yi) / (yj - yi + 1e-12) + xi:
            inside = not inside
        j = i
    return inside


def parse_points(s: str):
    v = [float(x) for x in s.replace(',', ' ').split()]
    return list(zip(v[::2], v[1::2]))


def mask_to_cells(mask: np.ndarray, m_per_px: float, cell_m: float, thresh: float = 0.35) -> np.ndarray:
    """Маска в пикселях → сетка клеток заданного размера в метрах."""
    return downsample(mask, cell_m / m_per_px, thresh)


def ncc_match(grid: np.ndarray, tmpl: np.ndarray):
    """Нормированная взаимная корреляция шаблона по сетке (FFT). Возвращает (score, y, x) лучшего окна."""
    G = grid.astype(np.float64)
    T = tmpl.astype(np.float64)
    T = T - T.mean()
    tn = np.sqrt((T ** 2).sum()) + 1e-9
    th, tw = T.shape
    H, W = G.shape
    if th > H or tw > W:
        return (-1.0, 0, 0)
    fh, fw = H + th, W + tw
    FG = np.fft.rfft2(G, (fh, fw))
    FT = np.fft.rfft2(T[::-1, ::-1], (fh, fw))
    corr = np.fft.irfft2(FG * FT, (fh, fw))[th - 1:H, tw - 1:W]
    # локальная энергия и среднее окна сетки
    c1 = np.pad(np.cumsum(np.cumsum(G, 0), 1), ((1, 0), (1, 0)))
    c2 = np.pad(np.cumsum(np.cumsum(G ** 2, 0), 1), ((1, 0), (1, 0)))
    def win(c):
        return c[th:, tw:] - c[:-th, tw:] - c[th:, :-tw] + c[:-th, :-tw]
    s1 = win(c1)
    s2 = win(c2)
    var = s2 - s1 ** 2 / (th * tw)
    ncc = corr / (tn * np.sqrt(np.maximum(var, 1e-9)))
    y, x = np.unravel_index(np.argmax(ncc), ncc.shape)
    return float(ncc[y, x]), int(y), int(x)


def line_mask(rgba: np.ndarray, lo: int = 70, hi: int = 200, black: bool = False) -> np.ndarray:
    """Тонкие линии чертежа (окна, двери): нейтрально-тёплый серый светлее стен.
    black=True добавляет чёрные линии — так нарисовано остекление лоджий на планах пентхаусов."""
    rgb = rgba[..., :3].astype(np.int16)
    alpha = rgba[..., 3]
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    warm = (r >= b) & (r - b <= 16) & (np.abs(r - g) <= 12)
    m = (alpha > 150) & warm & (r >= lo) & (r <= hi)
    if black:
        m |= (alpha > 150) & (rgb.max(axis=2) < 30)
    return m


def filter_components(mask: np.ndarray, keep) -> np.ndarray:
    """Оставляет связные области, для которых keep(w_cells, h_cells, size) истинно."""
    labels, sizes = components(mask)
    out = np.zeros_like(mask)
    n = len(sizes)
    if n <= 1:
        return out
    # габариты всех меток за один проход
    ys, xs = np.nonzero(labels)
    lab = labels[ys, xs]
    x0 = np.full(n, 1 << 30); x1 = np.full(n, -1)
    y0 = np.full(n, 1 << 30); y1 = np.full(n, -1)
    np.minimum.at(x0, lab, xs); np.maximum.at(x1, lab, xs)
    np.minimum.at(y0, lab, ys); np.maximum.at(y1, lab, ys)
    good = np.zeros(n, dtype=bool)
    for i in range(1, n):
        good[i] = bool(keep(x1[i] - x0[i] + 1, y1[i] - y0[i] + 1, sizes[i]))
    return good[labels] & mask


def boundary_segments(mask: np.ndarray, min_len: int = 2):
    """Граница маски отрезками по осям: (x0, y0, x1, y1, nx, ny) в клетках; (nx, ny) — наружу.
    Ось y в клетках направлена вниз, как в картинке."""
    m = np.pad(mask, 1)
    segs = []
    # горизонтальные рёбра: между строками y-1 и y
    for y in range(1, m.shape[0]):
        top, bot = m[y - 1, 1:-1], m[y, 1:-1]
        for edge, ny in ((bot & ~top, -1), (top & ~bot, 1)):
            d = np.diff(np.concatenate(([0], edge.astype(np.int8), [0])))
            for s, e in zip(np.nonzero(d == 1)[0], np.nonzero(d == -1)[0]):
                if e - s >= min_len:
                    segs.append((int(s), y - 1, int(e), y - 1, 0, ny))
    for x in range(1, m.shape[1]):
        lef, rig = m[1:-1, x - 1], m[1:-1, x]
        for edge, nx in ((rig & ~lef, -1), (lef & ~rig, 1)):
            d = np.diff(np.concatenate(([0], edge.astype(np.int8), [0])))
            for s, e in zip(np.nonzero(d == 1)[0], np.nonzero(d == -1)[0]):
                if e - s >= min_len:
                    segs.append((x - 1, int(s), x - 1, int(e), nx, 0))
    return segs


def open2x2(mask: np.ndarray) -> np.ndarray:
    """Открытие квадратом 2×2: убирает линии толщиной в одну клетку (дуги и полотна дверей),
    сохраняет всё, где помещается квадрат 2×2 (перегородки от двух клеток)."""
    m = mask
    e = m.copy()
    e[:-1, :-1] = m[:-1, :-1] & m[1:, :-1] & m[:-1, 1:] & m[1:, 1:]
    e[-1, :] = False
    e[:, -1] = False
    d = e.copy()
    d[1:, :] |= e[:-1, :]
    d[:, 1:] |= e[:, :-1]
    d[1:, 1:] |= e[:-1, :-1]
    return d & m


def run_lengths(mask: np.ndarray, axis: int) -> np.ndarray:
    """Для каждой клетки — длина непрерывного пробега True вдоль оси, в которой она лежит."""
    m = mask if axis == 1 else mask.T
    out = np.zeros(m.shape, dtype=np.int32)
    for i in range(m.shape[0]):
        row = m[i].astype(np.int8)
        d = np.diff(np.concatenate(([0], row, [0])))
        starts = np.nonzero(d == 1)[0]
        ends = np.nonzero(d == -1)[0]
        for s, e in zip(starts, ends):
            out[i, s:e] = e - s
    return out if axis == 1 else out.T


def straight_only(mask: np.ndarray, min_run: int, block: int) -> np.ndarray:
    """Оставляет прямые участки (пробег по оси ≥ min_run) и сплошные блоки ≥ block×block.
    Дуги дверей и прочие кривые линии такими не являются и отбрасываются."""
    keep = (run_lengths(mask, 1) >= min_run) | (run_lengths(mask, 0) >= min_run)
    r = block // 2
    blocks = dilate(erode(mask, r), r) & mask
    return mask & (keep | blocks)
