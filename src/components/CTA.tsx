'use client';

import React from 'react';

const CTA = () => {
  return (
    <div className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pronto para transformar suas fotos?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comece agora e descubra como fotos incríveis podem transformar sua presença digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Começar Agora
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA; 