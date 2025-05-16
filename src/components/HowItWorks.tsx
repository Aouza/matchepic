'use client';

import React from 'react';

const steps = [
  {
    title: '1. Compre seu Pacote',
    description: 'Escolha o pacote ideal para suas necessidades e faça o pagamento de forma segura.',
    icon: '💳',
    gradient: 'from-emerald-500 to-blue-500'
  },
  {
    title: '2. Envie suas Fotos',
    description: 'Após o pagamento, você acessa o painel para enviar suas fotos e preferências.',
    icon: '📸',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: '3. Receba suas Fotos',
    description: 'Em até 72h, você receberá suas fotos épicas prontas para usar em qualquer app.',
    icon: '✨',
    gradient: 'from-blue-500 to-indigo-500'
  }
];

const StepCard = ({ step, index }: { step: typeof steps[0], index: number }) => (
  <div className="relative group">
    <div className={`absolute inset-0.5 bg-gradient-to-r ${step.gradient} rounded-2xl blur-3xl opacity-20 group-hover:opacity-60 transition-opacity`}></div>
    <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-2xl`}>
          {step.icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
      <p className="text-gray-300 leading-relaxed">{step.description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background com estrelas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[35%] animate-twinkle"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[50%] left-[15%] animate-twinkle delay-100"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[85%] animate-twinkle delay-200"></div>
      </div>

      {/* Gradientes de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Processo simples e rápido para transformar suas fotos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 