# План 04 — выкладка Spliti на https://spliti.uz

**Статус:** 🟡 приложение выложено на edu_start и проверено через шлюз 2026-11-10; за владельцем — proxy host и сертификат в NPM
**Запрос владельца:** «я взял домен spliti.uz — на него выложи и скажи, как настроить Nginx Proxy Manager на сервере edu_start».

## Что выложено

| Адрес | Что | Индексация |
|---|---|---|
| `/` | сайт Spliti (RU/UZ), форма обращений → `POST /api/inquiries` | да |
| `/demo/` | 3D-демо, только ЖК **NRG Mirzo Ulugbek** (ссылка с сайта — `/demo/?p=nrg-mirzo-ulugbek`) | noindex |
| `/crm/` | CRM (вход менеджера), шахматка NRG | noindex, no-store, без фреймов |
| `/api/…`, `/sanctum/…`, `/up` | Laravel | — |

**C1 и Harizma на сервер не попадают:** deploy.sh копирует в импорт только `nrg-mirzo-ulugbek` и логотипы брендов,
в базе прода только этот ЖК (`/api/projects/index` отдаёт один проект).

## Как устроено на сервере

- Каталог `/home/projects/spliti`: `backend/`, `infra/`, `web/` (собранный фронт), `import/` (пакет NRG), `data/db` (SQLite), `data/storage` (картинки).
- `infra/docker-compose.yml`, проект `spliti`: `app` (php-fpm 8.4 Alpine, образ `spliti/app`, 192 МБ) и `gateway` (nginx 1.27, 48 МБ),
  порт `172.17.0.1:18095` — только на docker-мосту, наружу его открывает NPM.
- Секреты — `infra/.env.app` (600, создаётся из `env.production.example`, `APP_KEY` генерируется при первой выкладке; в git и rsync не попадает).
- Watchdog: `/opt/ops/stacks.d/60-spliti.conf` — прямые проверки через шлюз; проверка через NPM закомментирована до выпуска сертификата
  (иначе healthcheck решит, что сломан прокси, и перезапустит общий NPM).

## Шаги

- [x] `infra/`: compose, Dockerfile, php.ini, fpm, entrypoint, gateway nginx, `deploy.sh [--init]`
- [x] Сборка на сервере: убрана компиляция opcache (apk внутри сборки зависал), из образа выкинут локальный `bootstrap/cache/*.php` (ссылался на dev-пакет Pail)
- [x] `GLOB_BRACE` → фильтр по расширению (на Alpine/musl такой константы нет): импорт картинок сайта и логотипов брендов
- [x] `deploy.sh`: `docker compose run/exec … < /dev/null`, иначе они съедали остаток скрипта, переданного через ssh
- [x] Запуск, миграции, контент сайта (7 картинок), логотипы брендов (18), импорт NRG (14 корпусов, 635 квартир)
- [x] Шлюз: заголовки `nosniff`/`Referrer-Policy` повторены в location со своими `add_header`; `robots.txt`; конфиг монтируется каталогом (файловый mount после rsync видел старый inode)
- [x] `deploy.sh`: `rsync --timeout=60` и `ServerAlive` для ssh — связь с сервером замирала посреди передачи, rsync висел 10 мин
- [x] Проверка через шлюз: страницы 200, в `/api/projects/index` только NRG, C1/Harizma — 404, www → 301 на spliti.uz, CRM noindex/DENY/no-store, ассеты immutable+gzip
- [x] Вход CRM в продовом режиме (за прокси, `X-Forwarded-Proto: https`): куки `secure`+`httponly`, неверный пароль → 422, чужой CSRF → 419, гость → 401
- [x] Браузер через ssh-туннель: сайт (все картинки из `/api/site/media`), 3D NRG (сцена, места рядом, логотипы), форма входа CRM — без ошибок в консоли
- [x] Менеджер CRM `admin@spliti.uz` (пароль выдан в чате, нигде не записан; сброс — `zhk:admin admin@spliti.uz`)
- [x] Стек в `/opt/ops/stacks.d/60-spliti.conf` (бэкап `/opt/ops/backups/stacks.d.20261110-142536.before-spliti.tgz`), `ops status` — OK, 3/3 проверки
- [ ] **Владелец:** proxy host `spliti.uz` + `www.spliti.uz` → `172.17.0.1:18095`, сертификат Let's Encrypt, Force SSL
- [ ] После сертификата: раскомментировать проверку `https://spliti.uz/up|200|npm` в `60-spliti.conf`
- [ ] Проверить https://spliti.uz, `/demo/`, `/crm/`, форму обращений с телефона

## Повторная выкладка

```bash
./infra/deploy.sh          # код и фронт; данные в базе не трогаются
./infra/deploy.sh --init   # + стартовый контент сайта (без --force, правки в базе сохраняются) и импорт NRG
```

Откат: `docker compose -f /home/projects/spliti/infra/docker-compose.yml down` — NPM и другие проекты не задеваются.

## Открытые вопросы владельцу

- **Логотипы брендов в 3D** (Korzinka, Havas, банки, школы — слой «Рядом»): теперь они на публичном https://spliti.uz/demo/, как раньше на lab.
  Показывать их публично или выложить демо без логотипов (без `data-build/brands`; как тогда выглядят подписи — не проверено)?
- NPM admin `:81` открыт по http на весь интернет — стоит закрыть фаерволом или пускать через ssh-туннель.

