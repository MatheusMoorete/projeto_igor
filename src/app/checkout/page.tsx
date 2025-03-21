'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { PRODUTO } from '@/lib/produto-config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RespostaPagamento } from '@/interfaces/pagamento';
import { Check, Copy } from 'lucide-react';

// Schema de validação para o formulário
const checkoutSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido (use formato: 000.000.000-00)'),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentData, setPaymentData] = useState<RespostaPagamento | null>(null);
  const [copied, setCopied] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setIsLoading(true);
    
    try {
      // Fazer a requisição para a API de pagamento
      const response = await fetch('/api/pagamento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          valor: PRODUTO.preco
        }),
      });
      
      if (!response.ok) {
        throw new Error('Erro ao processar pagamento');
      }
      
      const paymentResponse = await response.json();
      setPaymentData(paymentResponse);
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      alert('Ocorreu um erro ao gerar o código PIX. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const copiarPixCopiaECola = () => {
    if (paymentData?.pixCopiaECola) {
      navigator.clipboard.writeText(paymentData.pixCopiaECola);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link 
              href="/"
              className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              Voltar para a página inicial
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-white mb-6">Checkout</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {!paymentData ? (
                <div className="bg-[#110822] rounded-xl p-6 border border-purple-900/20">
                  <h2 className="text-xl font-semibold text-white mb-6">Informações de Pagamento</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-gray-300 mb-2">Nome Completo</label>
                      <input
                        id="nome"
                        type="text"
                        className="w-full bg-[#1A1025] text-white border border-purple-900/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Seu nome completo"
                        {...register('nome')}
                      />
                      {errors.nome && (
                        <p className="text-red-400 text-sm mt-1">{errors.nome.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="w-full bg-[#1A1025] text-white border border-purple-900/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="seu@email.com"
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="cpf" className="block text-gray-300 mb-2">CPF</label>
                      <input
                        id="cpf"
                        type="text"
                        className="w-full bg-[#1A1025] text-white border border-purple-900/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="000.000.000-00"
                        {...register('cpf')}
                      />
                      {errors.cpf && (
                        <p className="text-red-400 text-sm mt-1">{errors.cpf.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Processando...' : 'Gerar PIX'}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-[#110822] rounded-xl p-6 border border-purple-900/20">
                  <h2 className="text-xl font-semibold text-white mb-6">Pagamento PIX</h2>
                  
                  <div className="flex flex-col items-center mb-6">
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <img src={paymentData.qrcode} alt="QR Code PIX" className="w-48 h-48" />
                    </div>
                    
                    <div className="text-center mb-4">
                      <p className="text-gray-300">Valor: <span className="font-semibold">R$ {paymentData.valor.toFixed(2)}</span></p>
                      <p className="text-gray-300">Beneficiário: <span className="font-semibold">{paymentData.beneficiario}</span></p>
                      {paymentData.tipoPix && (
                        <p className="text-gray-300">Tipo de Chave: <span className="font-semibold">{paymentData.tipoPix}</span></p>
                      )}
                      {paymentData.banco && (
                        <p className="text-gray-300">Banco: <span className="font-semibold">{paymentData.banco}</span></p>
                      )}
                    </div>
                    
                    <p className="text-gray-300 text-center mb-4">
                      Escaneie o QR Code com o aplicativo do seu banco ou copie o código PIX abaixo:
                    </p>
                    
                    <div className="w-full bg-[#1A1025] border border-purple-900/30 rounded-lg p-3 mb-4 relative">
                      <div className="overflow-x-auto whitespace-nowrap text-gray-400 pr-10 max-w-full">
                        {paymentData.pixCopiaECola}
                      </div>
                      <button 
                        onClick={copiarPixCopiaECola}
                        className="absolute right-2 top-2 text-purple-400 hover:text-purple-300"
                      >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                      </button>
                    </div>
                    
                    <button 
                      onClick={copiarPixCopiaECola}
                      className="bg-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
                    >
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                      <span>{copied ? 'Código Copiado!' : 'Copiar Código PIX'}</span>
                    </button>
                  </div>
                  
                  <div className="mt-8 border-t border-purple-900/30 pt-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Como realizar o pagamento:</h3>
                    <ul className="space-y-2 text-gray-300 mb-6">
                      {paymentData.instrucoes?.map((instrucao, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="bg-purple-900/30 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-purple-400 text-sm">{index + 1}</span>
                          </div>
                          <span>{instrucao}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-green-900/10 border border-green-900/30 rounded-lg p-4">
                      <p className="text-green-400 text-sm">
                        O pagamento será processado em até 5 minutos. Se tiver algum problema, entre em contato com nosso suporte pelo Discord.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-[#110822] rounded-xl p-6 border border-purple-900/20 sticky top-24">
                <h2 className="text-xl font-semibold text-white mb-4">Resumo do Pedido</h2>
                
                <div className="border-b border-purple-900/30 pb-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{PRODUTO.nome}</span>
                    <span className="text-gray-300">R$ {PRODUTO.preco.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-bold text-lg mb-6">
                  <span className="text-white">Total</span>
                  <span className="text-white">R$ {PRODUTO.preco.toFixed(2)}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-gray-300 text-sm">Acesso instantâneo após confirmação</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-gray-300 text-sm">Garantia de 7 dias de satisfação</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-gray-300 text-sm">Suporte técnico 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 