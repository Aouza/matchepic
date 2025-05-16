'use client';

import React from 'react';

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50"></div>
      
      {/* Ícones de apps flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-[10%] w-12 h-12 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
          <span className="text-2xl">💘</span>
        </div>
        <div className="absolute top-20 right-[15%] w-12 h-12 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
          <span className="text-2xl">💝</span>
        </div>
        <div className="absolute bottom-20 left-[20%] w-12 h-12 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
          <span className="text-2xl">📸</span>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Destaque-se nos apps e nas redes com fotos que realmente impressionam
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Chega de selfies ruins e perfis sem graça. Invista na sua imagem com fotos realistas e profissionais, sem gastar uma fortuna.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
            Quero minhas fotos épicas agora
            <span className="text-xl">→</span>
          </button>
          <a
            href="#resultados" 
            className="px-8 py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
          >
            Ver exemplos de resultados
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            +500 clientes satisfeitos
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            Garantia de satisfação
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 