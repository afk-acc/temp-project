"""OSM XML (API /map) → JSON в формате Overpass «out geom»: элементы с тегами и геометрией.
Запуск: python3 -I tools/osm_xml_to_json.py data-src/nrg/map.osm data-src/nrg/osm.json
"""
import json
import sys
import xml.etree.ElementTree as ET


def main(src: str, dst: str) -> None:
    root = ET.parse(src).getroot()
    nodes, ways, out = {}, {}, []
    for n in root.iter('node'):
        lat, lon = float(n.get('lat')), float(n.get('lon'))
        nodes[n.get('id')] = {'lat': lat, 'lon': lon}
        tags = {t.get('k'): t.get('v') for t in n.findall('tag')}
        if tags:
            out.append({'type': 'node', 'id': int(n.get('id')), 'lat': lat, 'lon': lon, 'tags': tags})
    for w in root.iter('way'):
        geom = [nodes[nd.get('ref')] for nd in w.findall('nd') if nd.get('ref') in nodes]
        tags = {t.get('k'): t.get('v') for t in w.findall('tag')}
        ways[w.get('id')] = geom
        if tags and len(geom) >= 2:
            out.append({'type': 'way', 'id': int(w.get('id')), 'tags': tags, 'geometry': geom})
    for r in root.iter('relation'):
        tags = {t.get('k'): t.get('v') for t in r.findall('tag')}
        if not tags:
            continue
        members = []
        for m in r.findall('member'):
            if m.get('type') == 'way' and m.get('ref') in ways:
                members.append({'type': 'way', 'role': m.get('role'), 'geometry': ways[m.get('ref')]})
        out.append({'type': 'relation', 'id': int(r.get('id')), 'tags': tags, 'members': members})
    with open(dst, 'w', encoding='utf-8') as f:
        json.dump({'elements': out}, f, ensure_ascii=False)
    print(f'{len(out)} элементов → {dst}')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
