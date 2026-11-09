"""Этаж секции из РЕАЛЬНЫХ планировок: подбор типов квартир под длину сторон, разворот окнами на фасад.

Секция L×W (длинная ось — X плана): коридор вдоль X (±1 м), лифтовое ядро в середине северной стороны (y < 0).
Каждая сторона заполняется последовательностью типов, сумма ширин по фасаду которых ≈ длине стороны; ширины
мест подгоняются пропорционально, геометрия квартиры не растягивается: она разворачивается окнами наружу,
прижимается к фасаду и обрезается границами своего места (что не влезло в условную сетку — отрезается).
"""
from __future__ import annotations

import itertools

from synth_layout import CORE, CORR, WALL, WALL_EXT, r, wall_with_doors

ROT = {'N': 0, 'W': 1, 'S': 2, 'E': 3}   # сколько раз повернуть на 90° против часовой, чтобы фасад смотрел вверх (+Y)


def rot_rect(rc, k):
    x0, y0, x1, y1 = rc
    pts = [(x0, y0), (x1, y0), (x1, y1), (x0, y1)]
    for _ in range(k % 4):
        pts = [(-y, x) for x, y in pts]
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    return [min(xs), min(ys), max(xs), max(ys)]


def rot_pt(x, y, k):
    for _ in range(k % 4):
        x, y = -y, x
    return x, y


def oriented(t):
    """Тип, развёрнутый окнами вверх (+Y): ширина вдоль фасада, глубина, геометрия."""
    k = ROT.get(t['facade'], 0)
    g = t['geometry']
    bb = rot_rect(g['bbox'], k)
    return {'k': k, 'width': bb[2] - bb[0], 'depth': bb[3] - bb[1], 'bbox': bb}


def pick_sequence(length: float, depth: float, types: list, seed: int):
    """Последовательность типов, чья сумма ширин ближе всего к length (до 4 квартир на отрезок)."""
    cands = []
    for t in types:
        o = oriented(t)
        if o['width'] <= length + 0.4 and o['depth'] <= depth + 1.6:
            cands.append((t, o))
    best, best_score = [], 1e9
    for n in (1, 2, 3, 4):
        for combo in itertools.product(range(len(cands)), repeat=n):
            if list(combo) != sorted(combo) and n > 2:
                continue
            total = sum(cands[i][1]['width'] for i in combo)
            if total > length + 0.6:
                continue
            gap = length - total
            variety = len(set(combo))
            repeats = n - variety
            big = sum(1 for i in combo if cands[i][1]['width'] > 9)
            # точность заполнения важнее всего, но поощряем разнообразие и крупные квартиры; seed разводит секции
            score = abs(gap) * 1.4 - variety * 0.9 + repeats * 0.7 - big * 0.35 + ((sum(combo) * 7 + seed * 13) % 11) * 0.06
            if score < best_score:
                best, best_score = [cands[i] for i in combo], score
    return best


def clip(rc, box):
    x0, y0, x1, y1 = max(rc[0], box[0]), max(rc[1], box[1]), min(rc[2], box[2]), min(rc[3], box[3])
    return [round(x0, 2), round(y0, 2), round(x1, 2), round(y1, 2)] if x1 - x0 > 0.02 and y1 - y0 > 0.02 else None


def place(t, o, slot_box, facade_up: bool):
    """Геометрия типа в системе секции: разворот, прижим к фасаду, центр по месту, обрезка местом."""
    k = o['k'] if facade_up else o['k'] + 2
    g = t['geometry']
    bb = rot_rect(g['bbox'], k)
    sx0, sy0, sx1, sy1 = slot_box
    cx = (sx0 + sx1) / 2
    dx = cx - (bb[0] + bb[2]) / 2
    dy = (sy1 - bb[3]) if facade_up else (sy0 - bb[1])
    out = {}
    for key in ('walls_ext', 'walls_int', 'door_heads'):
        items = []
        for rc in g[key]:
            q = rot_rect(rc, k)
            q = [q[0] + dx, q[1] + dy, q[2] + dx, q[3] + dy]
            c = clip(q, slot_box)
            if c:
                items.append(c)
        out[key] = items
    rooms = []
    for rm in g['rooms']:
        x, y = rot_pt(rm['x'], rm['y'], k)
        x, y = x + dx, y + dy
        if sx0 < x < sx1 and sy0 < y < sy1:
            rooms.append({'x': round(x, 2), 'y': round(y, 2), 'area': rm['area']})
    out['rooms'] = rooms
    return out


def compose(L: float, W: float, types: list, seed: int = 0):
    hx, hy = L / 2, W / 2
    ix0, ix1 = -hx + WALL_EXT, hx - WALL_EXT
    side_depth = hy - WALL_EXT - CORR
    segments = [('S', ix0, ix1), ('N', ix0, -CORE), ('N', CORE, ix1)]
    slots = []
    for side, a, b in segments:
        seq = pick_sequence(b - a, side_depth, types, seed + len(slots))
        if not seq:
            continue
        total = sum(o['width'] for _, o in seq)
        x = a
        for t, o in seq:
            w = o['width'] * (b - a) / total
            slots.append({'side': side, 'x0': x, 'x1': x + w, 'type': t, 'o': o})
            x += w

    walls_int, heads, rooms, out_slots = [], [], [], []
    # ядро
    core_y0, core_y1 = -hy + WALL_EXT, -CORR
    walls_int += [r(-CORE - WALL / 2, core_y0, -CORE + WALL / 2, core_y1), r(CORE - WALL / 2, core_y0, CORE + WALL / 2, core_y1)]
    wall_with_doors('x', core_y1, -CORE, CORE, WALL, [-0.6], walls_int, heads)
    walls_int += [r(0.1, core_y0, 0.3, core_y1 - 0.2), r(0.3, core_y0 + 2.2, CORE, core_y0 + 2.4), r(1.7, core_y0, 1.9, core_y0 + 2.2)]
    # коридорные стены с дверями квартир
    doors = {'S': [], 'N': []}
    for s in slots:
        doors[s['side']].append((s['x0'] + s['x1']) / 2 - 0.45)
    wall_with_doors('x', CORR, ix0, ix1, WALL, doors['S'], walls_int, heads)
    wall_with_doors('x', -CORR, ix0, -CORE, WALL, [d for d in doors['N'] if d < 0], walls_int, heads)
    wall_with_doors('x', -CORR, CORE, ix1, WALL, [d for d in doors['N'] if d > 0], walls_int, heads)

    for i, s in enumerate(slots):
        up = s['side'] == 'S'
        y_in, y_out = (CORR + WALL / 2, hy - WALL_EXT) if up else (-hy + WALL_EXT, -CORR - WALL / 2)
        box = [round(s['x0'], 2), round(y_in, 2), round(s['x1'], 2), round(y_out, 2)]
        if i and s['x0'] - 0.01 > ix0 and not (s['side'] == 'N' and abs(s['x0'] - CORE) < 0.05):
            walls_int.append(r(s['x0'] - WALL / 2, box[1], s['x0'] + WALL / 2, box[3]))
        inner = place(s['type'], s['o'], box, up)
        walls_int += [w for w in inner['walls_int'] + inner['walls_ext'] if not touches_facade(w, hy)]
        heads += inner['door_heads']
        rooms += inner['rooms']
        poly = [[box[0], box[1]], [box[2], box[1]], [box[2], box[3]], [box[0], box[3]]]
        t = s['type']
        out_slots.append({'slot': i, 'side': s['side'], 'type_code': t['code'], 'rooms': t['rooms'], 'area': t['area'],
                          'polygon': poly if up else poly[::-1], 'room_list': t['room_list']})
    return walls_int, heads, rooms, out_slots


def touches_facade(rc, hy):
    """Наружные стены квартиры, лежащие на фасаде, не дублируем — фасад рисуется корпусом."""
    return rc[3] > hy - WALL_EXT - 0.05 or rc[1] < -hy + WALL_EXT + 0.05
