import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Users, CreditCard } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Growth acelerado (14 dias)",
    description: "Resultados comprovados em tempo recorde"
  },
  {
    icon: Users,
    title: "Gestão de conteúdo 100% feita",
    description: "Equipe especializada cuidando de tudo"
  },
  {
    icon: Users,
    title: "Equipe especializada 24/7",
    description: "Suporte completo a qualquer momento"
  },
  {
    icon: Zap,
    title: "Pagamentos relâmpago ⚡",
    description: "Receba seus ganhos rapidamente"
  }
];

export const Strategy = () => {
  return (
    <section className="relative bg-gray-900 py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-purple-500/10 backdrop-blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Por que elas estão TODAS aqui?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-gray-800/70 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};