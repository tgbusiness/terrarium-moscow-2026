import React, { useState } from 'react';
import { Shield, Sparkles, CheckCircle, Clock, HeartHandshake, Phone, Send, MapPin, ChevronDown } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans select-none sm:select-auto">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🦎</span>
            <div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                CRAFT TERRARIUMS
              </span>
              <p className="text-xs text-slate-400 font-medium">Частный мастер террариумов • Москва</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition">О мастере</a>
            <a href="#benefits" className="hover:text-emerald-400 transition">Стандарты</a>
            <a href="#services" className="hover:text-emerald-400 transition">Цены и услуги</a>
            <a href="#portfolio" className="hover:text-emerald-400 transition">Портфолио</a>
            <a href="#faq" className="hover:text-emerald-400 transition">FAQ</a>
          </nav>
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition shadow-lg shadow-emerald-500/20 transform hover:-translate-y-0.5"
          >
            Заказать расчет
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Премиальный крафт • Москва и МО (2026)
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Авторские террариумы <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                ручной работы
              </span> на заказ
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              Создаю безопасные, эстетичные и биологически правильные дома для экзотических животных и растений по вашим индивидуальным размерам за 7 дней.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-extrabold px-8 py-4 rounded-2xl text-center shadow-xl shadow-emerald-500/25 transition transform hover:-translate-y-0.5 text-base"
              >
                Рассчитать стоимость за 5 минут
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-slate-700 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-2xl text-center transition text-base"
              >
                Посмотреть работы
              </a>
            </div>
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800 text-slate-400 font-medium">
              <div className="flex items-center space-x-2 text-xs md:text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Стекло М1 (еврокромка)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Гарантия 3 года</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Срок 5–10 дней</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
            <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-4 shadow-2xl">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 relative">
                {/* INLINE PLACEHOLDER IMAGE */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-slate-800 to-slate-900">
                  <span className="text-7xl mb-4">🌿🦎</span>
                  <span className="text-xl font-extrabold text-white mb-2">Биоактивный террариум «Под ключ»</span>
                  <span className="text-sm text-slate-400 mb-6 leading-relaxed">
                    С авторским 3D-фоном ручной работы, УФ-освещением и натуральным декором (мангр/мопани)
                  </span>
                  <span className="inline-block bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-semibold text-xs px-3.5 py-1.5 rounded-full shadow">
                    Пример работы из мастерской
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 text-center relative shadow-xl">
              <div className="w-28 h-28 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl shadow-inner">
                👨‍🔧
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">[Имя Мастера]</h3>
              <p className="text-emerald-400 text-xs font-bold mb-6 uppercase tracking-wider">
                Ваш персональный мастер террариумов
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-700/80 pt-6 text-left">
                <div>
                  <div className="text-2xl font-black text-white">7+</div>
                  <div className="text-xs text-slate-400 font-medium">лет опыта</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">350+</div>
                  <div className="text-xs text-slate-400 font-medium">готовых работ</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-xs text-slate-400 font-medium">ручной крафт</div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Почему частный специалист, <br />а не бездушный зоомагазин?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Я не ставлю производство на конвейер. В крупных студиях вы переплачиваете за бренд, аренду дорогих шоурумов и зарплаты менеджеров, а ваш заказ клеит стажер на скорую руку. 
            </p>
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              В моей мастерской каждый террариум проектируется и собирается одними руками — от ювелирного раскроя кристального стекла М1 до настройки проточной вентиляции и финальной полировки. Я общаюсь с вами напрямую, помогаю выбрать идеальные габариты под вашего питомца и присылаю фото и видеоотчеты прямо в процессе работы.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl text-emerald-400 font-bold text-sm">
                <HeartHandshake className="w-5 h-5 mr-2 shrink-0" />
                <span>Полная личная ответственность за каждый клеевой шов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Бескомпромиссные стандарты</h2>
            <p className="text-slate-400 text-base">Всё продумано до мелочей, чтобы питомец жил в полной безопасности, а террариум выглядел роскошно в интерьере.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/60 border border-slate-700/80 p-8 rounded-3xl hover:border-emerald-500/50 transition flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 text-xl">
                  💎
                </div>
                <h4 className="text-xl font-extrabold text-white mb-3">Безопасная еврокромка</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Все грани стекла проходят обязательную станочную полировку. Никаких микросколов и острых углов — вы и ваш питомец никогда не порежетесь.
                </p>
              </div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/80 p-8 rounded-3xl hover:border-emerald-500/50 transition flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 text-xl">
                  🛡
                </div>
                <h4 className="text-xl font-extrabold text-white mb-3">Идеальные швы</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Использую только специализированный нетоксичный европейский герметик. Ювелирная точность нанесения: никаких пузырей, наплывов и разводов.
                </p>
              </div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/80 p-8 rounded-3xl hover:border-emerald-500/50 transition flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 text-xl">
                  💨
                </div>
                <h4 className="text-xl font-extrabold text-white mb-3">Проточная вентиляция</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Индивидуальный расчет площади вентиляции из жесткой перфорированной нержавеющей сетки. Исключает застой воздуха, плесень и респираторные болезни.
                </p>
              </div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/80 p-8 rounded-3xl hover:border-emerald-500/50 transition flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 text-xl">
                  🚪
                </div>
                <h4 className="text-xl font-extrabold text-white mb-3">Умные двери и электрика</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Надежные раздвижные дверцы на полозьях или распашные на мощных магнитах. Предусмотрены аккуратно скрытые технологические кабель-каналы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Цены и популярные пакеты</h2>
            <p className="text-slate-400 text-base">Подберем идеальное решение под ваш бюджет и уровень подготовки.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Package 1 */}
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col justify-between relative shadow-xl">
              <div>
                <h4 className="text-2xl font-extrabold text-white mb-2">Индивидуальный Кастом</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Изготовление стеклянного объема строго по вашим размерам или чертежам.</p>
                <div className="text-3xl font-extrabold text-white mb-6">от 4 000 <span className="text-base font-medium text-slate-400">руб.</span></div>
                <ul className="space-y-3.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Кристальное стекло М1 (4–6 мм)</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Полировка еврокромки на станке</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Правильная проточная вентиляция</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Дверцы на выбор (раздвижные/магниты)</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Встройка в мебель или ниши</li>
                </ul>
              </div>
              <a href="#contact" className="w-full block text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 rounded-xl transition text-sm shadow">
                Заказать по своим размерам
              </a>
            </div>

            {/* Package 2 (Best Seller) */}
            <div className="bg-gradient-to-b from-emerald-900/40 via-slate-800 to-slate-800 border-2 border-emerald-500 rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-emerald-500/15 transform md:-translate-y-3">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-black text-xs uppercase px-4 py-1.5 rounded-full tracking-wider shadow-lg">
                Хит продаж • Для новичков
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-white mb-2">Комплекс «Под ключ»</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Готовая экосистема «Заселяй и живи». Всё установлено, проверено и подключено.</p>
                <div className="text-3xl font-extrabold text-white mb-6">от 12 000 <span className="text-base font-medium text-slate-400">руб.</span></div>
                <ul className="space-y-3.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Всё из пакета «Кастом»</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Смонтированное УФ-освещение</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Система обогрева + терморегулятор</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Авторский рельефный 3D-фон (скалы/кора)</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Полный внутренний декор (коряги, грунт)</li>
                  <li className="flex items-center font-bold text-emerald-300"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Подбор оборудования под вашего питомца</li>
                </ul>
              </div>
              <a href="#contact" className="w-full block text-center bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black py-4 rounded-xl transition text-sm shadow-lg shadow-emerald-500/20">
                Заказать комплекс под ключ
              </a>
            </div>

            {/* Package 3 */}
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col justify-between relative shadow-xl">
              <div>
                <h4 className="text-2xl font-extrabold text-white mb-2">Флорариумы и Дизайн</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Сложные палюдариумы с водопадами и живыми тропическими растениями.</p>
                <div className="text-3xl font-extrabold text-white mb-6">от 18 000 <span className="text-base font-medium text-slate-400">руб.</span></div>
                <ul className="space-y-3.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Герметичное дно под водоем</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Встроенный тихий водопад / туман</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Озеленение живыми растениями и мхами</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Специализированный биоактивный субстрат</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-3 shrink-0" /> Интеграция фитосвета для растений</li>
                </ul>
              </div>
              <a href="#contact" className="w-full block text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 rounded-xl transition text-sm shadow">
                Заказать палюдариум
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Примеры готовых работ</h2>
            <p className="text-slate-400 text-base">Листайте архив последних реализованных заказов из моей мастерской.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] bg-slate-900 flex flex-col items-center justify-center p-6 text-center border-b border-slate-700 relative">
                  <span className="text-6xl mb-2">🦎🏜</span>
                  <span className="text-white font-extrabold text-lg">Пустынный комплекс 80х40х40</span>
                  <span className="text-xs font-semibold bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full mt-2">Для бородатой агамы</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    Стекло М1 5мм, авторский 3D-фон «Скала», встроенный светильник с УФ-лампой 10.0 и термоковрик.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 flex justify-between items-center text-xs font-bold border-t border-slate-700/60 pt-4">
                <span className="text-slate-400 font-medium">Срок: 7 дней</span>
                <span className="text-emerald-400 text-base font-extrabold">14 500 руб.</span>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] bg-slate-900 flex flex-col items-center justify-center p-6 text-center border-b border-slate-700 relative">
                  <span className="text-6xl mb-2">🌴🐍</span>
                  <span className="text-white font-extrabold text-lg">Тропическая вертикаль 45х45х60</span>
                  <span className="text-xs font-semibold bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full mt-2">Для бананоеда / квакш</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    Стекло 4мм, фон «Древесная кора» с интегрированными кашпо под живые сциндапсусы, коряги мопани.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 flex justify-between items-center text-xs font-bold border-t border-slate-700/60 pt-4">
                <span className="text-slate-400 font-medium">Срок: 8 дней</span>
                <span className="text-emerald-400 text-base font-extrabold">16 000 руб.</span>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] bg-slate-900 flex flex-col items-center justify-center p-6 text-center border-b border-slate-700 relative">
                  <span className="text-6xl mb-2">📐💎</span>
                  <span className="text-white font-extrabold text-lg">Кастомный объем 100х40х40</span>
                  <span className="text-xs font-semibold bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full mt-2">В нишу стеллажа клиента</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    Стекло 6мм, усиленное дно, распашные дверцы на магнитах, сдвинутая сетка вентиляции под размер ниши.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 flex justify-between items-center text-xs font-bold border-t border-slate-700/60 pt-4">
                <span className="text-slate-400 font-medium">Срок: 5 дней</span>
                <span className="text-emerald-400 text-base font-extrabold">9 500 руб.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Как мы работаем</h2>
            <p className="text-slate-400 text-base">Прозрачный, понятный и комфортный процесс от первой заявки до заселения питомца.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl relative shadow-lg">
              <div className="w-12 h-12 bg-emerald-500 text-slate-950 font-black rounded-2xl flex items-center justify-center mb-6 text-lg shadow">
                1
              </div>
              <h5 className="font-extrabold text-white text-lg mb-3">Заявка и расчет</h5>
              <p className="text-slate-300 text-xs leading-relaxed">
                Вы оставляете запрос или пишете мне в Telegram. Обсуждаем вид питомца, габариты и пожелания. Я составляю точную прозрачную смету.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl relative shadow-lg">
              <div className="w-12 h-12 bg-emerald-500 text-slate-950 font-black rounded-2xl flex items-center justify-center mb-6 text-lg shadow">
                2
              </div>
              <h5 className="font-extrabold text-white text-lg mb-3">Предоплата 50%</h5>
              <p className="text-slate-300 text-xs leading-relaxed">
                Вы вносите предоплату на закупку стекла и герметика. Я сразу фиксирую ваш заказ в своем производственном графике.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl relative shadow-lg">
              <div className="w-12 h-12 bg-emerald-500 text-slate-950 font-black rounded-2xl flex items-center justify-center mb-6 text-lg shadow">
                3
              </div>
              <h5 className="font-extrabold text-white text-lg mb-3">Фото/видео отчет</h5>
              <p className="text-slate-300 text-xs leading-relaxed">
                В процессе работы я присылаю вам промежуточные кадры: раскрой, склейка, лепка 3D-фона. Вы видите, как рождается ваш проект!
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl relative shadow-lg">
              <div className="w-12 h-12 bg-emerald-500 text-slate-950 font-black rounded-2xl flex items-center justify-center mb-6 text-lg shadow">
                4
              </div>
              <h5 className="font-extrabold text-white text-lg mb-3">Приемка и выдача</h5>
              <p className="text-slate-300 text-xs leading-relaxed">
                Через 5–10 дней террариум готов. Осматриваете по подробному видеообзору или лично. Оформляем самовывоз или автодоставку.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ответы на частые вопросы</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Где находится мастерская и есть ли доставка?",
                a: "Мастерская находится в Москве (м. Преображенская площадь). Вы можете приехать лично и забрать готовый террариум. Также у меня есть собственная бережная автодоставка по Москве и Подмосковью «до двери» — я гарантированно довезу всё в полной целости."
              },
              {
                q: "Каковы точные сроки изготовления?",
                a: "Простые стеклянные объемы по вашим размерам изготавливаются за 5–7 календарных дней. Сложные комплексы «под ключ» с лепкой авторского 3D-фона и подключением электрики занимают от 7 до 10 дней."
              },
              {
                q: "Предоставляете ли вы гарантию на работу?",
                a: "Да! Я предоставляю полную личную гарантию 3 года на прочность и герметичность всех клеевых швов. Использую только профессиональный специализированный аквариумный/террариумный силикон."
              },
              {
                q: "Какое стекло вы используете?",
                a: "Я использую только первоклассное кристально чистое стекло марки М1 (без бутылочных искажений). Толщина подбирается индивидуально под габариты (обычно от 4 до 6 мм). Все кромки проходят обязательную станочную шлифовку/полировку."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-md">
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full px-8 py-6 text-left font-extrabold text-lg text-white flex justify-between items-center hover:text-emerald-400 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transform transition-transform ${openFaq === idx ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-700/60 pt-4 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 relative bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Готовы обсудить ваш будущий террариум?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Заполните короткую заявку или напишите мне напрямую в мессенджеры. Я свяжусь с вами в течение 15–30 минут, подробно проконсультирую и рассчитаю прозрачную смету.
            </p>
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <div className="flex items-center space-x-3 text-slate-300 font-medium">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm">Москва, ул. Примерная, д. 10 (Мастерская)</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 font-medium">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm">+7 (999) XXX-XX-XX (WhatsApp / Telegram)</span>
              </div>
            </div>
            <div className="pt-6 flex space-x-4">
              <a 
                href="https://t.me/YourTelegramUsername" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-4 rounded-2xl flex items-center space-x-2 text-sm transition shadow-xl shadow-blue-500/20 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Написать напрямую в Telegram</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 text-center text-xs text-slate-500 font-medium">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl">🦎</span>
            <span className="font-extrabold text-slate-400 tracking-wider text-sm">CRAFT TERRARIUMS</span>
          </div>
          <p>© 2026 Частный мастер террариумов в Москве. Все права защищены. `[VERIFY-2026]`</p>
          <div className="flex space-x-6 text-slate-400 font-semibold">
            <a href="https://avito.ru" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">Профиль Авито</a>
            <a href="https://profi.ru" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">Профиль Профи.ру</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
