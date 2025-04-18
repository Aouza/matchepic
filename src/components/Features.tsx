'use client';

import React from 'react';

const features = [
  {
    title: 'Fotos 100% Realistas',
    description: 'Imagens naturais e autênticas que parecem ter sido tiradas por amigos em momentos especiais.',
    icon: '🎯'
  },
  {
    title: 'Personalização Total',
    description: 'Modelo de IA personalizado para cada cliente, garantindo fidelidade ao seu rosto.',
    icon: '✨'
  },
  {
    title: 'Diversos Cenários',
    description: 'Barzinhos, festas, viagens, trilhas e muito mais - sempre com iluminação natural.',
    icon: '🌆'
  },
  {
    title: 'Pronto para Qualquer App',
    description: 'Perfeito para Tinder, Bumble, Hinge, Instagram, LinkedIn e outras redes sociais.',
    icon: '📱'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-[#0A0B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Por que escolher o MatchEpic?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma solução prática, acessível e eficaz para transformar sua presença digital
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 