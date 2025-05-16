'use client';

import React from 'react';

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <button className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-200 backdrop-blur-sm text-sm">
    {children}
  </button>
);

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
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-[#0B0C15] to-[#1A1B26]">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[45%] animate-twinkle"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[15%] animate-twinkle delay-100"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[15%] left-[75%] animate-twinkle delay-200"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[45%] left-[85%] animate-twinkle delay-300"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[65%] left-[25%] animate-twinkle delay-400"></div>
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 w-full py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <span className="text-white font-medium">MatchEpic</span>
          </div>
          <div className="flex items-center gap-3">
            <NavItem>Preços</NavItem>
            <NavItem>Como Funciona</NavItem>
            <NavItem>Exemplos</NavItem>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-200">
              Começar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-sm text-blue-200 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span>Powered by AI</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transforme suas selfies em fotos épicas
                <span className="inline-block ml-2">✧</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl">
                Fotos realistas e impactantes geradas por IA para destacar sua melhor versão em apps de relacionamento e redes sociais
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-200 transform hover:scale-105">
                  Começar Agora
                </button>
                <button className="px-8 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-200 backdrop-blur-sm">
                  Ver Exemplos
                </button>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="relative h-[600px] flex items-center justify-end">
              <FloatingCard
                className="absolute right-12 -top-40 w-56 from-emerald-500 to-blue-500" 
                delay="0s"
              />
              <FloatingCard
                className="absolute right-10 top-24 w-56 from-purple-500 to-pink-500" 
                delay="-2s"
              />
              <FloatingCard
                className="absolute right-20 top-[-100px] w-56 from-blue-500 to-indigo-500" 
                delay="-4s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 