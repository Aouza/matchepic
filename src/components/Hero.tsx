"use client";

import React, { useState } from "react";

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <button className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-200 backdrop-blur-sm text-sm">
    {children}
  </button>
);

const FloatingCard = ({
  className = "",
  delay = "0",
  imageSrc,
}: {
  className?: string;
  delay?: string;
  imageSrc?: string;
}) => (
  <div
    className={`relative rounded-2xl bg-gradient-to-br p-[2px] ${className}`}
    style={{ animation: `float 6s ease-in-out infinite ${delay}` }}
  >
    <div className="relative rounded-2xl bg-gray-900/90 backdrop-blur-xl p-4 h-full">
      <div className="absolute top-3 right-3">
        <svg
          className="w-4 h-4 text-white/50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Foto Hero"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-2xl opacity-50"></div>
        )}
      </div>
      <div className="mt-3">
        <div className="h-2 w-16 bg-white/10 rounded"></div>
        <div className="h-2 w-12 bg-white/5 rounded mt-2"></div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 w-full py-4 sm:py-6 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo + Hamburger (mobile) */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <span className="text-white font-medium text-lg">photai.gen</span>
            <button
              className="sm:hidden flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none ml-2"
              aria-label="Abrir menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 flex-wrap justify-center ml-auto">
            <NavItem>Preços</NavItem>
            <NavItem>Como Funciona</NavItem>
            <NavItem>Exemplos</NavItem>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-200 text-sm sm:text-base">
              Começar
            </button>
          </div>
        </div>
        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 flex">
            <div className="w-64 bg-[#181A23] h-full shadow-2xl flex flex-col p-6 animate-slide-in">
              <button
                className="self-end mb-8 p-2 rounded-full text-white hover:bg-white/10"
                aria-label="Fechar menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <nav className="flex flex-col gap-4 mt-4">
                <a
                  href="#precos"
                  className="text-white text-lg font-medium py-2 px-2 rounded hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Preços
                </a>
                <a
                  href="#como-funciona"
                  className="text-white text-lg font-medium py-2 px-2 rounded hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Como Funciona
                </a>
                <a
                  href="#exemplos"
                  className="text-white text-lg font-medium py-2 px-2 rounded hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Exemplos
                </a>
                <a
                  href="#"
                  className="mt-6 px-4 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-center shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Começar
                </a>
              </nav>
            </div>
            {/* Overlay para fechar ao clicar fora */}
            <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm text-blue-200 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span>Powered by AI</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Transforme suas selfies em fotos épicas
                <span className="inline-block ml-2">✧</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Fotos realistas e impactantes geradas por IA para destacar sua
                melhor versão em apps de relacionamento e redes sociais
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 justify-center">
                  Melhorar Meu Perfil Agora
                  <span className="text-xl">→</span>
                </button>
                <a
                  href="#como-funciona"
                  className="px-8 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                >
                  Como Funciona
                </a>
              </div>
              {/* Social Proof */}
              <div className="mt-8 sm:mt-12 space-y-6">
                {/* Avatares e Contagem */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
                  <div className="flex -space-x-2 mb-2 sm:mb-0">
                    <div className="w-8 h-8 rounded-full border-2 border-[#0B0C15] overflow-hidden">
                      <img
                        src="/hero_images/transferir.jpeg"
                        alt="Cliente"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#0B0C15] overflow-hidden">
                      <img
                        src="/hero_images/transferir.jpeg"
                        alt="Cliente"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#0B0C15] overflow-hidden">
                      <img
                        src="/hero_images/transferir.jpeg"
                        alt="Cliente"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#0B0C15] overflow-hidden">
                      <img
                        src="/hero_images/transferir.jpeg"
                        alt="Cliente"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 ml-0 sm:ml-2">
                    +847 clientes já transformaram seus perfis com photai.gen
                  </span>
                </div>
                {/* Rating e Reviews */}
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300">
                    4.8 de 523 avaliações
                  </span>
                </div>
                {/* Mini CTA */}
                <div className="flex items-center justify-center lg:justify-start">
                  <a
                    href="#resultados"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-purple-200 hover:text-white transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    Veja exemplos reais de resultados
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Floating cards */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-end mt-12 lg:mt-0">
              <FloatingCard
                className="absolute right-4 sm:right-12 -top-20 sm:-top-40 w-40 sm:w-56 from-emerald-500 to-blue-500"
                delay="0s"
                imageSrc="/hero_images/lucv.jpg"
              />
              <FloatingCard
                className="absolute right-2 sm:right-10 top-16 sm:top-24 w-40 sm:w-56 from-purple-500 to-pink-500"
                delay="-2s"
                imageSrc="/hero_images/lucv.jpg"
              />
              <FloatingCard
                className="absolute right-8 sm:right-20 top-[-60px] sm:top-[-100px] w-40 sm:w-56 from-blue-500 to-indigo-500"
                delay="-4s"
                imageSrc="/hero_images/lucv.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
