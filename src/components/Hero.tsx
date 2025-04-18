'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente e efeito de mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-black">
        <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Círculos decorativos */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              ✨ Powered by AI
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
            Transforme suas selfies<br />em fotos épicas
          </h1>
          <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Fotos realistas e impactantes geradas por IA para destacar sua melhor versão em apps de relacionamento e redes sociais
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-purple-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
              <span>Começar Agora</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-full sm:w-auto bg-purple-700/20 backdrop-blur-sm border-2 border-purple-500/50 hover:border-purple-400 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Ver Exemplos
            </button>
          </div>

          {/* Métricas/Social Proof */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-300">Usuários Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Satisfação</div>
            </div>
            <div className="text-center sm:col-span-1 col-span-2">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-gray-300">Entrega</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 