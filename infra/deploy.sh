#!/usr/bin/env bash
# Выкладка Spliti на edu_start (https://spliti.uz). Запуск с мака из корня 3d-zhk:
#   infra/deploy.sh          — обновить код, фронт, миграции и новые подписи сайта (правки в базе сервера не трогаются)
#   infra/deploy.sh --init   — первый запуск: + ключ приложения и ЖК NRG (менеджера CRM — командой в конце вывода)
# Публикуется только NRG Mirzo Ulugbek: C1 и Harizma — данные застройщиков, без их согласия не выкладываются.
set -euo pipefail
HOST=edu_start
DIR=/home/projects/spliti
PUBLIC_PROJECTS=(nrg-mirzo-ulugbek)
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
INIT=0; [[ "${1:-}" == "--init" ]] && INIT=1
# связь с сервером иногда замирает посреди передачи: пусть rsync/ssh падают через минуту, а не висят
export RSYNC_RSH="ssh -o ServerAliveInterval=15 -o ServerAliveCountMax=4"

echo "→ сборка фронта"
(cd "$ROOT/web" && npx vue-tsc --noEmit && npx vite build --emptyOutDir >/dev/null)

echo "→ файлы на сервер"
ssh "$HOST" "mkdir -p $DIR/{backend,infra,web,import/projects,import/brands,data/db,data/storage}"
rsync -az --timeout=60 --delete --exclude vendor --exclude node_modules --exclude '.env' --exclude '.env.*' --exclude '*.sqlite' \
  --exclude 'storage/app/*' --exclude 'storage/logs/*' --exclude 'storage/framework/*/*' --exclude 'bootstrap/cache/*.php' --exclude tests \
  "$ROOT/backend/" "$HOST:$DIR/backend/"
rsync -az --timeout=60 --delete --exclude '.env.app' "$ROOT/infra/" "$HOST:$DIR/infra/"
rsync -az --timeout=60 "$ROOT/infra/dockerignore" "$HOST:$DIR/.dockerignore"
rsync -az --timeout=60 --delete --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r "$ROOT/web/dist/" "$HOST:$DIR/web/"
for slug in "${PUBLIC_PROJECTS[@]}"; do
  rsync -az --timeout=60 "$ROOT/data-build/projects/$slug.json" "$HOST:$DIR/import/projects/"
  rsync -az --timeout=60 --delete "$ROOT/data-build/projects/$slug/" "$HOST:$DIR/import/projects/$slug/"
done
rsync -az --timeout=60 --delete "$ROOT/data-build/brands/" "$HOST:$DIR/import/brands/"

echo "→ сборка и запуск контейнеров"
ssh "$HOST" bash -s -- "$DIR" "$INIT" "${PUBLIC_PROJECTS[*]}" <<'REMOTE'
set -euo pipefail
DIR=$1; INIT=$2; PROJECTS=$3
cd "$DIR/infra"
if [ ! -f .env.app ]; then
  cp env.production.example .env.app
  chmod 600 .env.app
fi
docker compose build app
if ! grep -q '^APP_KEY=base64:' .env.app; then
  KEY=$(docker compose run --rm --no-deps -T --entrypoint php app artisan key:generate --show < /dev/null)
  sed -i "s|^APP_KEY=.*|APP_KEY=$KEY|" .env.app
fi
docker compose up -d --remove-orphans
# < /dev/null: иначе exec/run съедают остаток скрипта, который ssh отдаёт через stdin
art() { docker compose exec -T -u www-data app php artisan "$@" < /dev/null; }
art migrate --force
# контент сайта: дописывает новые ключи из backend/resources/site, правки в базе не трогает
art spliti:site-import
if [ "$INIT" = 1 ]; then
  art zhk:import $PROJECTS --from=/import
fi
art optimize >/dev/null
docker compose exec -T gateway nginx -t >/dev/null < /dev/null && docker compose exec -T gateway nginx -s reload < /dev/null
docker compose ps --format 'table {{.Name}}\t{{.Status}}'
curl -s -o /dev/null -w "up: %{http_code}\n" http://172.17.0.1:18095/up
curl -s -o /dev/null -w "site api: %{http_code}\n" http://172.17.0.1:18095/api/site
REMOTE
echo "✓ готово. Менеджер CRM (один раз): ssh $HOST 'cd $DIR/infra && docker compose exec -u www-data app php artisan zhk:admin admin@spliti.uz --name=\"Spliti\"'"
