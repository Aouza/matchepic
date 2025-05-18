"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/hero_images/lucv-antes-e-depois.png",
    alt: "Antes e depois do photai.gen",
    story: "Aumentou seus matches em 3x com as novas fotos.",
    quote:
      "As fotos ficaram tão naturais que meus amigos nem perceberam que eram geradas por IA. Agora meu perfil está muito mais atraente!",
    name: "Maria, 25 anos",
  },
  {
    image: "/hero_images/lucv-antes-e-depois.png",
    alt: "Aumento de matches no Tinder",
    story: "De 2 para 7 matches por dia após usar o photai.gen.",
    quote:
      "Tive 2x mais matches na primeira semana. As fotos ficaram tão naturais que meus amigos acharam que foi um ensaio.",
    name: "Pedro, 32 anos",
  },
  {
    image: "/hero_images/lucv-antes-e-depois.png",
    alt: "Depoimento visual",
    story: "Perfil ficou mais atraente e autêntico.",
    quote:
      "Nunca imaginei que IA poderia fazer uma foto minha parecer tão natural! Meus amigos nem perceberam que era gerada.",
    name: "João, 30 anos",
  },
  {
    image: "/video-thumbnail.jpg",
    alt: "Depoimento em vídeo",
    story: "Conquistou mais confiança nos apps.",
    quote:
      "Nunca imaginei que IA poderia fazer uma foto minha parecer tão natural! Meus amigos nem perceberam que era gerada.",
    name: "Ana, 28 anos",
    video: "/testimonial-video.mp4",
  },
];

const Results = () => {
  return (
    <section
      id="resultados"
      className="relative py-28 overflow-hidden bg-[#0A0B14]"
    >
      {/* Fundo visual forte */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B14] to-[#0A0B14]/95 z-0" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl z-0" />

      {/* Statement Section */}
      <div className="relative z-10 max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
          Resultados Reais de Quem Usou
        </h2>
        <p className="text-base sm:text-lg text-gray-300">
          Veja como o photai.gen transformou perfis e aumentou resultados de
          verdade.
        </p>
      </div>

      {/* Slider de Resultados */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center px-2 sm:px-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity z-0" />
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-center z-10 perspective-1000 w-full max-w-md mx-auto">
                  <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4 sm:mb-6 shadow-lg transform group-hover:rotate-y-3 group-hover:scale-105 transition-transform duration-500">
                    {slide.video ? (
                      <video
                        className="w-full h-full object-cover rounded-xl"
                        poster={slide.image}
                        controls
                      >
                        <source src={slide.video} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    )}
                  </div>
                  {/* Micro-story */}
                  <div className="text-base sm:text-lg font-semibold text-blue-400 mb-2 text-center">
                    {slide.story}
                  </div>
                  {/* Quote */}
                  <p className="text-gray-200 italic text-center mb-2 text-sm sm:text-base">
                    "{slide.quote}"
                  </p>
                  <p className="text-emerald-400 font-medium text-center text-xs sm:text-sm">
                    - {slide.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Final */}
      <div className="relative z-10 text-center mt-16">
        <p className="text-2xl font-bold text-white mb-6">
          Quer ver seu perfil aqui também?
        </p>
        <a
          href="#precos"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Comece agora
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Results;
