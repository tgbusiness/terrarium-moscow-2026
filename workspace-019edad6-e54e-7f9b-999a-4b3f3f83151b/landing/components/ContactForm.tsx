import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    messenger: 'telegram',
    pet: '',
    dimensions: '',
    comment: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/contact';
      await axios.post(apiUrl, formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      setStatus('success');
    } catch (err: any) {
      console.error('Ошибка отправки формы:', err);
      setStatus('error');
      setErrorMessage(
        err.response?.data?.message || 'Не удалось отправить заявку. Пожалуйста, напишите мне напрямую в мессенджеры.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-slate-900/90 border-2 border-emerald-500 rounded-3xl p-8 text-center space-y-4 shadow-2xl">
        <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
        <h3 className="text-2xl font-extrabold text-white">Заявка успешно отправлена!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
          Спасибо, <span className="font-semibold text-emerald-400">{formData.name}</span>! Я лично получил ваши параметры и свяжусь с вами в течение 15–30 минут для точного расчета сметы.
        </p>
        <button 
          onClick={() => {
            setStatus('idle');
            setFormData({ name: '', phone: '', messenger: 'telegram', pet: '', dimensions: '', comment: '' });
          }} 
          className="mt-6 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl text-xs transition shadow"
        >
          Отправить еще один запрос
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative">
      <div className="mb-6">
        <h3 className="text-2xl font-extrabold text-white mb-1">Запрос на расчет стоимости</h3>
        <p className="text-xs text-emerald-400 font-medium">Напрямую мастеру • Без магазинных наценок</p>
      </div>
      
      {status === 'error' && (
        <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl flex items-center space-x-3 text-xs">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-2">Ваше имя *</label>
            <input 
              type="text" 
              name="name" 
              required 
              value={formData.name} 
              onChange={handleChange}
              placeholder="Как к вам обращаться?" 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-2">Телефон / Мессенджер *</label>
            <input 
              type="text" 
              name="phone" 
              required 
              value={formData.phone} 
              onChange={handleChange}
              placeholder="+7 (999) 000-00-00" 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-2">Удобный способ связи</label>
            <select 
              name="messenger" 
              value={formData.messenger} 
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
            >
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="phone">Звонок по телефону</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-2">Для какого питомца?</label>
            <input 
              type="text" 
              name="pet" 
              value={formData.pet} 
              onChange={handleChange}
              placeholder="Эублефар, агама, змея, хамелеон..." 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-2">Желаемые размеры (Д х Ш х В)</label>
          <input 
            type="text" 
            name="dimensions" 
            value={formData.dimensions} 
            onChange={handleChange}
            placeholder="Например: 80 х 40 х 40 см (или в нишу стеллажа)" 
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-2">Пожелания к заказу / Нужен ли 3D-фон?</label>
          <textarea 
            name="comment" 
            rows={3} 
            value={formData.comment} 
            onChange={handleChange}
            placeholder="Опишите, куда планируете ставить, нужен ли УФ-свет, декор, коряги или водопад..." 
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition resize-none"
          />
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-950 font-extrabold py-4 rounded-xl flex items-center justify-center space-x-2 text-sm transition shadow-lg shadow-emerald-500/20 disabled:opacity-50 transform hover:-translate-y-0.5"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Отправка заявки мастеру...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Получить точный расчет от мастера</span>
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-slate-500">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Конфиденциальность гарантируется.
        </p>
      </form>
    </div>
  );
}
