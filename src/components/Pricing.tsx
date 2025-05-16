import React from 'react';

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
    cta: 'Quero Testar',
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
    cta: 'Comprar Premium',
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-sm text-blue-200 backdrop-blur-sm mb-4">
            <span>📸</span>
            <span>Quanto custa um ensaio profissional?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Em média R$ 500 a R$ 800 — sem contar deslocamento, agenda e edição.</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Com o <span className="font-bold text-white">MatchEpic</span>, você tem fotos com qualidade profissional a partir de <span className="font-bold text-emerald-400">R$ 97</span> — sem sair de casa.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pack, idx) => (
            <div
              key={pack.name}
              className={`relative rounded-2xl border border-white/10 bg-gray-900/70 backdrop-blur-xl p-8 flex flex-col items-center shadow-lg transition-all duration-300 ${
                pack.highlight ? 'border-2 border-blue-500 scale-105 z-10 shadow-2xl' : 'hover:border-blue-500'
              }`}
            >
              {pack.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  {pack.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{pack.name}</h3>
              <div className="text-4xl font-bold text-white mb-2">R$ {pack.price}</div>
              <p className="text-gray-300 mb-6 text-center min-h-[48px]">{pack.description}</p>
              <ul className="space-y-3 mb-8 w-full">
                {pack.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full px-8 py-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
                pack.highlight
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {pack.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-sm text-gray-400 mt-8">
        Garantia de Satisfação: revisão gratuita e reembolso se não gostar.{' '}
        <a href="/termos" className="text-blue-400 hover:text-blue-300 underline">Consulte nossos Termos</a>
      </p>
    </section>
  );
};

export default Pricing; 