export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que é o IPTV Oficial e por que contratar diretamente na fonte?",
    a: "O IPTV Oficial é a plataforma centralizada de streaming de alta velocidade que opera sem intermediários ou revendedores terceirizados. Isso garante a você a menor latência de conexão, suporte humanizado prioritário e servidores dedicados com uptime contratual de 99.9%.",
  },
  {
    q: "O sinal do IPTV Oficial trava em jogos importantes de futebol?",
    a: "Não. Por se tratar de um servidor oficial com balanceamento de carga de nível empresarial (CDN direta), nossa capacidade suporta dezenas de milhares de transmissões simultâneas em 4K e Full HD a 60 FPS sem congelamentos ou buffering.",
  },
  {
    q: "Como faço para solicitar um teste cortesia oficial?",
    a: "Basta clicar em qualquer botão de 'Solicitar Teste Grátis' nesta página. Você falará diretamente com nossos atendentes oficiais no WhatsApp, que enviarão as credenciais de teste em poucos minutos, sem cobrar nada e sem cartão de crédito.",
  },
  {
    q: "O IPTV Oficial funciona em Smart TVs Samsung, LG e Android?",
    a: "Sim, somos 100% compatíveis com televisores Samsung (Tizen), LG (webOS), Android TV, Fire TV Stick, TV Box, computadores (Windows/Mac) e smartphones (iOS/Android).",
  },
  {
    q: "Qual velocidade de internet é necessária para o IPTV Oficial?",
    a: "Recomendamos no mínimo 20 Mbps para canais em Full HD e 35 Mbps a 50 Mbps para aproveitar ao máximo a nitidez das transmissões em 4K sem qualquer perda de qualidade.",
  },
  {
    q: "Como recebo meu acesso após contratar o plano oficial?",
    a: "Assim que o pagamento for confirmado via Pix no WhatsApp, nosso sistema emite imediatamente seus dados oficiais de login (usuário, senha, URL Xtream Codes e lista M3U) com tutorial completo de configuração.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Existe fidelidade ou multa se eu quiser interromper a assinatura?",
    a: "Nenhum de nossos planos oficiais possui contrato de fidelidade. Você escolhe o plano (mensal, trimestral, semestral ou anual) e só renova se estiver plenamente satisfeito com a entrega do sinal.",
  },
  {
    q: "O catálogo de filmes e séries on demand (VOD) é atualizado?",
    a: "Sim. Nosso acervo oficial conta com mais de 70.000 títulos e recebe novas adições toda semana com os lançamentos mais recentes dos cinemas e plataformas de streaming globais.",
  },
  {
    q: "Posso utilizar minha conta oficial em mais de um aparelho?",
    a: "Cada assinatura padrão atende a 1 conexão simultânea. Você pode instalar o aplicativo em várias TVs e celulares para assistir de forma alternada, ou contratar pontos adicionais oficiais com desconto para assistir ao mesmo tempo.",
  },
  {
    q: "Como o IPTV Oficial protege meus dados e privacidade?",
    a: "Todas as conexões aos nossos servidores são criptografadas via protocolo SSL/TLS HTTPS, impedindo interceptações e práticas abusivas de traffic shaping por parte de provedores de internet.",
  },
];
