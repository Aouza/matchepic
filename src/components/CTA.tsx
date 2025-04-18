'use client';

import React from 'react';

const CTA = () => {
  return (
    <section className="relative bg-[#0A0B14]">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para transformar suas fotos?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comece agora e descubra como fotos incríveis podem transformar sua presença digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-all duration-200 transform hover:scale-105">
              Começar Agora
            </button>
            <button className="px-8 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-200 backdrop-blur-sm">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 