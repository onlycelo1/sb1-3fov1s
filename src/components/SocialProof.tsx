import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    title: "De atendente a 50k/mês",
    name: "Amanda S.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format"
  },
  {
    title: "De influencer a milionária",
    name: "Carolina M.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format"
  },
  {
    title: "De OF básico a 6 dígitos",
    name: "Beatriz L.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format"
  }
];

export const SocialProof = () => {
  return (
    <section className="bg-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-2xl p-6 backdrop-blur-lg bg-opacity-50"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{testimonial.title}</h3>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-gray-300">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};