import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a000f] py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">The Mafia</h3>
            <p className="text-gray-400 mb-4">
              Aprimore sua experiência de jogo com ferramentas avançadas e suporte dedicado.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} The Mafia. Todos os direitos reservados.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-400 hover:text-purple-400 transition">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-purple-400 transition">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/suporte" className="text-gray-400 hover:text-purple-400 transition">
                  Suporte
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/termos" className="text-gray-400 hover:text-purple-400 transition">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-400 hover:text-purple-400 transition">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/reembolso" className="text-gray-400 hover:text-purple-400 transition">
                  Política de Reembolso
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              Este produto é fornecido apenas para fins educacionais. Não endossamos o uso de cheats em jogos competitivos.
            </p>
            <div className="flex space-x-4">
              <Link href="https://discord.gg/JZWCuzP4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                Discord
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-purple-400 transition">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 