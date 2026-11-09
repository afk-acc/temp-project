"""Снимки источников → API-контракт демо (data-build/).

Это пакет для импорта в бэкенд (php artisan zhk:import); сайт читает данные только из API (backend/docs/public-api.md).
Запуск из корня 3d-zhk:  python3 -I tools/build_api.py
Перед этим один раз:     python3 -I tools/register.py
"""
from __future__ import annotations

import json
import math
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
import extract_floorplan as ef  # noqa: E402
import planlib as pl  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'data-src')
OUT = os.path.join(ROOT, 'data-build', 'projects')
SLUG = 'c1'
SNAPSHOT = '2026-11-04'

# Ориентация: верх плана смотрит на азимут 28° (компас на плане застройщика, сверено с улицей в OSM)
AZIMUTH_DEG = 28.0

# Типы этажей: id → картинка плана и параметры извлечения
TYPES = {
    'A':    {'image': '66bf315386a3b', 'kind': 'tower',  'label': 'Типовой этаж A (10 квартир)'},
    'B':    {'image': '66bf315424249', 'kind': 'tower',  'label': 'Типовой этаж B (11 квартир)'},
    'F13':  {'image': '682db7029fa40', 'kind': 'tower',  'label': '13 этаж (с помещением безопасности)'},
    'P29':  {'image': '6a705a0e91900', 'kind': 'tower',  'label': 'Пентхаусы 29 этажа', 'black_lines': True},
    'P30':  {'image': '6a705ac416ecf', 'kind': 'tower',  'label': 'Пентхаусы 30 этажа', 'black_lines': True},
    'F5':   {'image': '682c230e5bda4', 'kind': 'mixed',  'label': '5 этаж: квартиры и подиум'},
    'F6':   {'image': '682d96f23ba2a', 'kind': 'mixed',  'label': '6 этаж: квартиры и терраса на кровле подиума'},
    'POD2': {'image': '688f609572944', 'kind': 'podium', 'label': 'Подиум: коммерция', 'facade_gap': 8.0},
    'POD4': {'image': '688f6097d2825', 'kind': 'podium', 'label': 'Подиум: коммерция', 'facade_gap': 8.0},
}
IMAGE_TO_TYPE = {v['image']: k for k, v in TYPES.items()}

# Высоты этажей — условные (чертежей разрезов нет), помечаются в интерфейсе
H_GROUND, H_PODIUM, H_TYPICAL = 4.8, 4.2, 3.3
SLAB = 0.25
CROWN = 5.0

STATUS = {'AVAILABLE': 'available', 'BOOKED': 'booked', 'SOLD': 'sold', 'UNAVAILABLE': 'unavailable'}


def load(name):
    with open(os.path.join(SRC, name), encoding='utf-8') as f:
        return json.load(f)


def write(rel, data):
    path = os.path.join(OUT, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
    print(f'  {rel:40s} {os.path.getsize(path) / 1024:7.1f} КБ')


def floor_type_of(n: int, floors_src: dict) -> str:
    if n == 1:
        return 'POD2'
    rec = floors_src.get(str(n))
    if rec and rec['img']:
        image = rec['img'][0][:-4]
        if image in IMAGE_TO_TYPE:
            return IMAGE_TO_TYPE[image]
    return 'POD4'  # план 3 этажа не снят — у застройщика он того же вида, что 4-й


def to_plan_m(points_px, reg):
    s = reg['m_per_px']
    cx, cy = reg['core_px']
    return [[round(x * s - cx * s, 2), round(-(y * s - cy * s), 2)] for x, y in points_px]


def build_floor_types(reg):
    out = {}
    for tid, cfg in TYPES.items():
        r = reg[cfg['image']]
        geo = ef.extract(
            os.path.join(SRC, 'plans', f"L_{cfg['image']}.png"), r['m_per_px'], r['core_px'],
            facade_gap_m=cfg.get('facade_gap', 2.2), black_lines=cfg.get('black_lines', False),
        )
        geo.pop('walls_ext_normals', None)
        geo.update({'id': tid, 'kind': cfg['kind'], 'label': cfg['label'],
                    'source': {'image': cfg['image'], 'm_per_px': r['m_per_px'], 'registration_score': r['score']}})
        write(f'{SLUG}/floor-types/{tid}.json', geo)
        out[tid] = geo
    return out


def build_units(floors_src, reg):
    units = []
    for n_str, rec in floors_src.items():
        if not rec['img']:
            continue
        n = int(n_str)
        tid = floor_type_of(n, floors_src)
        r = reg[TYPES[tid]['image']]
        for u in rec['flats']:
            units.append({
                'id': int(u['id']),
                'number': u['num'],
                'floor': n,
                'section': 1,
                'rooms': u['rooms'],
                'area': u['area'],
                'status': STATUS.get(u['status'], 'unavailable'),
                'price': None,  # у застройщика «по запросу»
                'polygon': to_plan_m(pl.parse_points(u['poly']), r) if u['poly'] else None,
                'observed_at': SNAPSHOT,
                'source': 'mbc.uz',
            })
    units.sort(key=lambda x: (x['floor'], x['number']))
    return units


def build_building(floors_src, types):
    floors = []
    z = 0.0
    for n in range(1, 31):
        h = H_GROUND if n == 1 else H_PODIUM if n <= 4 else H_TYPICAL
        tid = floor_type_of(n, floors_src)
        floors.append({'n': n, 'type': tid, 'elevation': round(z, 2), 'height': h,
                       'residential': types[tid]['kind'] != 'podium'})
        z += h
    return {
        'azimuth_deg': AZIMUTH_DEG,
        'slab': SLAB,
        'crown_height': CROWN,
        'height': round(z + CROWN, 1),
        'floors': floors,
        'assumed': ['heights', 'facade', 'floor_1', 'floor_3'],
    }


# ---------- окружение из OSM ----------

def build_context(osm, lat0, lon0, site_poly_world):
    kx = 111320 * math.cos(math.radians(lat0))
    ky = 110574

    def xy(p):
        return [round((p['lon'] - lon0) * kx, 1), round((p['lat'] - lat0) * ky, 1)]

    buildings, roads, water_lines, water_areas, green, pois = [], [], [], [], [], []
    road_w = {'trunk': 22, 'primary': 18, 'primary_link': 8, 'secondary': 14, 'secondary_link': 7,
              'tertiary': 10, 'tertiary_link': 6, 'residential': 7, 'living_street': 6, 'service': 4.5,
              'unclassified': 6, 'pedestrian': 5, 'footway': 2.2, 'path': 1.8, 'cycleway': 2.2,
              'steps': 2.0, 'trunk_link': 9}
    for e in osm['elements']:
        t = e.get('tags', {})
        geom = e.get('geometry')
        if e['type'] == 'relation':
            # мультиполигон: берём самую длинную внешнюю границу
            outers = [m for m in e.get('members', []) if m.get('role') == 'outer' and m.get('geometry')]
            if not outers:
                continue
            geom = max(outers, key=lambda m: len(m['geometry']))['geometry']
        if not geom or len(geom) < 2:
            continue
        pts = [xy(p) for p in geom]
        if 'building' in t:
            if len(pts) < 4:
                continue
            cx = sum(p[0] for p in pts) / len(pts)
            cy = sum(p[1] for p in pts) / len(pts)
            if pl.point_in_polygon(cx, cy, site_poly_world):
                continue  # старые строения на месте стройки
            levels = _num(t.get('building:levels'))
            height = _num(t.get('height'))
            guessed = False
            if not height:
                if not levels:
                    levels = {'house': 1, 'detached': 1, 'garage': 1, 'garages': 1, 'shed': 1, 'roof': 1,
                              'apartments': 5, 'residential': 4, 'school': 3, 'commercial': 3,
                              'retail': 2, 'kindergarten': 2}.get(t.get('building'), 2)
                    guessed = True
                height = levels * 3.1 + 0.6
            buildings.append({'p': pts[:-1] if pts[0] == pts[-1] else pts, 'h': round(height, 1),
                              'g': guessed, 'name': t.get('name')})
        elif 'highway' in t:
            w = road_w.get(t['highway'])
            if w and t.get('area') != 'yes':
                roads.append({'p': pts, 'w': w, 'k': t['highway'], 'name': t.get('name')})
        elif t.get('waterway') in ('canal', 'river', 'stream', 'ditch', 'drain'):
            w = {'canal': 16, 'river': 20, 'stream': 4, 'ditch': 2.5, 'drain': 2.5}[t['waterway']]
            if t.get('name') and 'Салар' in t.get('name'):
                w = 18
            water_lines.append({'p': pts, 'w': w, 'name': t.get('name')})
        elif t.get('natural') == 'water' or t.get('leisure') == 'water_park' and False:
            water_areas.append({'p': pts, 'name': t.get('name')})
        elif t.get('leisure') in ('park', 'garden') or t.get('landuse') in ('grass', 'forest', 'recreation_ground'):
            green.append({'p': pts, 'k': t.get('leisure') or t.get('landuse'), 'name': t.get('name')})
        elif t.get('leisure') in ('pitch', 'playground'):
            green.append({'p': pts, 'k': t['leisure'], 'name': t.get('name')})

    # заметные объекты для «вида из окон»: названные парки и вода
    seen = set()
    for g in green:
        if g['k'] == 'park':
            name = g.get('name') or 'парк'
            c = _centroid(g['p'])
            key = (name, round(c[0] / 100), round(c[1] / 100))
            if key not in seen:
                seen.add(key)
                pois.append({'kind': 'park', 'name': name, 'x': c[0], 'y': c[1], 'r': _radius(g['p'], c)})
    salar = [w for w in water_lines if w.get('name') and 'Салар' in w['name']]
    for w in salar:
        for p in w['p'][::3]:
            pois.append({'kind': 'water', 'name': 'канал Салар', 'x': p[0], 'y': p[1], 'r': 10})

    return {
        'origin': {'lat': lat0, 'lon': lon0},
        'frame': 'метры: x — на восток, y — на север от точки госреестра',
        'buildings': buildings, 'roads': roads, 'water_lines': water_lines, 'water_areas': water_areas,
        'green': green, 'pois': pois,
        'attribution': '© участники OpenStreetMap, ODbL',
        'observed_at': SNAPSHOT,
    }


def _num(v):
    try:
        return float(str(v).replace(',', '.').split()[0])
    except (TypeError, ValueError, IndexError):
        return None


def _centroid(pts):
    return [round(sum(p[0] for p in pts) / len(pts), 1), round(sum(p[1] for p in pts) / len(pts), 1)]


def _radius(pts, c):
    return round(max(math.hypot(p[0] - c[0], p[1] - c[1]) for p in pts), 1)


def plan_to_world(x, y, az_deg):
    a = math.radians(az_deg)
    return [x * math.cos(a) + y * math.sin(a), -x * math.sin(a) + y * math.cos(a)]


def main():
    reg = load('registration.json')
    gov = load('gov_54872.json')
    floors_src = load('floors_all.json')
    osm = load('osm.json')
    lat0, lon0 = float(gov['lat']), float(gov['long'])
    print('Типы этажей:')
    types = build_floor_types(reg)
    print('Квартиры, здание, проект:')
    units = build_units(floors_src, reg)
    write(f'{SLUG}/units.json', {'observed_at': SNAPSHOT, 'source': 'mbc.uz — каталог застройщика (Profitbase)',
                                 'items': units})
    building = build_building(floors_src, types)

    # участок: габарит подиума в мировых координатах — для отсева старых строений OSM
    bx = types['POD2']['bbox']
    site = [plan_to_world(x, y, AZIMUTH_DEG) for x, y in ((bx[0], bx[1]), (bx[2], bx[1]), (bx[2], bx[3]), (bx[0], bx[3]))]
    write(f'{SLUG}/context.json', build_context(osm, lat0, lon0, site))

    card = gov['object_json']
    by_status = {}
    for u in units:
        by_status[u['status']] = by_status.get(u['status'], 0) + 1
    project = {
        'slug': SLUG,
        'name': 'C1',
        'developer': {'brand': 'Murad Buildings', 'legal_name': (card.get('organization_name') or '').strip()},
        'address': 'Ташкент, Яшнабадский район, ул. Содик Азимова, 49а',
        'district': 'Яшнабадский',
        'location': {'lat': lat0, 'lon': lon0},
        'gov_registry': {
            'object_id': gov['object_id'], 'status': card['status']['name'], 'status_ru': 'строится',
            'deadline': card.get('deadline'), 'floors': int(gov['max_floor']),
            'apartments': gov['apartment_count'], 'blocks': gov['blocks'],
            'source': 'Shaffof qurilish (dshk.shaffofqurilish.uz)', 'observed_at': SNAPSHOT,
        },
        'catalog': {'units_total': len(units), 'by_status': by_status, 'price_policy': 'on_request'},
        'building': building,
        'floor_types': {k: {'label': v['label'], 'kind': v['kind']} for k, v in TYPES.items()},
        'sources': [
            {'what': 'Координаты, этажность, срок, заказчик', 'source': 'Госпортал Shaffof qurilish, объект 54872', 'date': SNAPSHOT},
            {'what': 'Поэтажные планы, контуры и статусы квартир', 'source': 'mbc.uz — каталог Murad Buildings', 'date': SNAPSHOT},
            {'what': 'Окружение', 'source': '© OpenStreetMap', 'date': SNAPSHOT},
        ],
        'assumptions': [
            'Высоты этажей условные: 1-й 4,8 м, подиум 4,2 м, жилые 3,3 м — разрезов нет',
            'Фасад — по рендеру застройщика, без чертежей фасада',
            'Стены извлечены автоматически из картинок планов; возможны мелкие неточности',
            'Соседние дома — упрощённые объёмы по OSM, часть высот оценена',
        ],
        # «Как собран макет» — окно «О данных» на сайте
        'about': [
            {'title': "Место и этажность", 'text': "госпортал строек Shaffof qurilish: координаты, 30 этажей, заказчик, срок."},
            {'title': "Стены и окна", 'text': "извлечены программой из поэтажных планов застройщика, без ручной отрисовки. Каждая квартира — объект с номером из каталога."},
            {'title': "Статусы", 'text': "каталог застройщика на дату снимка; в рабочей версии их ведёт CRM."},
            {'title': "Окружение и вид из окон", 'text': "OpenStreetMap; солнце считается по координатам и дате."},
        ],
        'disclaimer': 'Демонстрация по открытым данным. Не является публичной офертой.',
    }
    write(f'{SLUG}.json', project)


if __name__ == '__main__':
    main()
