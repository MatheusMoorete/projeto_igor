import { Produto } from "@/interfaces/produto";

export const PRODUTO: Produto = {
  id: "the-mafia",
  nome: "The Mafia",
  descricao: "Aprimore sua experiência de jogo com os cheats The Mafia mais avançados e personalizáveis disponíveis.",
  preco: 149.90,
  imagem: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?q=80&w=2067&auto=format&fit=crop",
  caracteristicas: [
    "ESP/Wallhack - Visão através de paredes",
    "Aimbot de Kernel - Mira precisa e silenciosa",
    "HWID Spoofer - Proteção contra banimentos",
    "Bypass de Anti-Cheat DMA",
    "Scripts para Combos Perfeitos",
    "Recursos de Evasão Avançados"
  ],
  recursos: [
    {
      id: "wallhack",
      titulo: "ESP/Wallhack",
      descricao: "Rastreie inimigos, localize itens e observe rotações diretamente através das paredes. É como ter visão de raio-x, mantendo você informado o tempo todo.",
      icone: "eye"
    },
    {
      id: "aimbot",
      titulo: "Aimbots de Kernel a Silenciosos",
      descricao: "Ajuste desde correção sutil de mira até travamentos instantâneos. Sua jogabilidade permanece limpa; os relatórios deles não o impedem.",
      icone: "target"
    },
    {
      id: "spoofer",
      titulo: "Spoofers de HWID",
      descricao: "Redefina banimentos de hardware permanentemente. Volte ao jogo como se nada tivesse acontecido.",
      icone: "shield"
    },
    {
      id: "bypass",
      titulo: "Bypass de Anti-Cheat DMA",
      descricao: "Contorne anti-cheats de nível kernel como o Vanguard e domine com cheats ou scripts—permaneça indetectável, sem banimentos, sem limites.",
      icone: "activity"
    },
    {
      id: "combos",
      titulo: "Script para Combos Perfeitos",
      descricao: "Execute combos de campeões sem nenhum atraso. Desde cancelamentos de animação da Riven até sombras do Zed, torne qualquer movimento, qualquer kiting perfeito.",
      icone: "zap"
    },
    {
      id: "evasao",
      titulo: "Script para Evasão",
      descricao: "Evada instantaneamente habilidades sem nenhum clique manual. Deixe-os dizer que você está \"usando script\" enquanto você sobe de rank em League of Legends.",
      icone: "move"
    }
  ]
}; 