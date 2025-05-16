'use client';

import React from 'react';

const features = [
  {
    title: 'Fotos 100% Realistas',
    description: 'Imagens naturais e autênticas que parecem ter sido tiradas por amigos em momentos especiais.',
    icon: '🎯',
    gradient: 'from-emerald-500 to-blue-500'
  },
  {
    title: 'Personalização Total',
    description: 'Modelo de IA personalizado para cada cliente, garantindo fidelidade ao seu rosto.',
    icon: '✨',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Diversos Cenários',
    description: 'Barzinhos, festas, viagens, trilhas e muito mais - sempre com iluminação natural.',
    icon: '🌆',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Use em Qualquer App',
    description: 'Perfeito para Tinder, Bumble, Hinge, Instagram, LinkedIn e outras redes sociais.',
    icon: '📱',
    gradient: 'from-orange-500 to-red-500'
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
  <div className="relative group">
    <div className={`absolute inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-3xl opacity-20 group-hover:opacity-60 transition-opacity`}></div>
    <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl`}>
          {feature.icon}
        </div>
        <div className="text-sm text-gray-400">0{index + 1}</div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background com estrelas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[35%] animate-twinkle"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[50%] left-[15%] animate-twinkle delay-100"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[85%] animate-twinkle delay-200"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[65%] animate-twinkle delay-300"></div>
      </div>

      {/* Gradientes de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge de destaque */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-sm text-blue-200 backdrop-blur-sm">
            <span>🚀</span>
            <span>Recursos Exclusivos</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Por que escolher o MatchEpic?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma solução completa e inovadora para transformar sua presença digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 