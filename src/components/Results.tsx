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
    <section className="relative py-20 overflow-hidden" id="resultados">
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
            Veja como nossos clientes estão se destacando com MatchEpic
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados reais de quem já transformou seu perfil com nossas fotos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Print do Tinder */}
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
              <div className="aspect-[9/16] rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4">
                <img 
                  src="/mock-tinder-matches.png" 
                  alt="Tinder Matches" 
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-300 text-sm">
                "Aumentei de 2 para 7 matches por dia após usar as fotos do MatchEpic"
              </p>
            </div>
          </div>

          {/* Vídeo/GIF de antes/depois */}
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
              <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4">
                <img 
                  src="/mock-before-after.gif" 
                  alt="Antes e Depois" 
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-300 text-sm">
                "As fotos ficaram tão naturais que ninguém acredita que são geradas por IA"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results; 