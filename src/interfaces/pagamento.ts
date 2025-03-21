export interface DadosPagamento {
  nome: string;
  email: string;
  cpf: string;
  valor: number;
}

export interface RespostaPagamento {
  qrcode: string;
  pixCopiaECola: string;
  valor: number;
  status: 'pendente' | 'pago' | 'cancelado';
  instrucoes?: string[];
  beneficiario?: string;
  tipoPix?: string;
  banco?: string;
} 