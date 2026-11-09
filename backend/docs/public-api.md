# Публичный API (3D-сайт ЖК и сайт Spliti)

Отдаёт только бэкенд (Laravel, этот каталог). Данные хранятся в базе; файлы `data-build/` — пакет для импорта (`php artisan zhk:import`),
фронт их не читает. Для выкладки без бэкенда те же ответы выгружаются файлами из базы: `php artisan zhk:export <slug> --to=…`.
Все координаты плана — метры. Ось X — вправо по плану, ось Y — вверх по плану. Начало — центр лифтового ядра.
Мировые координаты окружения — метры от точки госреестра: x — на восток, y — на север.

| Метод | Путь | Файл в выгрузке zhk:export | Где хранится |
|---|---|---|---|
| GET | `/api/projects/{slug}` | `projects/{slug}.json` | `projects` + `buildings` + `floors` |
| GET | `/api/projects/{slug}/units` | `projects/{slug}/units.json` | `units` + `unit_status_observations` |
| GET | `/api/projects/{slug}/floor-types/{id}` | `projects/{slug}/floor-types/{id}.json` | `floor_types` (геометрия JSON) |
| GET | `/api/projects/{slug}/context` | `projects/{slug}/context.json` | `project_contexts` (кеш OSM) |
| GET | `/api/projects/index` | `projects/index.json` | список ЖК для переключателя |
| GET | `/api/projects/{slug}/blocks/{id}` | `projects/{slug}/blocks/{id}.json` | `block_layouts` — этажи корпуса (режим massing) |
| GET | `/api/projects/{slug}/apartment-types` | `projects/{slug}/apartment-types.json` | `apartment_types` — реальные планировки (есть не у всех ЖК) |
| GET | `/api/projects/{slug}/types/{code}.png` | `projects/{slug}/types/{code}.png` | чертёж планировки из каталога |
| POST | `/api/leads` | — (на статике 404/405 → фронт показывает демо-сообщение) | `leads` — заявка в CRM |
| GET | `/api/site?lang=ru\|uz` | — | `site_contents`, `site_settings` — тексты, контакты, ссылка на демо |
| GET | `/api/site/media/{file}` | — | хранилище `media/site/` — картинки сайта |
| POST | `/api/inquiries` | — | `inquiries` — обращения застройщиков с сайта Spliti |

CRM (`/api/crm/...`, под сессией менеджера) в этот документ не входит — см. `routes/api.php`.

У проекта есть необязательное поле `about: [{title, text}]` — «как собран макет» для окна «О данных».

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
    "assumed": ["heights", "facade", "floor_1", "floor_3"],
    "palette": { "stone": "#e7dfd2", "band": "#a85d43", "glass": "#3d4c58" }   // необязательно: цвета фасада по рендерам
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
               "polygon": [[x, y], …], "observed_at": "2026-11-04", "source": "mbc.uz",
               "block": "k1",               // режим massing: корпус
               "type_code": "H1-34",        // ссылка на apartment-types (если есть)
               "room_list": [ { "name": "Кухня", "area": 14.14 } ],
               "test": true } ] }           // стартовые тестовые данные — жёлтая плашка в интерфейсе
```

От бэкенда: `source: "crm"` у каждой квартиры, `Cache-Control: no-store`; цена отдаётся только у `available` и `booked`
(у проданных и снятых — `null`, цена сделки остаётся в CRM). Сайт перечитывает квартиры каждые 20 с.

## ApartmentType

```jsonc
{ "items": [ { "code": "H1-34", "title": "Однокомнатная", "rooms": 1, "area": 33.98,
               "room_list": [ { "name": "Кухня", "area": 14.14 }, … ],
               "image": "/api/projects/harizma/types/H1-34.png",   // чертёж для карточки
               "width": 5.95, "depth": 7.2, "facade": "N",          // габарит в метрах, сторона окон на чертеже
               "geometry": { "walls_ext": […], "walls_int": […], "glass": […], "door_heads": […], "slab": […], "outline": […], "rooms": […], "bbox": […] },
               "source": "Каталог Golden House 2025, стр. 36–37" } ] }
```

## Lead (POST /api/leads)

```jsonc
// запрос
{ "project": "harizma", "unit_id": 9011200, "name": "Азиз", "phone": "+998 90 123 45 67", "comment": null }
// 201 → { "id": 1, "status": "new" };  422 → { "message": "…", "errors": { "phone": ["Номер в формате +998 XX XXX XX XX"] } }
// 429 — больше 10 заявок в минуту с одного адреса
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
