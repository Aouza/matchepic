import React from 'react';
import PricingUrgencyHeader from './PricingUrgencyHeader';

const packages = [
  {
    name: 'Starter',
    price: 97,
    description: 'Comece com 10 fotos épicas e 1 revisão',
    features: [
      '10 fotos geradas por IA',
      '1 revisão gratuita',
      'Entrega em até 72h',
      'Acesso ao painel de envio',
    ],
    highlight: false,
    badge: null,
    cta: 'Quero o Starter',
  },
  {
    name: 'Premium',
    price: 147,
    description: 'O equilíbrio ideal: 20 fotos, estilos extras, 2 revisões',
    features: [
      '20 fotos geradas por IA',
      '2 revisões gratuitas',
      'Estilos e cenários extras',
      'Entrega em até 72h',
      'Acesso ao painel de envio',
    ],
    highlight: true,
    badge: 'Mais Vendido',
    cta: 'Quero o Premium ',
  },
  {
    name: 'Pro Pack',
    price: 297,
    description: 'Para quem quer perfis irresistíveis: 30 fotos + extras LinkedIn, análise de perfil, 3 revisões',
    features: [
      '30 fotos geradas por IA',
      '3 revisões gratuitas',
      'Fotos extras para LinkedIn',
      'Análise personalizada do perfil',
      'Estilos e cenários premium',
      'Entrega em até 72h',
      'Acesso ao painel de envio',
    ],
    highlight: false,
    badge: null,
    cta: 'Quero o Pro',
  },
];

const Pricing = () => {
  return (
    <section className="relative py-24 bg-[#0B0C15]" id="precos">
      <PricingUrgencyHeader />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pack, idx) => (
            <div
              key={pack.name}
              className={`relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#181A23] to-[#10111A] shadow-xl p-8 flex flex-col items-center transition-all duration-300 ${
                pack.highlight ? 'border-2 border-blue-500 shadow-2xl z-10 scale-105' : 'hover:border-blue-500'
              }`}
            >
              {pack.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  {pack.badge}
                </div>
              )}
              <h3 className="text-lg font-bold text-white mb-1">{pack.name}</h3>
              <div className="text-3xl font-bold text-white mb-2">R$ {pack.price}</div>
              <p className="text-gray-400 mb-6 text-center min-h-[48px] text-sm">{pack.description}</p>
              <ul className="space-y-3 mb-8 w-full">
                {pack.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex-1" />
              <a
                href="https://pay.hotmart.com/SEU_LINK_AQUI"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full px-6 py-3 rounded-full font-bold text-base text-center transition-all duration-200 shadow-md ${pack.highlight ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                {pack.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      

      <p className="text-center text-sm text-gray-400 mt-8">
        Garantia de Satisfação: você tem direito a 1 revisão gratuita para garantir seu melhor resultado.{' '}
        <a href="/termos" className="text-blue-400 hover:text-blue-300 underline">Consulte nossos Termos</a>
      </p>
    </section>
  );
};

export default Pricing; 