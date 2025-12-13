#!/bin/bash
# Скрипт для импорта базы данных на сервере
# Запускать на сервере

set -e

CONTAINER_NAME="dnd_postgres"
DB_NAME="dnddb"
DB_USER="postgres"
BACKUP_FILE="${1:-backup.sql}"

if [ ! -f "$BACKUP_FILE" ]; then
    echo "❌ Файл бэкапа не найден: $BACKUP_FILE"
    echo "   Использование: ./scripts/db-import.sh backup.sql"
    exit 1
fi

echo "📦 Импорт базы данных из $BACKUP_FILE..."

# Проверяем, запущен ли контейнер
if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "❌ Контейнер $CONTAINER_NAME не запущен!"
    echo "   Запусти: docker compose -f docker-compose.prod.yml up -d postgres"
    exit 1
fi

# Импортируем базу данных с явным указанием UTF-8 кодировки для кириллицы
# PGCLIENTENCODING=UTF8 гарантирует правильную передачу кириллических символов
docker exec -i -e PGCLIENTENCODING=UTF8 $CONTAINER_NAME psql \
    -U $DB_USER \
    -d $DB_NAME \
    -v ON_ERROR_STOP=1 \
    < "$BACKUP_FILE"

echo "✅ База данных успешно импортирована!"
echo ""
echo "🔍 Проверка кодировки базы данных:"
docker exec $CONTAINER_NAME psql -U $DB_USER -d $DB_NAME -c "SHOW server_encoding; SHOW client_encoding;"
echo ""
echo "🔄 Перезапусти приложение для применения изменений:"
echo "   docker compose -f docker-compose.prod.yml restart nextjs prisma"
