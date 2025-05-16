'use client';

import React from 'react';

const BeforeAfterCard = ({ title, description }: { title: string; description: string }) => (
  <div className="relative group">
    <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
    <div className="relative bg-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
      <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4">
        {/* Aqui entraria a imagem real */}
        <div className="w-full h-full bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
          <span className="text-white/50">Imagem</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </div>
);

const Results = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background com estrelas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[25%] animate-twinkle"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[40%] left-[65%] animate-twinkle delay-100"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[60%] left-[35%] animate-twinkle delay-200"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[75%] animate-twinkle delay-300"></div>
      </div>

      {/* Gradientes de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge de destaque */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1 text-sm text-blue-200 backdrop-blur-sm">
            <span>✨</span>
            <span>Resultados Reais</span>
          </div>
        </div>

        {/* Título e descrição */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Transformações Incríveis
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja como nossos usuários transformaram suas fotos em imagens profissionais e impactantes
          </p>
        </div>

        {/* Grid de resultados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BeforeAfterCard
            title="De Selfie para Profissional"
            description="Transformamos selfies básicas em fotos que parecem ter sido tiradas por um fotógrafo profissional."
          />
          <BeforeAfterCard
            title="Cenários Impressionantes"
            description="Adicione contexto e personalidade às suas fotos com locações incríveis."
          />
          <BeforeAfterCard
            title="Looks Personalizados"
            description="Mantenha sua identidade enquanto elevamos seu estilo visual."
          />
        </div>

        {/* Métricas de sucesso */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-300">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">2x</div>
            <div className="text-gray-300">Mais Matches</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">15min</div>
            <div className="text-gray-300">Tempo Médio de Entrega</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results; 