import React from "react";

const PricingUrgencyHeader = () => (
  <>
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex flex-col items-center w-full">
        <div className="inline-flex items-center space-x-2 rounded-full bg-orange-500 px-4 py-2 text-sm text-white font-semibold mb-6 shadow-lg">
          <span>⚠️</span>
          <span>
            Vagas limitadas: pedidos feitos até domingo recebem em até 72h.
            Depois, fila de espera.
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            Perfil que atrai
          </span>{" "}
          em até 72h.
          <br />
          Sem ensaio caro, sem deslocamento.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 text-center max-w-xl">
          Compare e veja por que o photai.gen é a escolha mais inteligente para
          seu perfil.
        </p>
      </div>
    </div>
    {/* Comparativo photai.gen vs Ensaio Tradicional */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-[#181A23] border border-white/10 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
            Comparativo: photai.gen vs Ensaio Tradicional
          </h3>
          <p className="text-gray-400 text-sm">
            Escolha a melhor opção para seu perfil
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* photai.gen */}
          <div className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-900/10 to-blue-900/0 p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <div>
                <h4 className="text-base font-bold text-white">photai.gen</h4>
                <p className="text-emerald-400 text-xs font-semibold">
                  Recomendado
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg">💰</span>
              <span className="text-gray-300">Preço</span>
              <span className="ml-auto font-bold text-emerald-400">
                R$ 97–R$ 297
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg">⚡</span>
              <span className="text-gray-300">Tempo</span>
              <span className="ml-auto font-bold text-emerald-400">
                Até 72h
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg">🎯</span>
              <span className="text-gray-300">Locais & Estilos</span>
              <span className="ml-auto font-bold text-emerald-400">
                Vários presets
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg">✨</span>
              <span className="text-gray-300">Agendamento</span>
              <span className="ml-auto font-bold text-emerald-400">
                Online, prático
              </span>
            </div>
          </div>
          {/* Ensaio Tradicional */}
          <div className="rounded-xl border border-red-500/30 bg-gradient-to-br from-red-900/10 to-red-900/0 p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                E
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Ensaio Tradicional
                </h4>
                <p className="text-red-400 text-xs font-semibold">Custo Alto</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg">💸</span>
              <span className="text-gray-300">Preço</span>
              <span className="ml-auto font-bold text-red-400">
                R$ 500–R$ 800
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg">⏳</span>
              <span className="text-gray-300">Tempo</span>
              <span className="ml-auto font-bold text-red-400">
                1 a 2 semanas
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg">🚫</span>
              <span className="text-gray-300">Locais & Estilos</span>
              <span className="ml-auto font-bold text-red-400">
                Limitado ao ensaio
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg">😫</span>
              <span className="text-gray-300">Agendamento</span>
              <span className="ml-auto font-bold text-red-400">
                Deslocamento, agenda
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PricingUrgencyHeader;
