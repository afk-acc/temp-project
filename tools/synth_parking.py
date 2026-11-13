"""Тестовый подземный паркинг ЖК (когда планов застройщика нет).

Паркинг лежит под центральной частью комплекса: контур — выпуклая оболочка корпусов, сжатая к центру так,
чтобы вышло около RATIO мест на квартиру на LEVELS уровнях. Раскладка по оси корпусов:
ряды мест 2,5 × 5,3 м спиной к спине, между рядами проезды 6 м, по торцам и через каждые ~60 м — поперечные проезды.
Под каждым корпусом, если он над паркингом, — ядро (лифт и лестница в подъезд), у ближайшего к улице торца — рампа.
Колонны 0,5 × 0,5 м — по краю проездов, через каждые 3 места.
Типы мест: обычное, широкое (3 м, в концах рядов), для маломобильных (3,6 м, по одному у каждого ядра), с зарядкой.
Статусы и цены (сумы) — случайные. ВСЁ ЭТО УСЛОВНО и помечено test: true.

    python3 -I tools/synth_parking.py nrg-mirzo-ulugbek harizma
пишет data-build/projects/<slug>/parking.json; в базу — `php artisan zhk:import <slug>` (статусы из CRM сохраняются).
"""
from __future__ import annotations

import json
import math
import random
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BUILD = ROOT / 'data-build' / 'projects'

LEVELS = 2
LEVEL_H = 3.3        # м, от пола до пола
RATIO = 0.55         # мест на квартиру всего
SPOT_W = 2.5
WIDE_W = 3.0
MGN_W = 3.6
SPOT_D = 5.3
AISLE = 6.0
WALL = 0.3           # отступ от наружной стены
CROSS_EVERY = 60.0   # м, поперечный проезд
CORE = (8.0, 6.0)    # ядро: вдоль u × вдоль v
COL = 0.5            # колонна 0,5 × 0,5 м, по краю проезда через каждые 3 места
RAMP = (24.0, 7.0)   # рампа: длина × ширина
STREETS = {'primary', 'secondary', 'tertiary', 'residential', 'unclassified', 'living_street', 'service', 'trunk'}
PRICE_BASE = {-1: 150_000_000, -2: 135_000_000}
KIND_K = {'standard': 1.0, 'wide': 1.12, 'ev': 1.18, 'mgn': 1.0}
STATUS_W = [('sold', 0.45), ('booked', 0.10), ('available', 0.40), ('unavailable', 0.05)]


def hull(points):
    pts = sorted(set(points))
    if len(pts) < 3:
        return pts

    def cross(o, a, b):
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
    lower, upper = [], []
    for p in pts:
        while len(lower) >= 2 and cross(lower[-2], lower[-1], p) <= 0:
            lower.pop()
        lower.append(p)
    for p in reversed(pts):
        while len(upper) >= 2 and cross(upper[-2], upper[-1], p) <= 0:
            upper.pop()
        upper.append(p)
    return lower[:-1] + upper[:-1]


def dominant_angle(polys):
    bins = [0.0] * 90
    for p in polys:
        for i in range(len(p)):
            (ax, ay), (bx, by) = p[i], p[(i + 1) % len(p)]
            ln = math.hypot(bx - ax, by - ay)
            if ln < 0.5:
                continue
            deg = math.degrees(math.atan2(by - ay, bx - ax)) % 90
            bins[int(deg) % 90] += ln
    best = max(range(90), key=lambda i: bins[i])
    return math.radians(best + 0.5)


def in_poly(x, y, p):
    c = False
    j = len(p) - 1
    for i in range(len(p)):
        if (p[i][1] > y) != (p[j][1] > y) and x < (p[j][0] - p[i][0]) * (y - p[i][1]) / (p[j][1] - p[i][1] + 1e-12) + p[i][0]:
            c = not c
        j = i
    return c


def seg_dist(x, y, a, b):
    dx, dy = b[0] - a[0], b[1] - a[1]
    l2 = dx * dx + dy * dy
    t = max(0.0, min(1.0, ((x - a[0]) * dx + (y - a[1]) * dy) / l2)) if l2 else 0.0
    return math.hypot(x - a[0] - t * dx, y - a[1] - t * dy)


def ring_dist(x, y, p):
    return min(seg_dist(x, y, p[i], p[(i + 1) % len(p)]) for i in range(len(p)))


def rect_free(r, rects, pad):
    a, b, c, d = r
    return all(c <= q[0] - pad or a >= q[2] + pad or d <= q[1] - pad or b >= q[3] + pad for q in rects)


class Frame:
    """Локальные оси (u, v) по преобладающему направлению стен корпусов."""

    def __init__(self, th):
        self.c, self.s = math.cos(th), math.sin(th)

    def uv(self, p):
        x, y = p
        return (x * self.c + y * self.s, -x * self.s + y * self.c)

    def xy(self, u, v):
        return (round(u * self.c - v * self.s, 2), round(u * self.s + v * self.c, 2))

    def rect(self, a, b, c, d):
        return [self.xy(a, b), self.xy(c, b), self.xy(c, d), self.xy(a, d)]


def layout(outline_uv, cores, ramps, rand):
    """Места одного уровня [(u0, v0, u1, v1, kind)] и колонны [(u0, v0, u1, v1)] — по краю проездов, через каждые 3 места"""
    us = [p[0] for p in outline_uv]
    vs = [p[1] for p in outline_uv]
    u0, u1, v0, v1 = min(us), max(us), min(vs), max(vs)
    # ряды по v: ряд, проезд, ряд, ряд, проезд, ряд … — каждый ряд примыкает к проезду
    # у каждого ряда помним, с какой стороны проезд: там встанут колонны
    rows = []
    v = v0 + WALL
    if v + SPOT_D + AISLE + SPOT_D <= v1 - WALL:
        rows.append((v, v + SPOT_D, 'top'))
        v += SPOT_D
        while v + AISLE + SPOT_D <= v1 - WALL:
            v += AISLE
            rows.append((v, v + SPOT_D, 'bottom'))
            v += SPOT_D
            if v + SPOT_D + AISLE + SPOT_D <= v1 - WALL:
                rows.append((v, v + SPOT_D, 'top'))
                v += SPOT_D
    # поперечные проезды: у торцов и через каждые ~60 м
    span = u1 - u0
    cross = [(u0, u0 + WALL + AISLE), (u1 - WALL - AISLE, u1)]
    n = int(span // CROSS_EVERY)
    for k in range(1, n + 1):
        c = u0 + span * k / (n + 1)
        cross.append((c - AISLE / 2, c + AISLE / 2))
    obstacles = [c['uv'] for c in cores] + [r['uv'] for r in ramps]
    mgn_left = {id(c): 1 for c in cores}
    spots = []
    columns = []
    for (a, b, edge) in rows:
        u = u0 + WALL
        row = []
        while u + SPOT_W <= u1 - WALL:
            blocked = next((cr for cr in cross if u < cr[1] and u + SPOT_W > cr[0]), None)
            if blocked:
                u = blocked[1]
                continue
            # у ядра — места для маломобильных, остальные — обычные (широкие назначим в концах рядов)
            kind, w = 'standard', SPOT_W
            cu = u + MGN_W / 2
            near = next((c for c in cores if mgn_left[id(c)] > 0 and math.hypot(cu - c['cu'], (a + b) / 2 - c['cv']) < 11), None)
            if near is not None:
                kind, w = 'mgn', MGN_W
            r = (u, a, u + w, b)
            corners = [(r[0], r[1]), (r[2], r[1]), (r[2], r[3]), (r[0], r[3])]
            ok = all(in_poly(x, y, outline_uv) and ring_dist(x, y, outline_uv) >= WALL * 0.5 for x, y in corners)
            if ok and rect_free(r, obstacles, 0.4):
                if near is not None:
                    mgn_left[id(near)] -= 1
                row.append([r[0], r[1], r[2], r[3], kind])
                u += w
            else:
                u += 0.5
        row = _widen_ends(row)
        spots.extend(row)
        # колонны: на границах мест каждой непрерывной группы — в начале, через каждые 3 места и в конце
        vc = b - COL / 2 - 0.05 if edge == 'top' else a + COL / 2 + 0.05
        for g in _groups(row):
            for u in [g[i][0] for i in range(0, len(g), 3)] + [g[-1][2]]:
                r = (u - COL / 2, vc - COL / 2, u + COL / 2, vc + COL / 2)
                inside = all(in_poly(x, y, outline_uv) for x, y in [(r[0], r[1]), (r[2], r[1]), (r[2], r[3]), (r[0], r[3])])
                if inside and rect_free(r, obstacles, 0.3) and all(math.hypot(u - (c[0] + c[2]) / 2, vc - (c[1] + c[3]) / 2) > 1.0 for c in columns):
                    columns.append(r)
    for s in spots:
        if s[4] == 'standard' and rand.random() < 0.08:
            s[4] = 'ev'
    return spots, columns


def _groups(row):
    """Непрерывные группы мест ряда (без разрывов на поперечные проезды и ядра)"""
    groups = []
    for s in row:
        if groups and abs(s[0] - groups[-1][-1][2]) < 1e-6:
            groups[-1].append(s)
        else:
            groups.append([s])
    return groups


def _widen_ends(row):
    """Крайние места каждой непрерывной группы ряда — широкие (3 м): группа перекладывается заново
    в тех же границах, за счёт одного обычного места из середины."""
    if not row:
        return row
    groups, cur = [], [row[0]]
    for s in row[1:]:
        if abs(s[0] - cur[-1][2]) < 1e-6:
            cur.append(s)
        else:
            groups.append(cur)
            cur = [s]
    groups.append(cur)
    width = {'wide': WIDE_W, 'mgn': MGN_W}
    out = []
    for g in groups:
        if len(g) >= 4 and g[0][4] == 'standard' and g[-1][4] == 'standard':
            start, total = g[0][0], g[-1][2] - g[0][0]
            g[0][4] = g[-1][4] = 'wide'
            while sum(width.get(s[4], SPOT_W) for s in g) > total + 1e-6:
                mid = next((i for i in range(len(g) // 2, len(g) - 1) if g[i][4] == 'standard'), None)
                if mid is None:  # нечего убрать — оставляем края обычными
                    g[0][4] = g[-1][4] = 'standard'
                    break
                g.pop(mid)
            u = start
            for s in g:
                w = width.get(s[4], SPOT_W)
                s[0], s[2] = u, u + w
                u += w
        out.extend(g)
    return out


def nearest_street_end(ends_xy, roads):
    best, best_d = 0, float('inf')
    for i, (x, y) in enumerate(ends_xy):
        for r in roads:
            if r.get('k') not in STREETS:
                continue
            pts = r['p']
            for a, b in zip(pts, pts[1:]):
                d = seg_dist(x, y, a, b)
                if d < best_d:
                    best, best_d = i, d
    return best


def build(slug: str) -> dict:
    project = json.loads((BUILD / f'{slug}.json').read_text())
    blocks = project['building'].get('blocks') or []
    if not blocks:
        raise SystemExit(f'{slug}: нет корпусов (паркинг строится только для ЖК с корпусами)')
    units = json.loads((BUILD / slug / 'units.json').read_text())['items']
    ctx_path = BUILD / slug / 'context.json'
    roads = json.loads(ctx_path.read_text()).get('roads', []) if ctx_path.exists() else []
    rand = random.Random(f'parking-{slug}')

    fr = Frame(dominant_angle([b['footprint'] for b in blocks]))
    h_xy = hull([tuple(p) for b in blocks for p in b['footprint']])
    cx = sum(p[0] for p in h_xy) / len(h_xy)
    cy = sum(p[1] for p in h_xy) / len(h_xy)
    target = round(len(units) * RATIO / LEVELS)

    def plan(scale):
        outline_xy = [(cx + (x - cx) * scale, cy + (y - cy) * scale) for x, y in h_xy]
        o_uv = [fr.uv(p) for p in outline_xy]
        cores = []
        ou = sum(p[0] for p in o_uv) / len(o_uv)
        ov = sum(p[1] for p in o_uv) / len(o_uv)
        for b in blocks:
            bx = sum(p[0] for p in b['footprint']) / len(b['footprint'])
            by = sum(p[1] for p in b['footprint']) / len(b['footprint'])
            bu, bv = fr.uv((bx, by))
            # корпус над паркингом — ядро под ним; корпус рядом (до 30 м) — ядро у края паркинга, ближе к корпусу
            if in_poly(bu, bv, o_uv):
                cu, cv = bu, bv
            elif ring_dist(bu, bv, o_uv) < 30:
                cu, cv = bu, bv
                for _ in range(400):  # шаг к центру паркинга, пока ядро целиком не окажется внутри
                    r = (cu - CORE[0] / 2, cv - CORE[1] / 2, cu + CORE[0] / 2, cv + CORE[1] / 2)
                    if all(in_poly(x, y, o_uv) and ring_dist(x, y, o_uv) >= WALL for x, y in [(r[0], r[1]), (r[2], r[1]), (r[2], r[3]), (r[0], r[3])]):
                        break
                    d = math.hypot(ou - cu, ov - cv) or 1
                    cu, cv = cu + (ou - cu) / d * 0.5, cv + (ov - cv) / d * 0.5
            else:
                continue
            r = (cu - CORE[0] / 2, cv - CORE[1] / 2, cu + CORE[0] / 2, cv + CORE[1] / 2)
            inside = all(in_poly(x, y, o_uv) for x, y in [(r[0], r[1]), (r[2], r[1]), (r[2], r[3]), (r[0], r[3])])
            if inside and rect_free(r, [c['uv'] for c in cores], 2.0):
                cores.append({'block': b['id'], 'label': b['label'], 'cu': cu, 'cv': cv, 'uv': r})
        # рампа — у торца, ближайшего к улице, по средней линии
        us = [p[0] for p in o_uv]
        vs = [p[1] for p in o_uv]
        vc = (min(vs) + max(vs)) / 2
        ends = []
        for side in (1, -1):
            u = min(us) if side == 1 else max(us)
            while not in_poly(u, vc, o_uv) and min(us) - 1 <= u <= max(us) + 1:
                u += side * 0.5
            ends.append((u, side))
        i = nearest_street_end([fr.xy(u, vc) for u, _ in ends], roads)
        ue, side = ends[i]
        ru = (ue, ue + RAMP[0]) if side == 1 else (ue - RAMP[0], ue)
        ramp = {'uv': (ru[0], vc - RAMP[1] / 2, ru[1], vc + RAMP[1] / 2), 'entry': fr.xy(ue - side * 2, vc)}
        return o_uv, cores, ramp

    # подбираем масштаб контура под целевое число мест на уровне
    lo, hi = 0.3, 1.0
    for _ in range(18):
        mid = (lo + hi) / 2
        o_uv, cores, ramp = plan(mid)
        n = len(layout(o_uv, cores, [ramp], random.Random(0))[0])
        if n > target:
            hi = mid
        else:
            lo = mid
    o_uv, cores, ramp = plan(lo)

    levels, spots = [], []
    for k in range(1, LEVELS + 1):
        lvl = -k
        level_spots, level_columns = layout(o_uv, cores, [ramp], rand)
        levels.append({
            'level': lvl,
            'name': f'Уровень −{k}',
            'height': LEVEL_H,
            'outline': [fr.xy(u, v) for u, v in o_uv],
            'cores': [{'block': c['block'], 'label': f"Лифт и лестница · {c['label']}", 'p': fr.rect(*c['uv'])} for c in cores],
            'columns': [fr.rect(*c) for c in level_columns],
            'ramps': [{
                'label': 'Въезд с улицы' if k == 1 else f'Рампа на уровень −{k - 1}',
                'p': fr.rect(*ramp['uv']),
                'entry': ramp['entry'] if k == 1 else None,
            }],
        })
        for n, (a, b, c, d, kind) in enumerate(sorted(level_spots, key=lambda s: (s[1], s[0])), start=1):
            status = rand.choices([s for s, _ in STATUS_W], [w for _, w in STATUS_W])[0]
            price = PRICE_BASE[lvl] * KIND_K[kind] * (0.92 + rand.random() * 0.16)
            spots.append({
                'code': f'{k}-{n:03d}', 'number': n, 'level': lvl, 'kind': kind,
                'polygon': fr.rect(a, b, c, d), 'area': round((c - a) * (d - b), 2),
                'status': status, 'price': int(round(price / 500_000) * 500_000), 'test': True,
            })
    return {
        'source': 'tools/synth_parking.py',
        'test': True,
        'note': 'Тестовый паркинг: планов застройщика в открытом доступе нет, раскладка, статусы и цены условные.',
        'levels': levels,
        'spots': spots,
    }


def main(slugs: list[str]) -> None:
    for slug in slugs:
        data = build(slug)
        out = BUILD / slug / 'parking.json'
        out.write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')))
        by_kind: dict[str, int] = {}
        for s in data['spots']:
            by_kind[s['kind']] = by_kind.get(s['kind'], 0) + 1
        per_level = {lv['level']: sum(1 for s in data['spots'] if s['level'] == lv['level']) for lv in data['levels']}
        cols = [len(lv['columns']) for lv in data['levels']]
        print(f"{slug}: уровни {per_level}, всего {len(data['spots'])}, типы {by_kind}, ядер {len(data['levels'][0]['cores'])}, колонн {cols} → {out.relative_to(ROOT)}")


if __name__ == '__main__':
    main(sys.argv[1:] or ['nrg-mirzo-ulugbek', 'harizma'])
