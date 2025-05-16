import React, { useState } from 'react';

const faqs = [
  {
    question: 'E se eu não gostar das fotos?',
    answer: 'Você tem direito a 1 revisão grátis. Nosso objetivo é garantir que você receba imagens incríveis e realistas.'
  },
  {
    question: 'Minhas selfies não são boas, vale a pena?',
    answer: 'Sim! Trabalhamos com IA otimizada para melhorar iluminação, ângulos e qualidade da sua selfie.'
  },
  {
    question: 'Quanto tempo para receber?',
    answer: 'Entregamos em até 72h úteis após o envio das suas fotos.'
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-[#0B0C15] overflow-hidden">
      {/* Gradiente de fundo sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Título à esquerda */}
          <div className="mb-12 md:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Perguntas frequentes</span>
              <span className="block text-white/90">sobre o MatchEpic</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-md mt-4">Tire suas dúvidas antes de garantir suas fotos épicas!</p>
          </div>
          {/* Acordeão à direita */}
          <div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none group"
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    aria-expanded={openIdx === idx}
                  >
                    <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-blue-400 transform transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`px-6 pb-5 text-gray-300 text-base transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                    style={{
                      transitionProperty: 'max-height, opacity',
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
            {/* Card de contato */}
            <div className="mt-8 flex justify-start">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg p-6 flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <div className="flex-1">
                  <div className="text-lg font-semibold text-white mb-1">Ainda tem dúvidas?</div>
                  <div className="text-gray-300 text-sm">Fale com a gente no WhatsApp e tire todas as suas dúvidas em minutos.</div>
                </div>
                <a
                  href="https://wa.me/SEU_NUMERO_AQUI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg hover:from-blue-400 hover:to-purple-400 transition-all text-base mt-4 md:mt-0"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A12 12 0 003.5 20.5l-1.32 4.85a1 1 0 001.22 1.22l4.85-1.32A12 12 0 0020.52 3.48zm-8.5 17.02a10 10 0 01-5.3-1.53l-.38-.23-2.88.78.77-2.88-.24-.38A10 10 0 1112 20.5zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.6.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 