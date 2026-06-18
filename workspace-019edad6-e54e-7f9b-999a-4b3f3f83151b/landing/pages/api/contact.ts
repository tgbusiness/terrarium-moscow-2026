import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Pool } from 'pg';

type Data = {
  success: boolean;
  message: string;
  lead_id?: string;
};

// Подключение к PostgreSQL (Railway / Supabase)
let pool: Pool | null = null;
if (process.env.DATABASE_URL) { pool = new Pool({ connectionString: process.env.DATABASE_URL }); }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: `Метод ${req.method} не разрешен` });
  }

  const { name, phone, messenger, pet, dimensions, comment, source } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ success: false, message: 'Пожалуйста, заполните обязательные поля (Имя и Телефон)' });
  }

  const clientSource = source || 'Landing';
  let leadId = `L-${Date.now().toString().slice(-6)}`;

  // 1. Сохранение в PostgreSQL (если настроен DATABASE_URL)
  if (pool) {
    try {
      const insertQuery = `
        INSERT INTO leads (source, client_name, contact_info, preferred_messenger, pet_type, dimensions, comment)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING lead_id;
      `;
      const dbRes = await pool.query(insertQuery, [
        clientSource, name, phone, messenger || 'telegram', pet || '', dimensions || '', comment || ''
      ]);
      leadId = dbRes.rows[0].lead_id;
    } catch (dbErr: any) { console.error('Ошибка записи лида в PostgreSQL:', dbErr.message); }
  }

  // 2. Отправка Push-уведомления мастеру в Telegram
  try {
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const masterChatId = process.env.MASTER_TELEGRAM_ID;

    if (!telegramToken || !masterChatId) {
      console.warn('Внимание: ключи Telegram не настроены в .env. Логируем лид локально.');
      console.log('НОВЫЙ ЛИД С ЛЕНДИНГА:', req.body);
      return res.status(200).json({ success: true, message: 'Заявка принята в обработку', lead_id: leadId });
    }

    // Добавляем прямую ссылку для быстрого перехода в чат с клиентом
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const replyUrl = messenger === 'whatsapp' 
      ? `https://wa.me/${cleanPhone}` 
      : `https://t.me/${phone.replace('@', '')}`;

    const textMessage = `
🔥 <b>НОВЫЙ ЛИД ИЗ ${clientSource.toUpperCase()} (2026)</b> 🔥

👤 <b>Клиент:</b> ${name}
📞 <b>Контакты:</b> <code>${phone}</code>
📲 <b>Способ связи:</b> ${messenger}

🦎 <b>Питомец:</b> ${pet || '<i>Не указан</i>'}
📐 <b>Размеры:</b> ${dimensions || '<i>Не указаны</i>'}
💬 <b>Комментарий / Пожелания:</b>
<i>${comment || 'Нет комментария'}</i>

🆔 Lead ID: <code>${leadId}</code>
    `.trim();

    const tgUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
    await axios.post(tgUrl, {
      chat_id: masterChatId,
      text: textMessage,
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: '💬 Открыть чат с клиентом', url: replyUrl }],
          [{ text: '🔄 Перевести в статус "В работе"', callback_data: `status_work_${leadId}` }]
        ]
      }
    });

    return res.status(200).json({ success: true, message: 'Заявка успешно отправлена мастеру', lead_id: leadId });
  } catch (error: any) {
    console.error('Ошибка в API contact.ts:', error.response?.data || error.message);
    return res.status(500).json({ success: false, message: 'Внутренняя ошибка сервера при отправке уведомления' });
  }
}
