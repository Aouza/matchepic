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
    description: 'Após a compra, você será direcionado para enviar suas selfies e fotos de referência.',
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Pacote Premium</h3>
                <div className="text-4xl font-bold text-white mb-2">R$ 97</div>
                <p className="text-gray-300">por tempo limitado</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  10 fotos épicas personalizadas
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Entrega em até 72h
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  1 revisão gratuita
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Garantia de satisfação
                </li>
              </ul>

              <button className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-200 transform hover:scale-105">
                Comprar Agora
              </button>

              <p className="text-center text-sm text-gray-400 mt-4">
                Vagas limitadas para esta semana
              </p>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="text-center mt-12">
          <p className="text-gray-300">
            Garantia de Satisfação: Você tem direito a uma revisão sem custo.{' '}
            <a href="/termos" className="text-blue-400 hover:text-blue-300 underline">
              Consulte nossos Termos de Uso
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 