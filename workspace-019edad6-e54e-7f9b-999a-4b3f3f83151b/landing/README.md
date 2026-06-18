# Одностраничный Лендинг для Частного Мастера Террариумов (Next.js)

Этот проект представляет собой современный, быстрый и конверсионный лендинг для частного специалиста по изготовлению террариумов в Москве (2026).

## 🛠 Технологический стек
- **Фреймворк**: [Next.js](https://nextjs.org/) (Page Router или App Router).
- **Стили**: [Tailwind CSS](https://tailwindcss.com/).
- **Иконки**: [Lucide React](https://lucide.dev/).
- **API Роуты**: Встроенные API Next.js (`/api/contact`) для обработки заявок.

## 🚀 Как запустить локально (Replit / Localhood)

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Создайте файл `.env.local` и добавьте необходимые переменные:
   ```env
   TELEGRAM_BOT_TOKEN="ваш_токен"
   MASTER_TELEGRAM_ID="ваш_id"
   ```

3. Запустите сервер разработки:
   ```bash
   npm run dev
   ```
4. Откройте `http://localhost:3000` в браузере.

## 📦 Как задеплоить на Vercel

1. Запушьте этот код в ваш GitHub-репозиторий.
2. Зайдите на [Vercel](https://vercel.com/) и нажмите **Add New -> Project**.
3. Импортируйте ваш GitHub-репозиторий.
4. В разделе **Environment Variables** добавьте переменные из файла `.env.example`:
   - `TELEGRAM_BOT_TOKEN`
   - `MASTER_TELEGRAM_ID`
5. Нажмите **Deploy**. Ваш сайт будет готов через 1 минуту!
