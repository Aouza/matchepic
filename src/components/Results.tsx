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
    <section id="resultados" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B14] to-[#0A0B14]/95" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Eles já transformaram seus perfis. Agora é sua vez.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja os resultados reais de quem usou o MatchEpic para causar impacto nos apps e nas redes.
          </p>
        </div>

        {/* Grid de Resultados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Depoimento em Vídeo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="aspect-video bg-black/20 rounded-xl overflow-hidden mb-4">
                <video 
                  className="w-full h-full object-cover"
                  poster="/video-thumbnail.jpg"
                  controls
                >
                  <source src="/testimonial-video.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-gray-300 italic">
                "Nunca imaginei que IA poderia fazer uma foto minha parecer tão natural! Meus amigos nem perceberam que era gerada."
              </p>
              <p className="text-emerald-400 mt-2 font-medium">- Ana, 28 anos</p>
            </div>
          </div>

          {/* Card 2: Print do Tinder */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="aspect-[4/3] bg-black/20 rounded-xl overflow-hidden mb-4">
                <img 
                  src="/tinder-matches.jpg" 
                  alt="Aumento de matches no Tinder"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-300 italic">
                "Tive 2x mais matches na primeira semana. As fotos ficaram tão naturais que meus amigos acharam que foi um ensaio."
              </p>
              <p className="text-emerald-400 mt-2 font-medium">- Pedro, 32 anos</p>
            </div>
          </div>

          {/* Card 3: Antes/Depois */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="aspect-[4/3] bg-black/20 rounded-xl overflow-hidden mb-4">
                <img 
                  src="/before-after.jpg" 
                  alt="Antes e depois do MatchEpic"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-300 italic">
                "As fotos ficaram tão naturais que meus amigos nem perceberam que eram geradas por IA. Agora meu perfil está muito mais atraente!"
              </p>
              <p className="text-emerald-400 mt-2 font-medium">- Maria, 25 anos</p>
            </div>
          </div>

          {/* Card 4: Quote Visual */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="aspect-[4/3] bg-black/20 rounded-xl overflow-hidden mb-4">
                <img 
                  src="/quote-visual.jpg" 
                  alt="Depoimento visual"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-300 italic">
                "Nunca imaginei que IA poderia fazer uma foto minha parecer tão natural! Meus amigos nem perceberam que era gerada."
              </p>
              <p className="text-emerald-400 mt-2 font-medium">- João, 30 anos</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-white mb-6">
            Quer ver seu perfil aqui também?
          </p>
          <a
            href="#precos"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Comece agora
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results; 