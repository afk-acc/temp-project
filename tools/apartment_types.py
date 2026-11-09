"""Реальные планировки квартир Harizma из каталога Golden House 2025 (стр. 36–37) → типы квартир.

Для каждого типа: картинка чертежа (для карточки), геометрия в метрах (стены, окна, проёмы, комнаты) для прогулки,
сторона фасада (где больше окон), габариты, список комнат с площадями из каталога.
Площади и названия комнат — из каталога (часть подписей у 41,79 м² в PDF нарисована кривыми — переписаны с чертежа).
Запуск: python3 -I tools/apartment_types.py  → data-build/projects/harizma/apartment-types.json + types/<code>.png
"""
from __future__ import annotations

import json
import math
import os
import re
import statistics
import sys
import tempfile

import numpy as np
from PIL import Image

sys.path.insert(0, os.path.dirname(__file__))
import extract_floorplan as ef  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'data-src', 'harizma')
OUT = os.path.join(ROOT, 'data-build', 'projects', 'harizma')
PAGE = os.path.join(SRC, 'catalog-p36-37-1.png')
DPI_K = 300 / 72
GROSS = 1.18   # брутто/нетто для квартиры с наружными стенами и лоджией

# box — область чертежа на странице (px при 300 dpi); rooms — подписи каталога
TYPES = [
    {'code': 'H1-34', 'title': 'Однокомнатная', 'rooms': 1, 'area': 33.98, 'box': [252, 650, 1070, 1650],
     'room_list': [('Кухня', 14.14), ('Спальня', 11.23), ('Прихожая', 3.31), ('С/у', 3.88), ('Лоджия', 1.60)]},
    {'code': 'H1-36', 'title': 'Однокомнатная', 'rooms': 1, 'area': 35.90, 'box': [1340, 650, 2292, 1636],
     'room_list': [('Кухня', 12.58), ('Спальня', 14.40), ('Прихожая', 3.62), ('С/у', 3.62), ('Лоджия', 1.82)]},
    {'code': 'H2-59', 'title': 'Двухкомнатная', 'rooms': 2, 'area': 59.49, 'box': [2788, 650, 4124, 1372],
     'room_list': [('Зал', 17.56), ('Спальня', 15.22), ('Кухня', 11.32), ('Прихожая', 7.18), ('С/у', 3.58), ('С/у', 3.12), ('Лоджия', 1.82)]},
    {'code': 'H3E-62', 'title': 'Трёхкомнатная (евро)', 'rooms': 3, 'area': 62.0, 'box': [4236, 640, 4756, 1668],
     'room_list': [('Кухня-гостиная', 20.84), ('Спальня', 12.15), ('Спальня', 11.35), ('Прихожая', 8.66), ('С/у', 3.61), ('С/у', 2.75)]},
    {'code': 'H2E-42', 'title': 'Двухкомнатная (евро)', 'rooms': 2, 'area': 41.79, 'box': [236, 2100, 1520, 2876],
     'room_list': [('Кухня-гостиная', 17.47), ('Спальня', 14.00), ('Прихожая', 4.48), ('С/у', 4.09), ('Лоджия', 2.25)]},
    {'code': 'H2E-54', 'title': 'Двухкомнатная (евро)', 'rooms': 2, 'area': 54.01, 'box': [1574, 2100, 2404, 2876],
     'room_list': [('Зал', 16.18), ('Спальня', 13.63), ('Кухня', 10.42), ('Прихожая', 6.47), ('С/у', 4.04), ('С/у', 1.75), ('Лоджия', 1.75)]},
    {'code': 'H3-76', 'title': 'Трёхкомнатная', 'rooms': 3, 'area': 76.10, 'box': [2788, 1960, 4116, 2884],
     'room_list': [('Зал', 17.80), ('Спальня', 15.07), ('Спальня', 13.15), ('Кухня', 12.23), ('Прихожая', 8.90), ('С/у', 3.99), ('С/у', 3.54), ('Лоджия', 2.36)]},
    {'code': 'H4E-84', 'title': 'Четырёхкомнатная (евро)', 'rooms': 4, 'area': 83.68, 'box': [4220, 1960, 4932, 3092],
     'room_list': [('Кухня-гостиная', 20.19), ('Спальня', 10.89), ('Спальня', 10.34), ('Зал', 10.68), ('Прихожая, коридор', 10.53),
                   ('Гардероб', 2.67), ('С/у', 4.49), ('С/у', 4.28), ('С/у', 2.72), ('Лоджия', 2.35)]},
]


def page_words() -> list[tuple[float, float, str]]:
    """Числа-площади со страницы PDF (центры в px при 300 dpi)."""
    import subprocess
    xml = subprocess.run(['pdftotext', '-bbox', os.path.join(SRC, 'catalog-p36-37.pdf'), '-'],
                         capture_output=True, text=True, check=True).stdout
    out = []
    for a, b, c, d, w in re.findall(r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</word>', xml):
        if re.fullmatch(r'\d{1,2}\.\d{1,2}', w):
            out.append(((float(a) + float(c)) / 2 * DPI_K, (float(b) + float(d)) / 2 * DPI_K, w))
    return out


def prepare_crop(page: Image.Image, box) -> Image.Image:
    """Вырезка с полями; чёрные стены перекрашиваются в цвет стен Profitbase, чтобы сработал общий конвейер."""
    x0, y0, x1, y1 = box
    crop = page.crop((x0 - 40, y0 - 40, x1 + 40, y1 + 40)).convert('RGB')
    a = np.array(crop).astype(np.int16)
    lum = a.mean(axis=2)
    neutral = (a.max(axis=2) - a.min(axis=2)) < 25
    walls = (lum < 60) & neutral
    a[walls] = (48, 48, 48)
    rgba = np.dstack([a.astype(np.uint8), np.full(lum.shape, 255, np.uint8)])
    return Image.fromarray(rgba, 'RGBA')


def extract_type(img: Image.Image, s: float):
    with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as f:
        img.save(f.name)
        w, h = img.size
        geo = ef.extract(f.name, s, (w / 2, h / 2), facade_gap_m=2.2, glass_max_thick_m=0.7)
    os.unlink(f.name)
    return geo


def fit_area_factor(extracted: list[float], catalog: list[float]) -> float:
    """Коэффициент площадей f: при площадях комнат ×f больше всего комнат совпадает с каталогом (±8 %)."""
    best = (0, 1e9, 1.0)
    for i in range(240):
        f = 0.3 * (10 ** (i / 240 * math.log10(4 / 0.3)))
        left = sorted(catalog)
        matched, err = 0, 0.0
        for a in sorted(extracted):
            a *= f
            if a < 1.2 or not left:
                continue
            j = min(range(len(left)), key=lambda k: abs(left[k] - a))
            rel = abs(left[j] - a) / left[j]
            if rel <= 0.08:
                matched += 1
                err += rel
                left.pop(j)
        if matched > best[0] or (matched == best[0] and err < best[1]):
            best = (matched, err, f)
    return best[2]


def facade_side(geo) -> str:
    """Сторона габарита с наибольшей длиной окон: N/S/E/W в осях чертежа (Y вверх)."""
    x0, y0, x1, y1 = geo['bbox']
    score = {'N': 0.0, 'S': 0.0, 'E': 0.0, 'W': 0.0}
    for gx0, gy0, gx1, gy1 in geo['glass']:
        cx, cy = (gx0 + gx1) / 2, (gy0 + gy1) / 2
        length = max(gx1 - gx0, gy1 - gy0)
        d = {'N': abs(y1 - cy), 'S': abs(cy - y0), 'E': abs(x1 - cx), 'W': abs(cx - x0)}
        side = min(d, key=d.get)
        if d[side] < 0.9:
            score[side] += length
    return max(score, key=score.get)


def main() -> None:
    os.makedirs(os.path.join(OUT, 'types'), exist_ok=True)
    page = Image.open(PAGE)
    # масштаб каждого чертежа: площадь перекрытия (брутто) ≈ 1,18 × площадь по каталогу; две итерации.
    # Сверено с оценкой по заливке подписанных комнат (tools/plan_scale.py) там, где она устойчива.
    out, scales = [], {}
    for t in TYPES:
        img = prepare_crop(page, t['box'])
        s = 0.0107
        for _ in range(3):
            geo = extract_type(img, s)
            slab = sum((r[2] - r[0]) * (r[3] - r[1]) for r in geo['slab'])
            s = s * math.sqrt(t['area'] * GROSS / slab)
        scales[t['code']] = s
    common = statistics.median(scales.values())
    for t in TYPES:
        s = scales.get(t['code'], common)
        img = prepare_crop(page, t['box'])
        geo = extract_type(img, s)
        side = facade_side(geo)
        x0, y0, x1, y1 = geo['bbox']
        # картинка для карточки: исходный чертёж без перекраски
        x_0, y_0, x_1, y_1 = t['box']
        page.crop((x_0 - 20, y_0 - 20, x_1 + 20, y_1 + 20)).convert('RGB').save(os.path.join(OUT, 'types', f"{t['code']}.png"), optimize=True)
        out.append({
            'code': t['code'], 'title': t['title'], 'rooms': t['rooms'], 'area': t['area'],
            'room_list': [{'name': n, 'area': a} for n, a in t['room_list']],
            'image': f"/api/projects/harizma/types/{t['code']}.png",
            'm_per_px': round(s, 6), 'width': round(x1 - x0, 2), 'depth': round(y1 - y0, 2), 'facade': side,
            'geometry': {k: geo[k] for k in ('walls_ext', 'walls_int', 'glass', 'door_heads', 'slab', 'outline', 'rooms', 'bbox')},
            'source': 'Каталог Golden House 2025, стр. 36–37 (gh.uz)',
        })
        print(f"{t['code']:8s} масштаб {s:.5f}{'' if t['code'] in scales else ' (общий)'}, габарит {x1 - x0:.1f}×{y1 - y0:.1f} м, "
              f"фасад {side}, стен {len(geo['walls_int'])}, окон {len(geo['glass'])}, комнат {len(geo['rooms'])}")
    with open(os.path.join(OUT, 'apartment-types.json'), 'w', encoding='utf-8') as f:
        json.dump({'items': out}, f, ensure_ascii=False, separators=(',', ':'))


if __name__ == '__main__':
    main()
