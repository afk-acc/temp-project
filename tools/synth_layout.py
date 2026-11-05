"""Тестовая планировка секции по реальному контуру корпуса (когда планов застройщика нет).

Корпус — прямоугольная секция L×W (длинная ось — X плана). Сетка:
  коридор вдоль X по центру (ширина 2 м), лифтовое ядро в середине северной стороны,
  квартиры: юг — 3 (торцевые 3-комн., средняя 2-комн.), север — 2 торцевые (2–3-комн.).
  Внутри квартиры: у коридора полоса прихожей и санузла (2,6 м), у фасада — комнаты.
Выход — тот же формат FloorType, что у планов C1 (прямоугольники в метрах плана).
ВСЁ ЭТО УСЛОВНО: показывает возможности продукта, а не реальные квартиры ЖК.
"""
from __future__ import annotations

import math

WALL_EXT = 0.35
WALL = 0.2
PART = 0.12
DOOR = 0.9
CORR = 1.0          # полуширина коридора
SERVICE = 2.6       # глубина полосы прихожей/санузла
CORE = 3.2          # полуширина лифтового ядра по X


def obb(points):
    """Минимальный по площади прямоугольник: центр, угол длинной оси (рад), длина, ширина."""
    best = None
    n = len(points)
    for i in range(n):
        x1, y1 = points[i]
        x2, y2 = points[(i + 1) % n]
        th = math.atan2(y2 - y1, x2 - x1)
        c, s = math.cos(th), math.sin(th)
        us = [x * c + y * s for x, y in points]
        vs = [-x * s + y * c for x, y in points]
        L, W = max(us) - min(us), max(vs) - min(vs)
        if best is None or L * W < best[0]:
            uc, vc = (max(us) + min(us)) / 2, (max(vs) + min(vs)) / 2
            best = (L * W, th, L, W, uc * c - vc * s, uc * s + vc * c)
    _, th, L, W, cx, cy = best
    if W > L:
        th += math.pi / 2
        L, W = W, L
    return (cx, cy), th, L, W


def azimuth_for_axis(th: float) -> float:
    """Азимут «верха плана» (ось Y плана), если ось X плана смотрит вдоль th (ENU, от востока)."""
    ux, uy = math.cos(th), math.sin(th)
    vx, vy = -uy, ux  # Y плана — на 90° против часовой от X
    return math.degrees(math.atan2(vx, vy)) % 360


def r(x0, y0, x1, y1):
    return [round(min(x0, x1), 2), round(min(y0, y1), 2), round(max(x0, x1), 2), round(max(y0, y1), 2)]


def wall_with_doors(axis: str, fixed: float, a: float, b: float, t: float, doors: list[float], walls, heads):
    """Стена вдоль оси с проёмами шириной DOOR, начинающимися в точках doors."""
    cur = a
    for d in sorted(doors):
        d0, d1 = max(a, d), min(b, d + DOOR)
        if d0 > cur:
            walls.append(r(cur, fixed - t / 2, d0, fixed + t / 2) if axis == 'x' else r(fixed - t / 2, cur, fixed + t / 2, d0))
        heads.append(r(d0, fixed - t / 2, d1, fixed + t / 2) if axis == 'x' else r(fixed - t / 2, d0, fixed + t / 2, d1))
        cur = d1
    if b > cur:
        walls.append(r(cur, fixed - t / 2, b, fixed + t / 2) if axis == 'x' else r(fixed - t / 2, cur, fixed + t / 2, b))


def section(L: float, W: float, retail: bool = False):
    """Два типа этажа: R (коммерция, только ядро) и T (жилой). Возвращает (types, slots)."""
    hx, hy = L / 2, W / 2
    ix0, ix1, iy0, iy1 = -hx + WALL_EXT, hx - WALL_EXT, -hy + WALL_EXT, hy - WALL_EXT
    outline = [
        [-hx, hy, hx, hy, 0, 1], [hx, -hy, hx, hy, 1, 0], [-hx, -hy, hx, -hy, 0, -1], [-hx, -hy, -hx, hy, -1, 0],
    ]
    slab = [r(-hx, -hy, hx, hy)]
    bbox = r(-hx, -hy, hx, hy)

    # квартиры: (сторона, x0, x1, комнат)
    xs = -hx + WALL_EXT
    xe = hx - WALL_EXT
    third = (xe - xs) / 3
    slots_def = [
        ('S', xs, xs + third + 0.4, 3), ('S', xs + third + 0.4, xe - third - 0.4, 2), ('S', xe - third - 0.4, xe, 3),
        ('N', xs, -CORE, 3), ('N', CORE, xe, 2),
    ]

    walls_int: list = []
    heads: list = []
    rooms: list = []
    slots: list = []

    # ядро: стены по периметру, лестница и два лифта
    core_y0, core_y1 = iy0, -CORR
    walls_int += [r(-CORE - WALL / 2, core_y0, -CORE + WALL / 2, core_y1), r(CORE - WALL / 2, core_y0, CORE + WALL / 2, core_y1)]
    wall_with_doors('x', core_y1, -CORE, CORE, WALL, [-0.6], walls_int, heads)
    walls_int += [r(0.1, core_y0, 0.3, core_y1 - 0.2)]                        # стена лестничной клетки
    walls_int += [r(0.3, core_y0 + 2.2, CORE, core_y0 + 2.4), r(1.7, core_y0, 1.9, core_y0 + 2.2)]  # шахты лифтов
    walls_int += [r(0.3, core_y0, CORE, core_y0 + 0.2)]

    def facade_windows(side, x0, x1):
        return [(x0, x1)]

    if not retail:
        # коридорные стены с входными дверями квартир
        doors_s, doors_n = [], []
        for side, x0, x1, n in slots_def:
            door = x0 + 0.5 if x0 < 0 else x1 - 0.5 - DOOR
            if side == 'S':
                doors_s.append(door)
            else:
                doors_n.append(door)
        wall_with_doors('x', CORR, ix0, ix1, WALL, doors_s, walls_int, heads)
        wall_with_doors('x', -CORR, ix0, -CORE, WALL, [d for d in doors_n if d < 0], walls_int, heads)
        wall_with_doors('x', -CORR, CORE, ix1, WALL, [d for d in doors_n if d > 0], walls_int, heads)

        for i, (side, x0, x1, n) in enumerate(slots_def):
            s = 1 if side == 'S' else -1
            yc = s * CORR
            yf = s * (hy - WALL_EXT)
            ys = yc + s * SERVICE
            # разделительные стены между квартирами
            if i not in (0, 3):
                walls_int.append(r(x0 - WALL / 2, min(yc, yf), x0 + WALL / 2, max(yc, yf)))
            # полоса прихожей: санузел у противоположного от двери края
            entrance_left = x0 < 0
            bath = (x1 - 2.3, x1) if entrance_left else (x0, x0 + 2.3)
            bwall_x = bath[0] if entrance_left else bath[1]
            wall_with_doors('y', bwall_x, min(yc, ys), max(yc, ys), PART, [min(yc, ys) + 0.6], walls_int, heads)
            # комнаты у фасада
            shares = {1: [1.0], 2: [0.56, 0.44], 3: [0.42, 0.29, 0.29]}[n]
            cuts = [x0]
            for sh in shares:
                cuts.append(cuts[-1] + (x1 - x0) * sh)
            room_doors = [cuts[k] + 0.5 for k in range(len(shares))]
            wall_with_doors('x', ys, x0, x1, PART, room_doors, walls_int, heads)
            for k in range(1, len(cuts) - 1):
                walls_int.append(r(cuts[k] - PART / 2, min(ys, yf), cuts[k] + PART / 2, max(ys, yf)))
            unit_rooms = []
            for k in range(len(shares)):
                a, b = cuts[k], cuts[k + 1]
                area = (b - a) * abs(yf - ys)
                name = 'кухня-гостиная' if k == 0 else 'спальня'
                rooms.append({'x': round((a + b) / 2, 2), 'y': round((ys + yf) / 2, 2), 'area': round(area, 1)})
                unit_rooms.append({'name': name, 'area': round(area, 1)})
            hall_x = ((x0 + bath[0]) / 2) if entrance_left else ((bath[1] + x1) / 2)
            hall_w = (bath[0] - x0) if entrance_left else (x1 - bath[1])
            rooms.append({'x': round(hall_x, 2), 'y': round((yc + ys) / 2, 2), 'area': round(hall_w * SERVICE, 1)})
            rooms.append({'x': round((bath[0] + bath[1]) / 2, 2), 'y': round((yc + ys) / 2, 2), 'area': round(2.3 * SERVICE, 1)})
            unit_rooms += [{'name': 'прихожая и коридор', 'area': round(hall_w * SERVICE, 1)}, {'name': 'санузел', 'area': round(2.3 * SERVICE, 1)}]
            poly = [[round(x0, 2), round(yc, 2)], [round(x1, 2), round(yc, 2)], [round(x1, 2), round(yf, 2)], [round(x0, 2), round(yf, 2)]]
            if s < 0:
                poly = poly[::-1]
            area = (x1 - x0) * abs(yf - yc) * 0.96
            slots.append({'slot': i, 'side': side, 'rooms': n, 'polygon': poly, 'area': round(area, 2), 'room_list': unit_rooms})

    # фасад: простенки между окнами (окна — проёмы ~1,7 м по центру каждых ~2,9 м)
    walls_ext = []
    for (x0, y0, x1, y1, nx, ny) in outline:
        length = abs(x1 - x0) + abs(y1 - y0)
        k = max(2, round(length / 2.9))
        step = length / k
        for j in range(k):
            a = j * step
            win0, win1 = a + (step - 1.7) / 2, a + (step + 1.7) / 2
            for p0, p1 in ((a, win0), (win1, a + step)):
                if p1 - p0 < 0.05:
                    continue
                if ny != 0:
                    yy = y0
                    walls_ext.append(r(x0 + p0, yy - ny * WALL_EXT, x0 + p1, yy))
                else:
                    xx = x0
                    walls_ext.append(r(xx - nx * WALL_EXT, y0 + p0, xx, y0 + p1))

    def ft(tid, label, kind, wi, hd, rm):
        return {'id': tid, 'kind': kind, 'label': label, 'cell': 0.05, 'walls_ext': walls_ext, 'walls_int': wi,
                'glass': [], 'door_heads': hd, 'slab': slab, 'outline': outline, 'rooms': rm, 'bbox': bbox,
                'source': {'generated': True}}

    core_walls = [w for w in walls_int]  # для R ниже пересобираем отдельно
    types = {'T': ft('T', 'Тестовая планировка секции (5 квартир)', 'tower', walls_int, heads, rooms)}
    if retail:
        types = {}
    return types, slots, core_walls


def build_block(block: dict, seed: int):
    """Типы этажей, этажи и слоты квартир для корпуса; координаты контура — ENU корпуса."""
    (cx, cy), th, L, W = obb(block['footprint'])
    az = azimuth_for_axis(th)
    t_res, slots, _ = section(L, W, retail=False)
    t_ret, _, core_only = section(L, W, retail=True)
    types = dict(t_res)
    floors = []
    z = 0.0
    for n in range(1, block['levels'] + 1):
        h = block['first_floor'] if n == 1 else block['floor_height']
        retail = n == 1 and block['retail_ground']
        if retail and 'R' not in types:
            base = dict(t_res['T'])
            base.update({'id': 'R', 'label': 'Первый этаж: коммерция', 'kind': 'podium', 'walls_int': core_only, 'door_heads': [], 'rooms': []})
            types['R'] = base
        floors.append({'n': n, 'type': 'R' if retail else 'T', 'elevation': round(z, 2), 'height': h, 'residential': not retail})
        z += h
    return {
        'id': block['id'], 'origin': [round(cx, 2), round(cy, 2)], 'azimuth_deg': round(az, 2),
        'length': round(L, 2), 'width': round(W, 2), 'slab': 0.25, 'crown_height': block['parapet'],
        'height': block['height'], 'floors': floors, 'floor_types': types,
    }, slots
