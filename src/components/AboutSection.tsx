import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16 bg-[#0b0014]" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-purple-500 font-bold mb-2 uppercase tracking-wider">QUEM SOMOS NÓS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Domine Seu Jogo: Spoofers e Cheats Avançados
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Procurando pelo melhor software de spoofing e cheat? 
            The Mafia oferece ferramentas avançadas para elevar seus 
            jogos de PC. Domine Scripts para League of Legends, Valorant e 
            mais com nossa tecnologia líder do setor. Junte-se aos jogadores 
            de elite que confiam na The Mafia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
              alt="The Mafia Software - Jogo FPS" 
              fill
              className="object-cover"
            />
          </div>

          <div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Redefina a Realidade,<br />
              Comande o Futuro
            </h3>
            
            <p className="text-gray-300 mb-8">
              Capacitamos os jogadores a jogar em seu melhor. Nossa tecnologia inovadora, design 
              intuitivo e equipe de suporte dedicada garantem que você tenha tudo o que precisa para levar 
              seus jogos ao próximo nível.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-900/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.764l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.764 4.763m-5.106 6.392 6.925 6.925c1.282 1.282 3.456.678 4.319-1.192.563-1.22.328-2.613-.66-3.6m-7.298-13.5a40.05 40.05 0 0 1 3.639-3.332" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Recursos Personalizáveis</h4>
                  <p className="text-gray-400">Ajuste as configurações ao seu estilo de jogo para uma experiência única.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-900/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Atualizações Frequentes</h4>
                  <p className="text-gray-400">Mantenha-se atualizado com nossas melhorias regulares de software.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-900/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 9 9.75 13.5 12l4.5-5.25L22.5 12 21 13.5m-8.25 4.5H6m10.5 0h-3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Equipe de Desenvolvimento Especializada</h4>
                  <p className="text-gray-400">Soluções elaboradas por especialistas líderes do setor para desempenho superior.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 