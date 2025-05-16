'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Results from '@/components/Results';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0B14] text-white">
      <Hero />
      
      {/* Bloco de Texto Estratégico 1 */}
      <div className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Primeiras impressões são visuais. E instantâneas.
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Até 80% da sua percepção em apps de relacionamento e redes sociais vem da sua foto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card LinkedIn */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-4xl">🧑‍💼</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-lg text-gray-300">
                  Transmita profissionalismo e confiança com fotos que destacam sua melhor versão.
                </p>
              </div>
            </div>

            {/* Card Tinder & Bumble */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
                  <span className="text-4xl">❤️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Tinder & Bumble</h3>
                <p className="text-lg text-gray-300">
                  Aumente seus matches com fotos naturais que mostram sua personalidade.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-white">
              Com MatchEpic, você cria uma presença que gera impacto onde importa.
            </p>
          </div>
        </div>
      </div>

      <Features />
      <HowItWorks />
      
      {/* Bloco de Texto Estratégico 2 */}
      <div className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Sua foto de perfil vale mais do que você imagina.
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
                  Imagens espontâneas e bem iluminadas criam conexões mais rápidas.
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
              O MatchEpic resolve isso pra você: fotos profissionais, realistas e naturais, direto do seu sofá.
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