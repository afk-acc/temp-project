"""ЖК без поэтажных планов → API демо в режиме «массинг»: корпуса по контурам OSM, места рядом.

Сейчас: NRG Mirzo Ulugbek (Сайрам, 26). Корпуса — здания OSM с адресами 26/1…26/14 и этажностью.
Запуск из корня 3d-zhk:  python3 -I tools/build_massing.py
"""
from __future__ import annotations

import json
import math
import os
import re
import sys

sys.path.insert(0, os.path.dirname(__file__))
from build_api import build_context  # noqa: E402
from places import build_places  # noqa: E402
from brand_logos import logo_for  # noqa: E402
from synth_layout import build_block  # noqa: E402
import random  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'data-src', 'nrg')
OUT = os.path.join(ROOT, 'data-build', 'projects')
SLUG = 'nrg-mirzo-ulugbek'
SNAPSHOT = '2026-11-04'
H_FIRST, H_TYPICAL, PARAPET = 3.6, 3.0, 1.2   # условно: разрезов нет
ADDR = re.compile(r'^26/(\d+)$')


def load(path):
    with open(path, encoding='utf-8') as f:
        return json.load(f)


def write(rel, data):
    path = os.path.join(OUT, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
    print(f'  {rel:44s} {os.path.getsize(path) / 1024:7.1f} КБ')


def by_status_of(units):
    out = {}
    for u in units:
        out[u['status']] = out.get(u['status'], 0) + 1
    return out


def main():
    osm = load(os.path.join(SRC, 'osm.json'))
    gov = load(os.path.join(SRC, 'gov_1211.json'))
    gov = gov.get('data', gov)

    # точка отсчёта — точка госреестра объекта 1211
    lat0, lon0 = float(gov['lat']), float(gov['long'])
    kx = 111320 * math.cos(math.radians(lat0))
    ky = 110574

    blocks = []
    for e in osm['elements']:
        t = e.get('tags', {})
        m = ADDR.match(t.get('addr:housenumber', ''))
        if e['type'] != 'way' or t.get('building') != 'apartments' or not m or not t.get('building:levels'):
            continue
        pts = [[round((p['lon'] - lon0) * kx, 2), round((p['lat'] - lat0) * ky, 2)] for p in e['geometry']]
        if pts[0] == pts[-1]:
            pts = pts[:-1]
        levels = int(t['building:levels'])
        height = H_FIRST + (levels - 1) * H_TYPICAL
        blocks.append({
            'id': f'26-{m.group(1)}', 'n': int(m.group(1)), 'label': f'Блок 26/{m.group(1)}',
            'address': f"ул. Сайрам, 26/{m.group(1)}", 'levels': levels,
            'first_floor': H_FIRST, 'floor_height': H_TYPICAL, 'height': round(height, 1), 'parapet': PARAPET,
            'footprint': pts, 'retail_ground': levels >= 9, 'osm': f"way/{e['id']}",
        })
    blocks.sort(key=lambda b: b['n'])
    print(f'Корпусов: {len(blocks)} ({", ".join(str(b["levels"]) for b in blocks)} эт.)')

    cx = sum(sum(p[0] for p in b['footprint']) / len(b['footprint']) for b in blocks) / len(blocks)
    cy = sum(sum(p[1] for p in b['footprint']) / len(b['footprint']) for b in blocks) / len(blocks)

    # участок для отсева: объединённый габарит корпусов не нужен — корпуса сами исключаются из окружения
    block_ids = {b['osm'] for b in blocks}
    osm_ctx = {'elements': [e for e in osm['elements'] if f"{e['type']}/{e['id']}" not in block_ids]}
    ctx = build_context(osm_ctx, lat0, lon0, [[1e6, 1e6], [1e6 + 1, 1e6], [1e6, 1e6 + 1]])
    ctx['places'] = build_places(osm, lat0, lon0, (cx, cy))
    brands_path = os.path.join(ROOT, 'data-build', 'brands', 'index.json')
    brands = load(brands_path)['items'] if os.path.exists(brands_path) else {}
    for p in ctx['places']:
        key = logo_for(p['name'], p['category'], brands)
        p['logo'] = f"/api/brands/{brands[key]['file']}" if key else None
    print('С логотипом:', ', '.join(f"{p['name']}" for p in ctx['places'] if p['logo']))
    ctx['center'] = [round(cx, 1), round(cy, 1)]
    write(f'{SLUG}/context.json', ctx)
    # тестовые планировки и шахматка: по реальным контурам, но условные квартиры, статусы и цены
    units = []
    for b in blocks:
        bb, slots = build_block(b, seed=b['n'])
        write(f"{SLUG}/blocks/{b['id']}.json", bb)
        b['layout'] = {'origin': bb['origin'], 'azimuth_deg': bb['azimuth_deg'], 'units_per_floor': len(slots)}
        rnd = random.Random(1000 + b['n'])
        num = 0
        for f in bb['floors']:
            if not f['residential']:
                continue
            for sl in slots:
                num += 1
                roll = rnd.random()
                status = 'sold' if roll < 0.66 else 'booked' if roll < 0.73 else 'available' if roll < 0.96 else 'unavailable'
                m2 = 14_200_000 * (1 + 0.006 * (f['n'] - 2)) * (0.97 if sl['rooms'] >= 3 else 1.0) * (0.96 + rnd.random() * 0.08)
                units.append({
                    'id': 8_000_000 + b['n'] * 10000 + f['n'] * 100 + sl['slot'],
                    'number': num, 'floor': f['n'], 'section': 1, 'block': b['id'],
                    'rooms': sl['rooms'], 'area': sl['area'], 'status': status,
                    'price': int(round(sl['area'] * m2 / 1_000_000) * 1_000_000) if status in ('available', 'booked') else None,
                    'polygon': sl['polygon'], 'room_list': sl['room_list'],
                    'observed_at': SNAPSHOT, 'source': 'test', 'test': True,
                })
    write(f'{SLUG}/units.json', {'observed_at': SNAPSHOT, 'source': 'ТЕСТОВЫЕ ДАННЫЕ: планировки, статусы и цены условные', 'test': True, 'items': units})
    print(f'Тестовых квартир: {len(units)}')

    floors_total = sum(b['levels'] for b in blocks)
    project = {
        'slug': SLUG,
        'name': 'NRG Mirzo Ulugbek',
        'developer': {'brand': 'NRG (BI Group)', 'legal_name': (gov.get('organization_name') or '').strip()},
        'address': 'Ташкент, Мирзо-Улугбекский район, ул. Сайрам, 26',
        'district': 'Мирзо-Улугбекский',
        'location': {'lat': lat0, 'lon': lon0},
        'gov_registry': {
            'object_id': gov['id'], 'status': 'Topshirilgan', 'status_ru': 'сдан',
            'deadline': None, 'floors': max(b['levels'] for b in blocks), 'apartments': None,
            'source': 'Shaffof qurilish (dshk.shaffofqurilish.uz), объекты 1211 и 635', 'observed_at': SNAPSHOT,
            'designer': (gov.get('loyiha') or '').strip(), 'contractor': (gov.get('pudrat') or '').strip(),
        },
        'catalog': {'units_total': len(units), 'by_status': by_status_of(units), 'price_policy': 'test', 'test': True},
        'building': {
            'mode': 'massing', 'azimuth_deg': 0, 'slab': 0.25, 'crown_height': PARAPET,
            'height': max(b['height'] for b in blocks), 'floors': [], 'assumed': ['heights', 'facade'],
            'blocks': blocks, 'center': [round(cx, 1), round(cy, 1)], 'floors_total': floors_total,
        },
        'floor_types': {},
        'sources': [
            {'what': 'Корпуса: контуры, адреса 26/1–26/14, этажность', 'source': '© OpenStreetMap', 'date': SNAPSHOT},
            {'what': 'Статус, заказчик, проектировщик, подрядчик', 'source': 'Госпортал Shaffof qurilish, объекты 1211 и 635', 'date': SNAPSHOT},
            {'what': 'Места рядом: магазины, банки, школы, метро', 'source': '© OpenStreetMap', 'date': SNAPSHOT},
        ],
        'assumptions': [
            'Высоты этажей условные: 1-й 3,6 м, остальные 3,0 м',
            'Фасад стилизован: без чертежей фасадов',
            'ТЕСТОВЫЕ ДАННЫЕ: планировки квартир сгенерированы по реальным контурам корпусов, статусы и цены случайные — для показа возможностей',
            'Этажность по OSM; у блока 26/13 в 2ГИС указано 4 этажа, в OSM — 5',
            'Метки мест — названия из OSM; логотипы брендов — товарные знаки владельцев, показаны только для демонстрации',
        ],
        # «Как собран макет» — окно «О данных» на сайте
        'about': [
            {'title': "Корпуса", 'text': "контуры, адреса и этажность из OpenStreetMap: точное положение каждого дома."},
            {'title': "Статус и участники", 'text': "госпортал строек Shaffof qurilish: заказчик, проектировщик, подрядчик."},
            {'title': "Места рядом", 'text': "магазины, банки, школы, метро из OpenStreetMap; время пешком — по расстоянию с поправкой на улицы."},
            {'title': "Вид из окна и солнце", 'text': "считаются по реальному окружению для любого этажа и стороны."},
        ],
        'disclaimer': 'Демонстрация по открытым данным. Не является публичной офертой.',
    }
    write(f'{SLUG}.json', project)

    index_path = os.path.join(OUT, 'index.json')
    index = load(index_path) if os.path.exists(index_path) else {'items': []}
    index['items'] = [p for p in index['items'] if p['slug'] != SLUG] + [
        {'slug': SLUG, 'name': project['name'], 'developer': project['developer']['brand'], 'mode': 'massing'}]
    if not any(p['slug'] == 'c1' for p in index['items']):
        index['items'].insert(0, {'slug': 'c1', 'name': 'C1', 'developer': 'Murad Buildings', 'mode': 'plans'})
    write('index.json', index)
    print(f"Мест рядом: {len(ctx['places'])}, из них брендов/ориентиров: {sum(p['known'] for p in ctx['places'])}")


if __name__ == '__main__':
    main()
