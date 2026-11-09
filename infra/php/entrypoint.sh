#!/bin/sh
# Кеши конфигурации и маршрутов собираются при старте — уже с переменными из .env.app. Artisan — от www-data,
# чтобы файлы базы и хранилища принадлежали тому же пользователю, что и php-fpm.
set -e
chown -R www-data:www-data /var/www/html/database/data /var/www/html/storage
su -s /bin/sh www-data -c "php artisan optimize --ansi" || echo "spliti: optimize не выполнен — продолжаю без кешей"
exec "$@"
