"""ЖК Harizma (Golden House) → данные демо (data-build/projects/harizma*), они же — источник импорта в CRM.

Корпуса — 9 секций OSM на участке Султанали Машхадий, 210; этажность по госреестру (976: 16 и 12 эт.),
привязка высот к секциям условная. Этажи собраны из реальных планировок каталога GH (compose_layout).
Шахматка — стартовая и тестовая: дальше статусы и цены ведутся в CRM.
Запуск: python3 -I tools/apartment_types.py && python3 -I tools/build_harizma.py
"""
from __future__ import annotations

import json
import math
import os
import random
import sys

sys.path.insert(0, os.path.dirname(__file__))
from build_api import build_context  # noqa: E402
from places import build_places  # noqa: E402
from brand_logos import logo_for  # noqa: E402
from synth_layout import azimuth_for_axis, obb, section  # noqa: E402
import compose_layout as cl  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'data-src', 'harizma')
OUT = os.path.join(ROOT, 'data-build', 'projects')
SLUG = 'harizma'
SNAPSHOT = '2026-11-09'
OSM_IDS = range(1457648458, 1457648467)
H_FIRST, H_TYP, PARAPET = 4.2, 3.15, 1.2


def load(p):
    with open(p, encoding='utf-8') as f:
        return json.load(f)


def write(rel, data):
    path = os.path.join(OUT, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
    print(f'  {rel:44s} {os.path.getsize(path) / 1024:7.1f} КБ')


def gov(i):
    d = load(os.path.join(SRC, f'gov_{i}.json'))
    d = d.get('data', d)
    if isinstance(d.get('blocks'), str):
        d['blocks'] = json.loads(d['blocks'])
    return d


def main():
    osm = load(os.path.join(SRC, 'osm.json'))
    g976, g61354, g59720 = gov(976), gov(61354), gov(59720)
    types = load(os.path.join(OUT, SLUG, 'apartment-types.json'))['items']
    lat0, lon0 = float(g976['lat']), float(g976['long'])
    kx, ky = 111320 * math.cos(math.radians(lat0)), 110574

    raw = []
    for e in osm['elements']:
        if e['type'] == 'way' and e['id'] in OSM_IDS:
            pts = [[round((p['lon'] - lon0) * kx, 2), round((p['lat'] - lat0) * ky, 2)] for p in e['geometry']]
            if pts[0] == pts[-1]:
                pts = pts[:-1]
            area = abs(sum(pts[i][0] * pts[(i + 1) % len(pts)][1] - pts[(i + 1) % len(pts)][0] * pts[i][1] for i in range(len(pts)))) / 2
            cx = sum(p[0] for p in pts) / len(pts)
            cy = sum(p[1] for p in pts) / len(pts)
            raw.append({'osm': f"way/{e['id']}", 'footprint': pts, 'area': area, 'c': (cx, cy)})
    # госреестр: 4 секции по 16 эт. и 5 по 12 эт. — крупнейшие считаем 16-этажными (условно)
    for i, b in enumerate(sorted(raw, key=lambda b: -b['area'])):
        b['levels'] = 16 if i < 4 else 12
    raw.sort(key=lambda b: (-round(b['c'][1] / 30), b['c'][0]))   # нумерация: с севера на юг, с запада на восток

    blocks, units, rnd = [], [], random.Random(20261109)
    for n, b in enumerate(raw, start=1):
        (cx, cy), th, L, W = obb(b['footprint'])
        az = azimuth_for_axis(th)
        base_types, _, core_only = section(L, W, retail=True)
        t_res, *_ = section(L, W, retail=False)
        walls_int, heads, rooms, slots = cl.compose(L, W, types, seed=n)
        tmpl = t_res['T']
        T = dict(tmpl, id='T', label='Типовой этаж: реальные планировки Harizma, расстановка условная',
                 walls_int=walls_int, door_heads=heads, rooms=rooms, source={'generated': True, 'types': 'catalog GH 2025'})
        R = dict(tmpl, id='R', kind='podium', label='Первый этаж: коммерция', walls_int=core_only, door_heads=[], rooms=[])
        height = H_FIRST + (b['levels'] - 1) * H_TYP
        floors, z = [], 0.0
        for f in range(1, b['levels'] + 1):
            h = H_FIRST if f == 1 else H_TYP
            floors.append({'n': f, 'type': 'R' if f == 1 else 'T', 'elevation': round(z, 2), 'height': h, 'residential': f > 1})
            z += h
        bid = f'k{n}'
        layout = {'id': bid, 'origin': [round(cx, 2), round(cy, 2)], 'azimuth_deg': round(az, 2), 'length': round(L, 2),
                  'width': round(W, 2), 'slab': 0.25, 'crown_height': PARAPET, 'height': round(height, 2),
                  'floors': floors, 'floor_types': {'R': R, 'T': T}}
        write(f'{SLUG}/blocks/{bid}.json', layout)
        blocks.append({'id': bid, 'n': n, 'label': f'Корпус {n}', 'address': f'ул. Султанали Машхадий, 210 · корпус {n}',
                       'levels': b['levels'], 'first_floor': H_FIRST, 'floor_height': H_TYP, 'height': round(height, 2),
                       'parapet': PARAPET, 'footprint': b['footprint'], 'retail_ground': True, 'osm': b['osm'],
                       'layout': {'origin': layout['origin'], 'azimuth_deg': layout['azimuth_deg'], 'units_per_floor': len(slots)}})
        num = 0
        for f in floors:
            if not f['residential']:
                continue
            for sl in slots:
                num += 1
                roll = rnd.random() - (f['n'] - 2) * 0.012     # выше этаж — больше свободных
                status = 'sold' if roll < 0.42 else 'booked' if roll < 0.50 else 'available' if roll < 0.97 else 'unavailable'
                m2 = 15_400_000 * (1 + 0.007 * (f['n'] - 2)) * (0.96 + rnd.random() * 0.06)
                units.append({
                    'id': 9_000_000 + n * 10000 + f['n'] * 100 + sl['slot'], 'number': num, 'floor': f['n'], 'section': 1, 'block': bid,
                    'rooms': sl['rooms'], 'area': sl['area'], 'type_code': sl['type_code'], 'status': status,
                    'price': int(round(sl['area'] * m2 / 1_000_000) * 1_000_000) if status in ('available', 'booked') else None,
                    'polygon': sl['polygon'], 'room_list': sl['room_list'],
                    'observed_at': SNAPSHOT, 'source': 'test', 'test': True,
                })
        print(f"Корпус {n}: {b['levels']} эт., {L:.1f}×{W:.1f} м, квартир на этаже {len(slots)}: {', '.join(s['type_code'] for s in slots)}")

    write(f'{SLUG}/units.json', {'observed_at': SNAPSHOT, 'source': 'ТЕСТОВАЯ стартовая шахматка; дальше — CRM', 'test': True, 'items': units})

    cx = sum(sum(p[0] for p in b['footprint']) / len(b['footprint']) for b in blocks) / len(blocks)
    cy = sum(sum(p[1] for p in b['footprint']) / len(b['footprint']) for b in blocks) / len(blocks)
    ids = {b['osm'] for b in blocks}
    ctx = build_context({'elements': [e for e in osm['elements'] if f"{e['type']}/{e['id']}" not in ids]}, lat0, lon0,
                        [[1e6, 1e6], [1e6 + 1, 1e6], [1e6, 1e6 + 1]])
    ctx['places'] = build_places(osm, lat0, lon0, (cx, cy))
    brands = load(os.path.join(ROOT, 'data-build', 'brands', 'index.json'))['items']
    for p in ctx['places']:
        key = logo_for(p['name'], p['category'], brands)
        p['logo'] = f"/api/brands/{brands[key]['file']}" if key else None
    ctx['center'] = [round(cx, 1), round(cy, 1)]
    write(f'{SLUG}/context.json', ctx)

    by_status = {}
    for u in units:
        by_status[u['status']] = by_status.get(u['status'], 0) + 1
    gov_blocks = [{'name': b['name'], 'floor': b['floor'], 'apartments': b['apartment_count']} for b in g976['blocks']]
    project = {
        'slug': SLUG, 'name': 'Harizma',
        'developer': {'brand': 'Golden House', 'legal_name': 'golden house property group OOO · UNIQUE TRADE BUSINESS МЧЖ'},
        'address': 'Ташкент, Яшнабадский район, ул. Султанали Машхадий, 210', 'district': 'Яшнабадский',
        'location': {'lat': lat0, 'lon': lon0},
        'gov_registry': {
            'object_id': 976, 'status': g976.get('status', {}).get('name', 'Jarayonda') if isinstance(g976.get('status'), dict) else 'Jarayonda',
            'status_ru': 'строится', 'deadline': g976.get('deadline'), 'floors': 16, 'apartments': 623,
            'blocks': gov_blocks, 'related': [61354, 59720],
            'source': 'Shaffof qurilish (dshk.shaffofqurilish.uz), объекты 976, 61354 («HARIZMA 3 этап»), 59720', 'observed_at': SNAPSHOT,
            'designer': (g976.get('loyiha') or '').strip(), 'contractor': (g976.get('pudrat') or '').strip(),
        },
        'catalog': {'units_total': len(units), 'by_status': by_status, 'price_policy': 'test', 'test': True},
        'building': {
            'mode': 'massing', 'azimuth_deg': 0, 'slab': 0.25, 'crown_height': PARAPET,
            'height': max(b['height'] for b in blocks), 'floors': [], 'assumed': ['heights', 'facade', 'layout'],
            'blocks': blocks, 'center': [round(cx, 1), round(cy, 1)], 'floors_total': sum(b['levels'] for b in blocks),
            'palette': {'stone': '#e7dfd2', 'band': '#a85d43', 'glass': '#3d4c58'},
        },
        'floor_types': {},
        'sources': [
            {'what': 'Описание, рендеры, адрес', 'source': 'gh.uz/harizma', 'date': SNAPSHOT},
            {'what': 'Планировки квартир (8 типов) с площадями комнат', 'source': 'Каталог Golden House 2025, стр. 36–37', 'date': SNAPSHOT},
            {'what': 'Блоки, этажность, срок, участники', 'source': 'Госпортал Shaffof qurilish, объекты 976, 61354, 59720', 'date': SNAPSHOT},
            {'what': 'Контуры 9 секций и окружение, места рядом', 'source': '© OpenStreetMap', 'date': SNAPSHOT},
        ],
        'assumptions': [
            'Расстановка квартир на этаже условная: поэтажных планов застройщик не публикует; сами планировки — реальные, из каталога',
            'Этажность 16/12 — по госреестру, привязка к секциям условная; в OSM пока 9 из 17 корпусов',
            'Высоты этажей условные: 1-й 4,2 м, жилые 3,15 м',
            'ТЕСТОВЫЕ статусы и цены: стартовая шахматка сгенерирована, дальше ведётся в CRM',
        ],
        # «Как собран макет» — окно «О данных» на сайте
        'about': [
            {'title': "Корпуса", 'text': "контуры секций из OpenStreetMap, этажность — госреестр строек (объект 976)."},
            {'title': "Планировки", 'text': "8 типов квартир из каталога Golden House: чертёж и площади комнат; стены для прогулки извлечены из чертежа, расстановка на этаже условная."},
            {'title': "Статусы и цены", 'text': "ведёт отдел продаж в CRM; страница обновляет их сама."},
            {'title': "Места рядом, вид из окна и солнце", 'text': "OpenStreetMap и расчёт по координатам и дате."},
        ],
        'disclaimer': 'Демонстрация. Не является публичной офертой.',
    }
    write(f'{SLUG}.json', project)

    index_path = os.path.join(OUT, 'index.json')
    index = load(index_path)
    index['items'] = [{'slug': SLUG, 'name': 'Harizma', 'developer': 'Golden House', 'mode': 'massing'}] + \
                     [p for p in index['items'] if p['slug'] != SLUG]
    write('index.json', index)
    print(f'Квартир: {len(units)}; статусы: {by_status}; мест рядом: {len(ctx["places"])}')


if __name__ == '__main__':
    main()
