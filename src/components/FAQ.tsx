import React from 'react';

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

const FAQ = () => (
  <section className="relative py-20 bg-[#0B0C15]">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Perguntas Frequentes</h2>
        <p className="text-gray-300">Tire suas dúvidas antes de garantir suas fotos épicas!</p>
      </div>
      <div className="space-y-8">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-gray-900/60 rounded-xl p-6 border border-white/10 shadow">
            <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ; 