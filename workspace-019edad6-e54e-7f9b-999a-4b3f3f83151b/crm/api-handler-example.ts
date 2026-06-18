// ============================================================================
// ПРИМЕР СТАНДАРТНОГО БЭКЕНД-ОБРАБОТЧИКА НА TYPESCRIPT / EXPRESS
// (api-handler-example.ts) — Подходит для деплоя на Railway / Node.js
// ============================================================================

import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import { Pool } from 'pg';

const app = express();

// Разрешаем CORS для запросов с Vercel и других доменов
app.use(cors());
app.use(express.json());

// 1. Подключение к базе данных PostgreSQL (Railway / Supabase / Neon)
let pool: Pool | null = null;
if (process.env.DATABASE_URL) {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
}

// 2. Основной POST-эндпоинт для приема лидов с Лендинга или Вебхуков
app.post('/api/leads', async (req: Request, res: Response) => {
  const { source, name, phone, messenger, pet, dimensions, comment } = req.body;

  // Валидация обязательных полей
  if (!name || !phone) {
    return res.status(400).json({ success: false, message: 'Имя и телефон обязательны для заполнения' });
  }

  const clientSource = source || 'Landing';
  let leadId = `L-${Date.now().toString().slice(-6)}`;

  // Шаг А: Запись лида в таблицу leads базы данных PostgreSQL
  if (pool) {
    try {
      const insertQuery = `
        INSERT INTO leads (source, client_name, contact_info, preferred_messenger, pet_type, dimensions, comment)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING lead_id;
      `;
      const dbResult = await pool.query(insertQuery, [
        clientSource, name, phone, messenger || 'telegram', pet || '', dimensions || '', comment || ''
      ]);
      leadId = dbResult.rows[0].lead_id;
    } catch (dbErr: any) {
      console.error('Ошибка при записи лида в PostgreSQL:', dbErr.message);
    }
  }

  // Шаг Б: Отправка мгновенного Push-уведомления мастеру в Telegram
  try {
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const masterId = process.env.MASTER_TELEGRAM_ID;

    if (telegramToken && masterId) {
      const cleanPhone = phone.replace(/[^0-9]/g, '');
      const replyUrl = messenger === 'whatsapp' 
        ? `https://wa.me/${cleanPhone}` 
        : `https://t.me/${phone.replace('@', '')}`;

      const msgText = `
🔔 <b>НОВЫЙ ЗАПРОС ИЗ ${clientSource.toUpperCase()} (2026)!</b>

👤 <b>Клиент:</b> ${name}
📞 <b>Контакты:</b> <code>${phone}</code> (${messenger})
🦎 <b>Питомец:</b> ${pet || '<i>Не указан</i>'}
📐 <b>Размеры:</b> ${dimensions || '<i>Не указаны</i>'}

💬 <b>Комментарий / Пожелания:</b>
<i>${comment || 'Нет комментариев'}</i>

🆔 ID заявки: <code>${leadId}</code>
      `.trim();

      await axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        chat_id: masterId,
        text: msgText,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '💬 Открыть чат с клиентом', url: replyUrl }],
            [{ text: '🔄 Перевести в статус "В работе"', callback_data: `status_ESTIMATING_${leadId}` }]
          ]
        }
      });
    }

    return res.status(200).json({ success: true, message: 'Лид успешно сохранен и отправлен мастеру', lead_id: leadId });
  } catch (err: any) {
    console.error('Ошибка бэкенда при отправке уведомления в Telegram:', err.message);
    return res.status(500).json({ success: false, message: 'Ошибка сервера при сохранении заявки' });
  }
});

// Запуск HTTP-сервера
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Сервер приема лидов (CRM API) запущен на порту ${PORT}`));
