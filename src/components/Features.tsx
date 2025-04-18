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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o MatchEpic?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma solução prática, acessível e eficaz para transformar sua presença digital
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 