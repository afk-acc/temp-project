# API-контракт демо (этап 0)

Отдаётся заглушкой: Vite-плагин `apiStub` в `web/vite.config.ts` читает файлы этого каталога.
На этапе 2 те же ответы отдаёт Laravel, фронт не меняется.
Все координаты плана — метры. Ось X — вправо по плану, ось Y — вверх по плану. Начало — центр лифтового ядра.
Мировые координаты окружения — метры от точки госреестра: x — на восток, y — на север.

| Метод | Путь | Файл | Будущая модель |
|---|---|---|---|
| GET | `/api/projects/{slug}` | `projects/{slug}.json` | `projects` + `buildings` + `floors` |
| GET | `/api/projects/{slug}/units` | `projects/{slug}/units.json` | `units` + `unit_status_observations` |
| GET | `/api/projects/{slug}/floor-types/{id}` | `projects/{slug}/floor-types/{id}.json` | `floor_types` (геометрия JSON) |
| GET | `/api/projects/{slug}/context` | `projects/{slug}/context.json` | `project_contexts` (кеш OSM) |

## Project

```jsonc
{
  "slug": "c1", "name": "C1",
  "developer": { "brand": "Murad Buildings", "legal_name": "\"MB TECH COSTUMER\" МЧЖ" },
  "address": "…", "district": "Яшнабадский",
  "location": { "lat": 41.306852, "lon": 69.292671 },
  "gov_registry": { "object_id": 54872, "status": "Jarayonda", "status_ru": "строится", "deadline": "2028-02-28",
                    "floors": 30, "apartments": 252, "source": "…", "observed_at": "2026-11-04" },
  "catalog": { "units_total": 243, "by_status": { "available": 38, … }, "price_policy": "on_request" },
  "building": {
    "azimuth_deg": 28,          // куда смотрит верх плана
    "slab": 0.25, "crown_height": 5, "height": 108.2,
    "floors": [ { "n": 1, "type": "POD2", "elevation": 0, "height": 4.8, "residential": false }, … ],
    "assumed": ["heights", "facade", "floor_1", "floor_3"]
  },
  "floor_types": { "A": { "label": "Типовой этаж A (10 квартир)", "kind": "tower" }, … },
  "sources": [ { "what": "…", "source": "…", "date": "2026-11-04" } ],
  "assumptions": ["…"], "disclaimer": "…"
}
```

## Units

```jsonc
{ "observed_at": "2026-11-04", "source": "mbc.uz — каталог застройщика (Profitbase)",
  "items": [ { "id": 14858545, "number": 73, "floor": 12, "section": 1, "rooms": 2, "area": 52.83,
               "status": "available|booked|sold|unavailable", "price": null,   // сумы; null — «по запросу»
               "polygon": [[x, y], …], "observed_at": "2026-11-04", "source": "mbc.uz" } ] }
```

## FloorType

```jsonc
{ "id": "A", "kind": "tower|mixed|podium", "label": "…", "cell": 0.05,
  "walls_ext": [[x0, y0, x1, y1], …],   // простенки фасада
  "walls_int": [[x0, y0, x1, y1], …],   // внутренние стены и шахты
  "glass": [[…]], "door_heads": [[…]],  // стекло по линиям окон; перемычки дверей (2,1 м — потолок)
  "slab": [[…]],                        // перекрытие прямоугольниками
  "outline": [[x0, y0, x1, y1, nx, ny], …],  // периметр с нормалью наружу
  "rooms": [ { "x": 1.2, "y": -3.4, "area": 17.3 } ],
  "bbox": [x0, y0, x1, y1],
  "source": { "image": "66bf315386a3b", "m_per_px": 0.00739, "registration_score": 1.0 } }
```

## Context

```jsonc
{ "origin": { "lat": …, "lon": … },
  "buildings": [ { "p": [[x, y], …], "h": 22.3, "g": false, "name": null } ],  // g — высота оценена
  "roads": [ { "p": [[x, y], …], "w": 18, "k": "primary", "name": "…" } ],
  "water_lines": […], "water_areas": […], "green": [ { "p": […], "k": "park", "name": "…" } ],
  "pois": [ { "kind": "park|water", "name": "…", "x": …, "y": …, "r": … } ],
  "attribution": "© участники OpenStreetMap, ODbL", "observed_at": "2026-11-04" }
```

Цены в интерфейсе — только в сумах (закон «О рекламе», ст. 16).
