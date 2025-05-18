"use client";

import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0B14] text-white">
      <Hero />

      {/* Seção mesclada: Valor do perfil + Primeiras impressões */}
      <section className="relative py-24 overflow-hidden">
        {/* Background com estrelas */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[35%] animate-twinkle"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[50%] left-[15%] animate-twinkle delay-100"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[85%] animate-twinkle delay-200"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[65%] animate-twinkle delay-300"></div>
        </div>
        {/* Gradientes de fundo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto à esquerda */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Sua foto de perfil vale mais do que você imagina
                </span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-white/90">
                Seu perfil está passando despercebido?
              </h3>
              <p className="text-base sm:text-lg text-purple-100/90 mb-3 max-w-lg">
                Até 80% da sua percepção em apps vem da sua foto de perfil. Em
                apps de relacionamento, sua foto é sua primeira impressão. E ela
                precisa ser impactante.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                    <span className="text-3xl">📸</span>
                  </div>
                  <p className="text-lg text-gray-300">
                    Perfis com boas fotos recebem até 3x mais interações.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <p className="text-lg text-gray-300">
                    Imagens espontâneas e bem iluminadas criam conexões mais
                    rápidas.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                    <span className="text-3xl">💚</span>
                  </div>
                  <p className="text-lg text-gray-300">
                    Fotos naturais e espontâneas geram mais conexão e interesse.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
                    <span className="text-3xl">💖</span>
                  </div>
                  <p className="text-lg text-gray-300">
                    Transmita credibilidade, segurança e atração instantânea.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="#resultados"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-200 shadow-lg text-base group"
                >
                  Veja exemplos reais de resultados
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Mockup à direita */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl opacity-40"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8">
                <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <img
                    src="/hero_images/lucv.jpg"
                    alt="Mockup do App"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badges flutuantes */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg">
                  +3x Matches
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg">
                  72h de Entrega
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <HowItWorks />

      <Pricing />
      <Results />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
