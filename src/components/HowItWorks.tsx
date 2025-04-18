'use client';

import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Envie suas selfies',
    description: 'Compartilhe algumas fotos suas para que nossa IA possa aprender suas características únicas.',
    icon: '📸'
  },
  {
    number: '2',
    title: 'Escolha os estilos',
    description: 'Selecione entre diversos cenários e estilos que combinam com sua personalidade.',
    icon: '🎨'
  },
  {
    number: '3',
    title: 'Receba suas fotos',
    description: 'Em poucos dias, você receberá fotos realistas e impactantes prontas para usar.',
    icon: '✨'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples e eficiente para transformar sua presença digital
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold transform rotate-12 shadow-lg">
                  {step.number}
                </div>
                <div className="text-5xl mb-6 mt-4">{step.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 