'use client';

import { PRODUTO } from '@/lib/produto-config';
import { 
  Eye, Target, Shield, 
  Activity, Zap, Move 
} from 'lucide-react';
import Image from 'next/image';

export default function FeaturesSection() {
  // Mapeamento de ícones para cada feature
  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case 'eye':
        return <Eye size={32} className="text-purple-400" />;
      case 'target':
        return <Target size={32} className="text-purple-400" />;
      case 'shield':
        return <Shield size={32} className="text-purple-400" />;
      case 'activity':
        return <Activity size={32} className="text-purple-400" />;
      case 'zap':
        return <Zap size={32} className="text-purple-400" />;
      case 'move':
        return <Move size={32} className="text-purple-400" />;
      default:
        return <Eye size={32} className="text-purple-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#0b0014]" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Recursos essenciais fornecidos por nossos<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              Softwares Avançados
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore nossa coleção de ferramentas de alto desempenho projetadas 
            para elevar sua experiência de jogo ao próximo nível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUTO.recursos?.map((recurso) => (
            <div 
              key={recurso.id} 
              className="bg-[#110822] p-8 rounded-xl border border-purple-900/20 hover:border-purple-500/30 transition group"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-900/20 flex items-center justify-center group-hover:bg-purple-900/40 transition">
                  {getIconComponent(recurso.icone)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">
                {recurso.titulo}
              </h3>
              <p className="text-gray-400 text-center">
                {recurso.descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Permanença com a MAFIA em qualquer jogo
            </h2>
          </div>

          <div className="bg-[#0d0117] rounded-xl p-6 md:p-8 lg:p-12 border border-purple-900/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Suporte para os principais jogos
                </h3>
                <p className="text-gray-300 mb-8">
                  Nossos cheats e ferramentas são compatíveis com os jogos mais populares do mercado,
                  incluindo League of Legends, Valorant, CS2, Apex Legends, Fortnite e muitos outros.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["League of Legends", "Valorant", "CS2", "Apex Legends"].map((jogo, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="text-gray-300">{jogo}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1974&auto=format&fit=crop"
                  alt="The Mafia Gameplay - FPS"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 