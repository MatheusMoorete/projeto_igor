'use client';

import { useEffect, useState } from 'react';
import { X, Construction, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface DevelopmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  feature: string;
}

export default function DevelopmentDialog({ isOpen, onClose, feature }: DevelopmentDialogProps) {
  const [animation, setAnimation] = useState('scale-95 opacity-0');
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isOpen) {
      // Pequeno delay para iniciar a animação de entrada
      timeout = setTimeout(() => {
        setAnimation('scale-100 opacity-100');
      }, 10);
    } else {
      setAnimation('scale-95 opacity-0');
    }
    
    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Agora todos os recursos usam o mesmo ícone de construção
  const getIcon = () => {
    return <Construction className="w-16 h-16 text-yellow-400 animate-bounce" />;
  };

  const getContent = () => {
    if (feature.toLowerCase() === 'suporte') {
      return (
        <>
          <p className="text-gray-300 text-center mb-4">
            Nosso suporte estará disponível em breve!
          </p>
          <p className="text-gray-400 text-center text-sm">
            Estamos finalizando nosso sistema de atendimento para oferecer a melhor experiência possível para os membros The Mafia.
          </p>
          <div className="mt-6 bg-[#1c1031] p-4 rounded-lg">
            <p className="text-gray-300 text-center">
              Enquanto isso, você pode entrar em contato pelo Discord:
            </p>
            <Link 
              href="https://discord.gg/JZWCuzP4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 text-[#5865F2] hover:text-[#7289DA] transition-colors"
            >
              <MessageCircle size={18} />
              <span className="font-medium">Acessar Discord</span>
            </Link>
          </div>
        </>
      );
    }
    
    return (
      <>
        <p className="text-gray-300 text-center mb-4">
          Estamos trabalhando arduamente para trazer esta funcionalidade para você!
        </p>
        <p className="text-gray-400 text-center text-sm">
          A seção de <strong>{feature}</strong> estará disponível em breve com conteúdo exclusivo para membros The Mafia.
        </p>
      </>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div 
        className={`bg-gradient-to-br from-[#1a0f2e] to-[#0d0117] rounded-xl shadow-2xl shadow-purple-500/10 p-8 max-w-md w-full transition-all duration-300 ${animation}`}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              {feature}
            </span> em Desenvolvimento
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex flex-col items-center my-8">
          <div className="mb-6">
            {getIcon()}
          </div>
          
          {getContent()}
        </div>
        
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-2.5 px-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
} 