#!/usr/bin/env bash
# Выкладка Spliti на edu_start (https://spliti.uz). Запуск с мака из корня 3d-zhk:
#   infra/deploy.sh          — обновить код, фронт и миграции (данные в базе сервера не трогаются)
#   infra/deploy.sh --init   — первый запуск: ключ приложения, контент сайта, ЖК NRG, менеджер CRM
# Публикуется только NRG Mirzo Ulugbek: C1 и Harizma — данные застройщиков, без их согласия не выкладываются.
set -euo pipefail
HOST=edu_start
DIR=/home/projects/spliti
PUBLIC_PROJECTS=(nrg-mirzo-ulugbek)
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
INIT=0; [[ "${1:-}" == "--init" ]] && INIT=1

echo "→ сборка фронта"
(cd "$ROOT/web" && npx vue-tsc --noEmit && npx vite build --emptyOutDir >/dev/null)

echo "→ файлы на сервер"
ssh "$HOST" "mkdir -p $DIR/{backend,infra,web,import/projects,import/brands,data/db,data/storage}"
rsync -az --delete --exclude vendor --exclude node_modules --exclude '.env' --exclude '.env.*' --exclude '*.sqlite' \
  --exclude 'storage/app/*' --exclude 'storage/logs/*' --exclude 'storage/framework/*/*' --exclude tests \
  "$ROOT/backend/" "$HOST:$DIR/backend/"
rsync -az --delete --exclude '.env.app' "$ROOT/infra/" "$HOST:$DIR/infra/"
rsync -az "$ROOT/infra/dockerignore" "$HOST:$DIR/.dockerignore"
rsync -az --delete --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r "$ROOT/web/dist/" "$HOST:$DIR/web/"
for slug in "${PUBLIC_PROJECTS[@]}"; do
  rsync -az "$ROOT/data-build/projects/$slug.json" "$HOST:$DIR/import/projects/"
  rsync -az --delete "$ROOT/data-build/projects/$slug/" "$HOST:$DIR/import/projects/$slug/"
done
rsync -az --delete "$ROOT/data-build/brands/" "$HOST:$DIR/import/brands/"

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
  KEY=$(docker compose run --rm --no-deps -T --entrypoint php app artisan key:generate --show)
  sed -i "s|^APP_KEY=.*|APP_KEY=$KEY|" .env.app
fi
docker compose up -d --remove-orphans
art() { docker compose exec -T -u www-data app php artisan "$@"; }
art migrate --force
if [ "$INIT" = 1 ]; then
  art spliti:site-import
  art zhk:import $PROJECTS --from=/import
fi
art optimize >/dev/null
docker compose exec -T gateway nginx -t >/dev/null && docker compose exec -T gateway nginx -s reload
docker compose ps --format 'table {{.Name}}\t{{.Status}}'
curl -s -o /dev/null -w "up: %{http_code}\n" http://172.17.0.1:18095/up
curl -s -o /dev/null -w "site api: %{http_code}\n" http://172.17.0.1:18095/api/site
REMOTE
echo "✓ готово. Менеджер CRM (один раз): ssh $HOST 'cd $DIR/infra && docker compose exec -u www-data app php artisan zhk:admin admin@spliti.uz --name=\"Spliti\"'"
