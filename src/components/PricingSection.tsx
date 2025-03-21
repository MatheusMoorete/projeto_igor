'use client';

import { PRODUTO } from '@/lib/produto-config';
import Link from 'next/link';
import { Check, ShoppingCart } from 'lucide-react';

export default function PricingSection() {
  return (
    <section className="py-20 bg-[#0d0117]" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-purple-500 font-semibold bg-purple-900/20 rounded-full text-sm mb-3">
            PREÇOS TRANSPARENTES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Obtenha Acesso Premium ao The Mafia
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Escolha nosso plano premium e desfrute de todos os recursos avançados que oferecemos
            para elevar sua experiência de jogo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 p-1 rounded-2xl">
            <div className="bg-[#110822] rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">The Mafia Premium</h3>
                  <p className="text-gray-400">Acesso completo a todos os recursos</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-4xl font-bold text-white">
                    R$ {PRODUTO.preco.toFixed(2)}
                  </span>
                  <span className="text-gray-400 ml-1">/mês</span>
                </div>
              </div>

              <div className="border-t border-purple-900/30 pt-8 mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">O que está incluído:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PRODUTO.caracteristicas?.map((caracteristica, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 text-green-500">
                        <Check size={18} />
                      </div>
                      <span className="text-gray-300">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <Link
                  href="/checkout"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3.5 px-8 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2 text-center group"
                >
                  <ShoppingCart size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Comprar Agora</span>
                </Link>
                <p className="text-gray-500 text-sm">
                  Pagamento seguro via PIX • Acesso instantâneo • Suporte 24/7
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#0f051a] rounded-lg p-6 border border-purple-900/20">
            <h4 className="text-lg font-semibold text-white mb-4">Garantias do The Mafia:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <span className="text-gray-300">Garantia de 7 dias de satisfação</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <span className="text-gray-300">Atualizações constantes incluídas</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <span className="text-gray-300">Suporte técnico 24/7</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <span className="text-gray-300">Acesso ao canal exclusivo de Discord</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 