"""Места рядом с ЖК из OSM: категории, известные бренды, расстояние и время пешком."""
from __future__ import annotations

import math
import re

# Известные сети и места — показываются крупными метками всегда
KNOWN = [
    'korzinka', 'havas', 'makro', 'baraka', 'carrefour', 'evos', 'kfc', 'les ailes', 'safia', 'oqtepa', 'feed up',
    'kapitalbank', 'ipak yo', 'hamkorbank', 'xalq banki', 'ipoteka', 'agrobank', 'asakabank', 'anorbank', 'tbc',
    'uzum', 'ozon', 'uzmobile', 'beeline', 'ucell', 'mobiuz', 'intersport', 'audi', 'bmw', 'chevrolet', 'tok bor',
    'uzbekneftegaz', 'british school', 'westminster', 'mgimo', 'diplomat international', 'буз базар', "bo'z",
    'bon!', 'японамама', 'bodomzor',
]

# ИП с фамилией и инициалами, юрлица без вывески — не показываем (частные лица, нет пользы)
NOISE = re.compile(r"([А-ЯЁA-Z][а-яёa-z]+\s+[А-ЯЁA-Z]\.\s?[А-ЯЁA-Z]?\.?$)|бизнес|трейд|групп|\bооо\b|mchj|мчж", re.I)


def norm(name: str) -> str:
    return re.sub(r'[^a-zа-яё0-9]', '', name.lower().replace('banki', '').replace('банк', ''))

WALK_SPEED_M_MIN = 80      # ≈ 4,8 км/ч
ROUTE_FACTOR = 1.25        # улицы длиннее прямой


def category(t: dict) -> str | None:
    a, s, l = t.get('amenity'), t.get('shop'), t.get('leisure')
    if t.get('station') == 'subway' or t.get('railway') == 'station':
        return 'metro'
    if s in ('supermarket', 'mall', 'department_store', 'convenience', 'bakery', 'greengrocer') or a == 'marketplace':
        return 'shop'
    if a in ('bank', 'bureau_de_change'):
        return 'bank'
    if a in ('restaurant', 'cafe', 'fast_food'):
        return 'food'
    if a in ('school', 'kindergarten', 'college', 'university'):
        return 'edu'
    if a in ('hospital', 'clinic', 'pharmacy', 'doctors', 'dentist') or t.get('healthcare'):
        return 'health'
    if l in ('fitness_centre', 'sports_centre', 'park', 'stadium') or a == 'swimming_pool':
        return 'sport'
    if s == 'car' or a == 'fuel' or a == 'charging_station':
        return 'auto'
    return None


def display_name(t: dict) -> str:
    return (t.get('name:ru') if t.get('name:ru') and t.get('station') == 'subway' else None) \
        or t.get('brand') or t.get('name:ru') or t.get('name') or ''


def is_known(t: dict, cat: str) -> bool:
    if cat == 'metro':
        return True
    hay = ' '.join(str(t.get(k, '')) for k in ('brand', 'name', 'name:ru', 'name:uz')).lower().replace('ʻ', "'").replace('’', "'")
    return any(k in hay for k in KNOWN)


def build_places(osm: dict, lat0: float, lon0: float, center: tuple[float, float], radius: float = 1000) -> list[dict]:
    kx = 111320 * math.cos(math.radians(lat0))
    ky = 110574
    raw = []
    for e in osm['elements']:
        t = e.get('tags', {})
        if not (t.get('name') or t.get('brand')):
            continue
        cat = category(t)
        if not cat:
            continue
        if e['type'] == 'node':
            lat, lon = e['lat'], e['lon']
        elif e.get('geometry'):
            g = e['geometry']
            lat = sum(p['lat'] for p in g) / len(g)
            lon = sum(p['lon'] for p in g) / len(g)
        else:
            continue
        x = (lon - lon0) * kx
        y = (lat - lat0) * ky
        d = math.hypot(x - center[0], y - center[1])
        if d > radius:
            continue
        name = display_name(t).strip()
        if not name or NOISE.search(name):
            continue
        raw.append({'name': name, 'brand': t.get('brand'), 'category': cat, 'known': is_known(t, cat),
                    'x': round(x, 1), 'y': round(y, 1), 'dist': round(d), 'osm': f"{e['type']}/{e['id']}"})
    raw.sort(key=lambda p: (not p['known'], p['dist']))
    # банкоматы не показываем отдельно от отделений; одинаковые названия ближе 120 м сливаем
    out: list[dict] = []
    for p in raw:
        if any(norm(q['name']) == norm(p['name']) and math.hypot(q['x'] - p['x'], q['y'] - p['y']) < 150 for q in out):
            continue
        out.append(p)
    per_cat: dict[str, int] = {}
    final = []
    for p in sorted(out, key=lambda p: p['dist']):
        n = per_cat.get(p['category'], 0)
        if p['known'] or n < 6:
            per_cat[p['category']] = n + 1
            p['walk_min'] = max(1, round(p['dist'] * ROUTE_FACTOR / WALK_SPEED_M_MIN))
            final.append(p)
    return final
