#!/bin/bash
# Скрипт для экспорта локальной базы данных
# Запускать на машине разработчика

set -e

CONTAINER_NAME="dnd_postgres"
DB_NAME="dnddb"
DB_USER="postgres"
BACKUP_FILE="backup_$(date +%Y%m%d_%H%M%S).sql"

echo "📦 Экспорт базы данных из контейнера $CONTAINER_NAME..."

# Проверяем, запущен ли контейнер
if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "❌ Контейнер $CONTAINER_NAME не запущен!"
    echo "   Запусти: docker compose up -d"
    exit 1
fi

# Создаём дамп базы данных с явным указанием UTF-8 кодировки для кириллицы
docker exec $CONTAINER_NAME pg_dump \
    -U $DB_USER \
    -d $DB_NAME \
    --encoding=UTF8 \
    --clean \
    --if-exists \
    > $BACKUP_FILE

# Проверяем что файл не пустой и содержит UTF-8
if [ ! -s "$BACKUP_FILE" ]; then
    echo "❌ Ошибка: файл бэкапа пустой!"
    exit 1
fi

echo "✅ База данных экспортирована в: $BACKUP_FILE"
echo "   Кодировка: UTF-8 (поддержка кириллицы)"
echo "   Размер: $(du -h $BACKUP_FILE | cut -f1)"
echo ""
echo "📤 Для загрузки на сервер выполни:"
echo "   scp $BACKUP_FILE user@server:/path/to/project/"
echo ""
echo "📥 Затем на сервере:"
echo "   ./scripts/db-import.sh $BACKUP_FILE"
