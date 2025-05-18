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

      {/* Primeiras impressões são visuais. E instantâneas. - Layout Split com Grid de Cards */}
      <section className="relative py-24 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          {/* Texto à esquerda */}
          <div className="flex-1 flex flex-col justify-center items-start mb-12 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Seu perfil está passando despercebido?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-purple-100/90 mb-3 max-w-lg">
              Até 80% da sua percepção em apps vem da sua foto de perfil.
            </p>
            <p className="text-sm text-white/80 mb-6 max-w-md">
              Com{" "}
              <span className="font-semibold text-purple-200">photai.gen</span>,
              selfies comuns viram fotos autênticas e irresistíveis.
            </p>
            <a
              href="#resultados"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-200 shadow-lg text-sm group"
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
          {/* Grid de Cards à direita */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-lg">
            {/* Card 1 */}
            <div className="bg-[#10111A] rounded-2xl border border-white/10 p-5 flex flex-col items-start gap-2 group hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-500/10 mb-1 group-hover:bg-purple-500/20 transition-colors">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-white group-hover:text-purple-200 transition-colors">
                Mais Matches
              </h4>
              <p className="text-xs text-white/70">
                Boas fotos geram até 3x mais interações.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#10111A] rounded-2xl border border-white/10 p-5 flex flex-col items-start gap-2 group hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500/10 mb-1 group-hover:bg-blue-500/20 transition-colors">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 10v4m8-8h-4m-4 0H4"
                  />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-white group-hover:text-blue-200 transition-colors">
                Confiança
              </h4>
              <p className="text-xs text-white/70">
                Transmita credibilidade e segurança.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#10111A] rounded-2xl border border-white/10 p-5 flex flex-col items-start gap-2 group hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-500/10 mb-1 group-hover:bg-emerald-500/20 transition-colors">
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="text-base font-semibold text-white group-hover:text-emerald-200 transition-colors">
                Atração
              </h4>
              <p className="text-xs text-white/70">
                Fotos de qualidade aumentam o interesse.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#10111A] rounded-2xl border border-white/10 p-6 flex flex-col items-start gap-3 group hover:border-pink-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500/10 mb-2 group-hover:bg-pink-500/20 transition-colors">
                <svg
                  className="w-6 h-6 text-pink-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 20l9-5-9-5-9 5 9 5zm0 0v-8"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white group-hover:text-pink-200 transition-colors">
                Naturalidade
              </h4>
              <p className="text-sm text-white/70">
                Fotos naturais e espontâneas geram mais conexão e interesse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <HowItWorks />

      {/* Bloco de Texto Estratégico 2 */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">
            Sua foto de perfil <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              vale mais do que você imagina
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <span className="text-3xl">📸</span>
                </div>
                <p className="text-lg text-gray-300">
                  Perfis com boas fotos recebem até 3x mais interações.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <p className="text-lg text-gray-300">
                  Imagens espontâneas e bem iluminadas criam conexões mais
                  rápidas.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                  <span className="text-3xl">💸</span>
                </div>
                <p className="text-lg text-gray-300">
                  Mas ensaios profissionais custam caro e tomam tempo.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-white">
              O photai.gen resolve isso pra você: fotos profissionais, realistas
              e naturais, direto do seu sofá.
            </p>
          </div>
        </div>
      </div>

      <Pricing />
      <Results />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
