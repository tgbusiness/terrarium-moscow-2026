-- ====================================================================
-- СХЕМА БАЗЫ ДАННЫХ POSTGRESQL (schema.sql)
-- Разработана для хостинга Railway / Supabase / Neon (Июнь 2026)
-- Полностью синхронизирована с бэкендом и Telegram-ботом
-- ====================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ТАБЛИЦА: КЛИЕНТЫ (clients)
CREATE TABLE IF NOT EXISTS clients (
    client_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(150) NOT NULL,
    contact_info VARCHAR(100) UNIQUE NOT NULL,
    delivery_address TEXT,
    notes TEXT,
    total_orders INT DEFAULT 0,
    total_revenue DECIMAL(10, 2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. ТАБЛИЦА: ЛИДЫ (leads)
CREATE TABLE IF NOT EXISTS leads (
    lead_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source VARCHAR(50) NOT NULL DEFAULT 'Landing', -- 'Avito', 'Profi', 'Yandex', 'Landing', 'Telegram'
    client_name VARCHAR(100) NOT NULL,
    contact_info VARCHAR(100) NOT NULL,
    preferred_messenger VARCHAR(50) DEFAULT 'telegram', -- 'telegram', 'whatsapp', 'phone'
    pet_type VARCHAR(100),
    dimensions VARCHAR(100),
    comment TEXT,
    status VARCHAR(50) DEFAULT 'NEW_LEAD', -- 'NEW_LEAD', 'ESTIMATING', 'PREPAYMENT_RECEIVED', 'IN_PRODUCTION', 'READY', 'COMPLETED', 'CANCELLED'
    is_converted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. ТАБЛИЦА: ЗАКАЗЫ (orders)
CREATE TABLE IF NOT EXISTS orders (
    order_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_number VARCHAR(30) UNIQUE NOT NULL, -- например: ORD-2026-001
    client_id UUID REFERENCES clients(client_id) ON DELETE SET NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'ESTIMATING', 
    -- 'ESTIMATING', 'PREPAYMENT_RECEIVED', 'IN_PRODUCTION', 'READY_FOR_DELIVERY', 'COMPLETED', 'CANCELLED'
    package_name VARCHAR(100) NOT NULL, -- 'Индивидуальный Кастом', 'Комплекс Под Ключ', 'Палюдариум'
    dimensions VARCHAR(100) NOT NULL,
    glass_thickness INT DEFAULT 5, -- 4, 5, 6
    has_3d_background BOOLEAN DEFAULT FALSE,
    has_equipment BOOLEAN DEFAULT FALSE,
    total_price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    prepayment DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    deadline DATE NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. ТАБЛИЦА: ПОРТФОЛИО (portfolio) для каталога в Telegram-боте
CREATE TABLE IF NOT EXISTS portfolio (
    item_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'desert', 'tropical', 'custom'
    dimensions VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url TEXT NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для оптимизации выборок
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_clients_contact ON clients(contact_info);
