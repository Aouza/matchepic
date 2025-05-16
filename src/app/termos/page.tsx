export default function Terms() {
  return (
    <main className="min-h-screen bg-[#0B0C15] text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Termos de Uso e Política de Reembolso</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Garantia de Satisfação</h2>
            <p className="text-gray-300 leading-relaxed">
              Oferecemos uma garantia de satisfação que inclui uma revisão gratuita das fotos geradas. 
              Se você não estiver satisfeito com o resultado após a revisão, oferecemos reembolso total.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Política de Reembolso</h2>
            <p className="text-gray-300 leading-relaxed">
              Você tem direito a solicitar reembolso total em até 7 dias após a entrega das fotos, 
              desde que tenha utilizado a revisão gratuita e ainda assim não esteja satisfeito com o resultado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Processo de Revisão</h2>
            <p className="text-gray-300 leading-relaxed">
              A revisão gratuita permite que você solicite ajustes em até 3 fotos do pacote. 
              As alterações solicitadas devem ser específicas e realizáveis dentro do escopo do serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Prazo de Entrega</h2>
            <p className="text-gray-300 leading-relaxed">
              O prazo padrão de entrega é de até 72 horas após o envio das fotos. 
              Em caso de atraso, você será notificado e poderá solicitar reembolso parcial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Uso das Fotos</h2>
            <p className="text-gray-300 leading-relaxed">
              As fotos geradas são de uso pessoal e podem ser utilizadas em apps de relacionamento 
              e redes sociais. O uso comercial ou redistribuição das fotos não é permitido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contato</h2>
            <p className="text-gray-300 leading-relaxed">
              Para solicitar revisão ou reembolso, entre em contato através do email: 
              <a href="mailto:suporte@matchepic.com" className="text-blue-400 hover:text-blue-300 ml-1">
                suporte@matchepic.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 