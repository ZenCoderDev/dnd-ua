# Деплой DnD-UA

## Архитектура

```
GitHub Actions (CI/CD)
    │
    ├── Build Next.js image → ghcr.io/zencoderdev/tbdices-next
    ├── Build Prisma image  → ghcr.io/zencoderdev/tbdices-prisma
    │
    └── SSH to Server
            │
            ├── Pull images
            ├── docker compose up -d
            └── prisma migrate deploy

Server (docker compose)
    ├── postgres (volume: postgres_data) ← данные НЕ затираются
    ├── nextjs (порт 3000)
    └── prisma-studio (порт 5555)
```

## Первоначальная настройка сервера

### 1. Создай GitHub Personal Access Token (PAT)

1. Перейди в GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Нажми "Generate new token (classic)"
3. Выбери scope: `read:packages`
4. Скопируй токен

### 2. Добавь секреты в GitHub Repository

Перейди в Settings → Secrets and variables → Actions → New repository secret:

| Секрет | Описание |
|--------|----------|
| `SERVER_IP` | IP адрес сервера |
| `SERVER_PORT` | SSH порт (обычно 22) |
| `SERVER_USERNAME` | Имя пользователя SSH |
| `SERVER_PASSWORD` | Пароль SSH |
| `GHCR_PAT` | Personal Access Token для ghcr.io |

### 3. Подготовь сервер

```bash
# Подключись к серверу
ssh user@server

# Создай директорию проекта
mkdir -p /var/www/tbdices_com_usr/data/www/tbdices.com
cd /var/www/tbdices_com_usr/data/www/tbdices.com

# Создай .env файл
cat > .env << 'EOF'
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@postgres:5432/dnddb?schema=public"
POSTGRES_USER=postgres
POSTGRES_PASSWORD=YOUR_PASSWORD
POSTGRES_DB=dnddb
EOF

# Сделай скрипты исполняемыми (после первого деплоя)
chmod +x scripts/*.sh
```

### 4. Первоначальная загрузка базы данных

**На локальной машине разработчика:**

```bash
# Убедись что локальная БД запущена
docker compose up -d

# Экспортируй базу данных
./scripts/db-export.sh

# Загрузи бэкап на сервер
scp backup_*.sql user@server:/var/www/tbdices_com_usr/data/www/tbdices.com/
```

**На сервере:**

```bash
cd /var/www/tbdices_com_usr/data/www/tbdices.com

# Запусти только postgres
docker compose -f docker-compose.prod.yml up -d postgres

# Дождись готовности (10-15 секунд)
sleep 15

# Импортируй базу данных
./scripts/db-import.sh backup_*.sql

# Запусти остальные сервисы
docker compose -f docker-compose.prod.yml up -d
```

## Автодеплой

После настройки, каждый push в `main` автоматически:

1. ✅ Соберёт Docker образы
2. ✅ Загрузит их в GitHub Container Registry
3. ✅ Подключится к серверу по SSH
4. ✅ Скачает новые образы
5. ✅ Перезапустит контейнеры
6. ✅ Применит миграции базы данных

## Важно: Кириллица (UTF-8)

База данных настроена на работу с UTF-8 для корректного хранения украинского текста:
- `POSTGRES_INITDB_ARGS: "--encoding=UTF8 --lc-collate=C.UTF-8 --lc-ctype=C.UTF-8"`
- Скрипты экспорта/импорта явно указывают кодировку UTF-8

**⚠️ Важно:** `POSTGRES_INITDB_ARGS` применяется ТОЛЬКО при первом создании volume.
Если volume уже существует (БД уже инициализирована), эти настройки не изменят существующую БД.

Для проверки текущей кодировки:
```bash
docker exec dnd_postgres psql -U postgres -d dnddb -c "SHOW server_encoding; SHOW client_encoding;"
```

Если видишь `SQL_ASCII` или `LATIN1`, нужно пересоздать volume:
```bash
# ⚠️ СНАЧАЛА СДЕЛАЙ БЭКАП!
./scripts/db-export.sh

# Удали volume и пересоздай
docker compose -f docker-compose.prod.yml down -v
docker compose -f docker-compose.prod.yml up -d postgres
sleep 15

# Импортируй данные обратно
./scripts/db-import.sh backup_*.sql
```

## Важно: Данные НЕ затираются!

База данных хранится в Docker volume `postgres_data`. Этот volume:
- ❌ НЕ удаляется при `docker compose down`
- ❌ НЕ удаляется при `docker compose up -d`
- ❌ НЕ удаляется при обновлении образов

Volume удаляется ТОЛЬКО если выполнить:
```bash
docker compose -f docker-compose.prod.yml down -v  # ⚠️ УДАЛИТ ДАННЫЕ!
```

## Ручной деплой (если нужно)

```bash
cd /var/www/tbdices_com_usr/data/www/tbdices.com

# Логин в registry
echo "YOUR_PAT" | docker login ghcr.io -u zencoderdev --password-stdin

# Обновление
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d

# Миграции (если есть изменения схемы)
docker compose -f docker-compose.prod.yml exec nextjs npx prisma migrate deploy
```

## Бэкап базы данных

### Создание бэкапа на сервере

```bash
docker exec dnd_postgres pg_dump -U postgres -d dnddb --clean --if-exists > backup.sql
```

### Восстановление из бэкапа

```bash
cat backup.sql | docker exec -i dnd_postgres psql -U postgres -d dnddb
```

## Просмотр логов

```bash
# Все сервисы
docker compose -f docker-compose.prod.yml logs -f

# Только Next.js
docker compose -f docker-compose.prod.yml logs -f nextjs

# Только PostgreSQL
docker compose -f docker-compose.prod.yml logs -f postgres
```

## Troubleshooting

### Контейнер не запускается

```bash
# Проверь статус
docker compose -f docker-compose.prod.yml ps

# Проверь логи
docker compose -f docker-compose.prod.yml logs nextjs
```

### Ошибка подключения к БД

```bash
# Проверь что postgres запущен и healthy
docker compose -f docker-compose.prod.yml ps postgres

# Проверь DATABASE_URL в .env
cat .env | grep DATABASE_URL
```

### Миграции не применяются

```bash
# Применить вручную
docker compose -f docker-compose.prod.yml exec nextjs npx prisma migrate deploy

# Проверить статус миграций
docker compose -f docker-compose.prod.yml exec nextjs npx prisma migrate status
```

