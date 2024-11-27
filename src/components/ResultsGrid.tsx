import React from 'react';
import { motion } from 'framer-motion';

const results = [
  {
    name: "Martina",
    beforeUrl: "https://i.imgur.com/example1.jpg", // Replace with actual podcast image
    afterUrl: "https://i.imgur.com/example2.jpg", // Replace with actual result image
    amount: "51.252,46"
  },
  {
    name: "Ester Muniz",
    beforeUrl: "https://i.imgur.com/example3.jpg", // Replace with before image
    afterUrl: "https://i.imgur.com/example4.jpg", // Replace with actual Privacy shirt image
    amount: "970.760,12"
  },
  {
    name: "Brida Nunes",
    beforeUrl: "https://i.imgur.com/example5.jpg", // Replace with before image
    afterUrl: "https://i.imgur.com/example6.jpg", // Replace with pool image
    amount: "2.774.674,74"
  }
];

export const ResultsGrid = () => {
  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          DE ONDE ELAS VIERAM?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl text-gray-300 text-center mb-12"
        >
          Transformação completa em menos de 12 meses
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group space-y-4"
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img 
                  src={result.afterUrl} 
                  alt={`${result.name} depois`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{result.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 font-bold">R$ {result.amount}</span>
                    <span className="text-gray-400">/mês</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-gray-300 text-sm">
                  "Antes de conhecer o método, eu não sabia como monetizar minha imagem. 
                  Hoje sou referência no mercado."
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
            QUERO RESULTADOS ASSIM
          </button>
        </motion.div>
      </div>
    </section>
  );
};