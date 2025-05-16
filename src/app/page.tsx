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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-300 leading-relaxed">
            Sabia que 80% da primeira impressão em apps como Tinder, Bumble e até no LinkedIn vem da sua foto de perfil?
            <br /><br />
            O MatchEpic foi criado para transformar a forma como você é percebido, destacando sua melhor versão com fotos naturais, realistas e profissionais.
          </p>
        </div>
      </div>

      <Features />
      <HowItWorks />
      
      {/* Bloco de Texto Estratégico 2 */}
      <div className="relative py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-300 leading-relaxed">
            A maioria das pessoas subestima o impacto de uma boa foto.
            <br /><br />
            A verdade é simples: perfis com fotos espontâneas, bem iluminadas e em contextos reais recebem até 3x mais interações.
            <br /><br />
            O problema? Nem todo mundo tem tempo (ou dinheiro) pra ensaios.
            <br /><br />
            É aqui que o MatchEpic entra.
          </p>
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