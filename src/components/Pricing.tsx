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
          <div className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-sm text-white backdrop-blur-sm mb-4 shadow-lg">
            <span>📣</span>
            <span>Vagas limitadas: pedidos feitos até domingo recebem em até 72h. Depois, fila de espera.</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Mais Matches.</span> Perfil Profissional. Sem gastar com ensaio.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Escolha seu pacote e receba fotos épicas em até 72h.
          </p>
        </div>
      </div>

      {/* Tabela Comparativa */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Comparativo: MatchEpic vs Ensaio Tradicional</h3>
            <p className="text-gray-400">Escolha a melhor opção para seu perfil</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MatchEpic */}
            <div className="relative group">
              <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gray-900/70 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">M</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">MatchEpic</h4>
                    <p className="text-emerald-400 text-sm">Recomendado</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <span className="text-gray-400 text-sm">Preço</span>
                      <p className="text-emerald-400 font-bold">R$ 97–R$ 297</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <span className="text-gray-400 text-sm">Tempo</span>
                      <p className="text-emerald-400 font-bold">Até 72h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <span className="text-gray-400 text-sm">Locais & Estilos</span>
                      <p className="text-emerald-400 font-bold">Vários presets</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✨</span>
                    <div>
                      <span className="text-gray-400 text-sm">Agendamento</span>
                      <p className="text-emerald-400 font-bold">Online, prático</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ensaio Tradicional */}
            <div className="relative group">
              <div className="absolute inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gray-900/70 backdrop-blur-xl p-6 rounded-2xl border border-red-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">E</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Ensaio Tradicional</h4>
                    <p className="text-red-400 text-sm">Custo Alto</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💸</span>
                    <div>
                      <span className="text-gray-400 text-sm">Preço</span>
                      <p className="text-red-400 font-bold">R$ 500–R$ 800</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⏳</span>
                    <div>
                      <span className="text-gray-400 text-sm">Tempo</span>
                      <p className="text-red-400 font-bold">1 a 2 semanas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚫</span>
                    <div>
                      <span className="text-gray-400 text-sm">Locais & Estilos</span>
                      <p className="text-red-400 font-bold">Limitado ao ensaio</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">😫</span>
                    <div>
                      <span className="text-gray-400 text-sm">Agendamento</span>
                      <p className="text-red-400 font-bold">Deslocamento, agenda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <div className="flex flex-col gap-4">
                <a
                  href="https://pay.hotmart.com/SEU_LINK_AQUI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 text-center text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Quero minhas fotos épicas agora
                </a>
                <p className="text-sm text-gray-400 text-center">
                  Receba suas fotos em até 72h e cause impacto nos apps
                </p>
              </div>
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