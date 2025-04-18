'use client';

import React from 'react';

const FloatingCard = ({ className = '', delay = '0' }: { className?: string, delay?: string }) => (
  <div 
    className={`relative rounded-2xl bg-gradient-to-br p-[2px] ${className}`}
    style={{ animation: `float 6s ease-in-out infinite ${delay}` }}
  >
    <div className="relative rounded-2xl bg-gray-900/90 backdrop-blur-xl p-4 h-full">
      <div className="absolute top-3 right-3">
        <svg className="w-4 h-4 text-white/50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-2xl opacity-50"></div>
      </div>
      <div className="mt-3">
        <div className="h-2 w-16 bg-white/10 rounded"></div>
        <div className="h-2 w-12 bg-white/5 rounded mt-2"></div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0B14]">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <div className="flex h-6 items-center space-x-2 rounded-full bg-blue-900/30 px-3 text-sm text-blue-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span>Powered by AI</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Transforme suas selfies em fotos épicas
              <span className="inline-block ml-2">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              Fotos realistas e impactantes geradas por IA para destacar sua melhor versão em apps de relacionamento e redes sociais
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105">
                <span>Começar Agora</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="inline-flex items-center px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:bg-white/5 transition-all duration-200">
                Ver Exemplos
              </button>
            </div>
          </div>

          {/* Floating cards */}
          <div className="relative h-[600px]">
            <FloatingCard 
              className="absolute top-0 right-0 w-64 from-emerald-500 to-blue-500" 
              delay="0s"
            />
            <FloatingCard 
              className="absolute top-1/4 left-0 w-56 from-purple-500 to-pink-500" 
              delay="-2s"
            />
            <FloatingCard 
              className="absolute bottom-0 right-1/4 w-60 from-blue-500 to-indigo-500" 
              delay="-4s"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 