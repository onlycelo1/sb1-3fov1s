import React from 'react';
import { motion } from 'framer-motion';

export const CallToAction = () => {
  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Continuar tentando sozinha?
          </h2>
          <p className="text-gray-400 text-lg">
            Perca tempo e dinheiro tentando descobrir sozinha...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-4">
            Ou usar nosso método APROVADO?
          </h2>
          <p className="text-gray-400 text-lg">
            E comece a faturar como as top creators...
          </p>
        </motion.div>

        <div className="md:col-span-2 text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:scale-105 transition-transform"
          >
            QUERO ENTRAR PRO TIME
          </motion.button>
        </div>
      </div>
    </section>
  );
};