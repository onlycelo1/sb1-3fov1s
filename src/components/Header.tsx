import React from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      >
        <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c4f6d2c6&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl"
        >
          Existem 2 tipos de criadoras: As que usam nosso método, e as que veem elas crescerem.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-12"
        >
          Toda top que você segue está aqui. As próximas tops também estarão. Qual lado você quer estar?
        </motion.p>
      </div>
    </header>
  );
};