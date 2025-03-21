# The Mafia - Site de Venda de Produto

Este é um site de venda para o produto The Mafia, desenvolvido com Next.js, TypeScript, Tailwind CSS e integração com pagamento PIX.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React com renderização do lado do servidor
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [React Hook Form](https://react-hook-form.com/) - Biblioteca para gerenciamento de formulários
- [Zod](https://zod.dev/) - Validação de esquemas TypeScript
- [Lucide React](https://lucide.dev/guide/packages/lucide-react) - Ícones para a interface

## Funcionalidades

- Design moderno e responsivo
- Página de vendas do produto
- Detalhes do produto e recursos
- Checkout com formulário validado
- Integração de pagamento via PIX (simulado)
- Layout otimizado para dispositivos móveis e desktop

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/site.git
cd site
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse o site em [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

- `/src/app` - Páginas e rotas da aplicação
- `/src/components` - Componentes reutilizáveis
- `/src/interfaces` - Interfaces TypeScript
- `/src/lib` - Utilitários e configurações

## Deploy na Vercel

Este projeto está configurado para ser facilmente implantado na Vercel:

1. Crie uma conta na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Importe o projeto e faça o deploy

## Personalização

Você pode personalizar o produto editando:

- **`/src/lib/produto-config.ts`** - Informações do produto, preço e características
- **`/public/imagens/`** - Imagens do produto

## Licença

Este projeto está licenciado sob a licença MIT.
