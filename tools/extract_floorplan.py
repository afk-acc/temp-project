"""План этажа (PNG) → геометрия в метрах.

Вход: картинка плана, масштаб (м/пиксель) и центр лифтового ядра в пикселях — их даёт регистрация
(register.py). Выход: стены (наружные и внутренние), стекло в оконных проёмах, перемычки дверей,
контур перекрытия, комнаты с площадями. Система координат: метры, начало — центр ядра типового
этажа, ось X вправо по плану, ось Y вверх по плану.
"""
from __future__ import annotations

import numpy as np

import planlib as pl

CELL = 0.05  # сетка 5 см
PAD = 40     # поля в клетках (2 м)


def extract(image_path: str, m_per_px: float, core_px: tuple[float, float], *,
            facade_gap_m: float = 2.2, door_gap_m: float = 1.25,
            black_lines: bool = False) -> dict:
    rgba = pl.load_rgba(image_path)
    walls_px = pl.wall_mask(rgba)
    shafts_px = pl.shaft_mask(rgba)
    # тонкие линии без сглаженных краёв стен (ореол в 3 пикселя вокруг заливки)
    lines_px = pl.line_mask(rgba, black=black_lines) & ~pl.dilate(walls_px, 3)

    g_wall = pl.mask_to_cells(walls_px, m_per_px, CELL, 0.4)
    # дуги и полотна дверей нарисованы тем же цветом, что стены: сначала снимаем линии в одну клетку,
    # потом отсекаем мелкие и «дырявые» фрагменты
    g_wall = pl.open2x2(g_wall)
    g_wall = pl.straight_only(g_wall, min_run=int(0.4 / CELL), block=5)
    cell_a = CELL * CELL
    g_wall = pl.filter_components(
        g_wall, lambda w, h, n: n * cell_a >= 0.06 and (n * cell_a >= 0.3 or n / (w * h) >= 0.4))
    g_shaft = pl.mask_to_cells(shafts_px, m_per_px, CELL, 0.6)
    # шахты — сплошные блоки от 25 см; тонкие светло-серые кольца (тени значков площадей) отбрасываем
    g_shaft = pl.dilate(pl.erode(g_shaft, 2), 2) & g_shaft & ~g_wall
    g_lines = pl.mask_to_cells(lines_px, m_per_px, CELL, 0.08) & ~g_wall
    # поля 2 м вокруг плана: снаружи здания должно быть свободное место, иначе морфология
    # принимает край картинки за стену
    M = PAD
    g_wall, g_shaft, g_lines = (np.pad(m, M) for m in (g_wall, g_shaft, g_lines))
    core_px = (core_px[0] + M * CELL / m_per_px, core_px[1] + M * CELL / m_per_px)
    G = g_wall | g_shaft

    # 1. контур перекрытия: стены + линии окон, короткие разрывы закрыты, внутренность залита
    r_fac = int(round(facade_gap_m / CELL / 2))
    F = pl.fill_holes(pl.close_axis(G | g_lines, r_fac))
    F = pl.erode(pl.dilate(F, 2), 2)
    outside = ~F
    band = pl.dilate(outside, int(0.8 / CELL)) & F           # полоса вдоль фасада

    # 2. стекло: линии окон в фасадной полосе, сшитые в сплошные полосы, без стен
    glass = pl.close_axis(g_lines & band, int(0.5 / CELL)) & band & ~G
    thin = int(0.35 / CELL)
    glass = pl.filter_components(glass, lambda w, h, n: min(w, h) <= thin and max(w, h) * CELL >= 0.5)

    # 3. дверные проёмы: короткие разрывы стен, похожие на дверь по форме
    r_door = int(round(door_gap_m / CELL / 2))
    gaps = pl.close_axis(G | glass, r_door) & F & ~G & ~glass
    def door_like(w, h, n):
        short, long_ = min(w, h) * CELL, max(w, h) * CELL
        return short <= 0.5 and 0.55 <= long_ <= 1.45
    doors = pl.filter_components(gaps, door_like)

    # 4. комнаты: свободные области при закрытых проёмах
    solid = G | glass | doors
    free = F & ~solid
    labels, sizes = pl.components(free, min_size=int(0.8 / CELL ** 2))
    rooms = []
    cell_area = CELL * CELL
    for i, s in enumerate(sizes):
        if i == 0 or s < int(0.8 / cell_area):
            continue
        ys, xs = np.nonzero(labels == i)
        rooms.append({
            'x': _mx(xs.mean() + 0.5, m_per_px, core_px),
            'y': _my(ys.mean() + 0.5, m_per_px, core_px),
            'area': round(s * cell_area, 1),
        })
    windows = glass

    ext_mask = G & pl.dilate(outside, int(0.7 / CELL))
    int_mask = G & ~ext_mask

    return {
        'cell': CELL,
        'walls_ext': _rects_m(ext_mask, m_per_px, core_px),
        'walls_ext_normals': _normals(ext_mask, outside),
        'walls_int': _rects_m(int_mask, m_per_px, core_px),
        'glass': _rects_m(windows, m_per_px, core_px),
        'door_heads': _rects_m(doors, m_per_px, core_px),
        'slab': _rects_m(F, m_per_px, core_px),
        'outline': _outline_m(F, m_per_px, core_px),
        'rooms': rooms,
        'bbox': _bbox(F, m_per_px, core_px),
    }


def _mx(ix: float, s: float, core) -> float:
    return round(ix * CELL - core[0] * s, 3)


def _my(iy: float, s: float, core) -> float:
    return round(-(iy * CELL - core[1] * s), 3)


def _rects_m(mask: np.ndarray, s: float, core) -> list[list[float]]:
    out = []
    for x0, y0, x1, y1 in pl.rectangles(mask):
        X0, X1 = _mx(x0, s, core), _mx(x1, s, core)
        Y0, Y1 = _my(y1, s, core), _my(y0, s, core)
        out.append([round(X0, 2), round(Y0, 2), round(X1, 2), round(Y1, 2)])
    return out


def _outline_m(F: np.ndarray, s: float, core) -> list[list[float]]:
    """Периметр перекрытия: [x0, y0, x1, y1, nx, ny] в метрах, нормаль наружу (ось Y — вверх по плану)."""
    out = []
    for x0, y0, x1, y1, nx, ny in pl.boundary_segments(F, min_len=4):
        out.append([round(_mx(x0, s, core), 2), round(_my(y0, s, core), 2),
                    round(_mx(x1, s, core), 2), round(_my(y1, s, core), 2), nx, -ny])
    return out


def _normals(mask: np.ndarray, outside: np.ndarray) -> list[str]:
    """Для каждого прямоугольника наружной стены — сторона, смотрящая наружу: 'N','S','E','W' по плану."""
    h, w = mask.shape
    out = []
    for x0, y0, x1, y1 in pl.rectangles(mask):
        score = {}
        for side, (ys, xs) in {
            'N': (slice(max(y0 - 6, 0), y0), slice(x0, x1)),
            'S': (slice(y1, min(y1 + 6, h)), slice(x0, x1)),
            'W': (slice(y0, y1), slice(max(x0 - 6, 0), x0)),
            'E': (slice(y0, y1), slice(x1, min(x1 + 6, w))),
        }.items():
            region = outside[ys, xs]
            score[side] = float(region.mean()) if region.size else 0.0
        best = max(score, key=score.get)
        out.append(best if score[best] > 0.5 else '')
    return out


def _bbox(F: np.ndarray, s: float, core) -> list[float]:
    ys, xs = np.nonzero(F)
    return [_mx(xs.min(), s, core), _my(ys.max() + 1, s, core), _mx(xs.max() + 1, s, core), _my(ys.min(), s, core)]
