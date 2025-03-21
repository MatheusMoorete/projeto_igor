export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  caracteristicas?: string[];
  recursos?: Recurso[];
}

export interface Recurso {
  id: string;
  titulo: string;
  descricao: string;
  icone?: string;
} 