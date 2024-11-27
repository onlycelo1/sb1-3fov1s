import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    instagram: '',
    whatsapp: '',
    revenue: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="bg-gray-900 py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-gray-800 rounded-2xl p-8 backdrop-blur-lg"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Comece Agora
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Instagram</label>
            <input
              type="text"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="@seuperfil"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">WhatsApp</label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Fatura quanto atualmente?</label>
            <select
              value={formData.revenue}
              onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
              className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Selecione uma opção</option>
              <option value="0-1000">Menos de R$ 1.000</option>
              <option value="1000-5000">R$ 1.000 - R$ 5.000</option>
              <option value="5000-10000">R$ 5.000 - R$ 10.000</option>
              <option value="10000+">Mais de R$ 10.000</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform"
          >
            COMEÇAR AGORA
          </button>
        </form>
      </motion.div>
    </section>
  );
};