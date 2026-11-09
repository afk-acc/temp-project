# Laravel-бэкенд Spliti: php-fpm на Alpine, SQLite встроен в официальный образ PHP.
FROM composer:2 AS vendor
WORKDIR /app
COPY backend/composer.json backend/composer.lock ./
RUN composer install --no-dev --no-interaction --prefer-dist --no-scripts --no-autoloader --ignore-platform-reqs
COPY backend/ ./
RUN composer dump-autoload --no-dev --optimize --no-scripts

FROM php:8.4-fpm-alpine
RUN docker-php-ext-install opcache
COPY infra/php/php.ini /usr/local/etc/php/conf.d/zz-spliti.ini
COPY infra/php/fpm.conf /usr/local/etc/php-fpm.d/zz-spliti.conf
COPY infra/php/entrypoint.sh /usr/local/bin/spliti-entrypoint
WORKDIR /var/www/html
COPY --from=vendor /app ./
RUN rm -rf tests .env .env.* database/*.sqlite storage/app/* storage/logs/* \
 && mkdir -p database/data storage/app storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs bootstrap/cache \
 && php artisan package:discover --ansi \
 && chown -R www-data:www-data storage bootstrap/cache database/data \
 && chmod +x /usr/local/bin/spliti-entrypoint
ENTRYPOINT ["spliti-entrypoint"]
CMD ["php-fpm"]
