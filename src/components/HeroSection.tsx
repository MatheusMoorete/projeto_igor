'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PRODUTO } from '@/lib/produto-config';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import DevelopmentDialog from './DevelopmentDialog';

export default function HeroSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDialogOpen(true);
  };

  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 z-0"></div>
        
        {/* Standard GIF Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/imagens/standard.gif" 
            alt="The Mafia - Fundo" 
            fill
            className="object-cover opacity-40"
            priority
            unoptimized
          />
          {/* Overlay para garantir visibilidade do conteúdo */}
          <div className="absolute inset-0 bg-[#0b0014]/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Jogue Além dos Limites<br />
              com<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                The Mafia
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              {PRODUTO.descricao}
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <Link 
                href="/#pricing" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                Explore Nossos Cheats
              </Link>
              <Link 
                href="/checkout" 
                className="bg-[#271A37] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#32214A] hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300"
              >
                Comprar Agora
              </Link>
            </div>
          </div>
        </div>
        
        {/* Discord Community CTA */}
        <div className="w-full bg-[#5865F2]/10 backdrop-blur-sm py-4 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h3 className="text-xl font-semibold text-white mb-4 md:mb-0">
                Junte-se à Comunidade The Mafia
              </h3>
              <button 
                onClick={handleSupportClick}
                className="bg-[#5865F2] hover:bg-[#4752C4] hover:shadow-lg hover:shadow-[#5865F2]/30 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300"
              >
                <MessageCircle size={18} />
                <span>Acessar o Discord</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dialog para suporte */}
      <DevelopmentDialog 
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        feature="Suporte"
      />
    </>
  );
} 