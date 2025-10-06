export default {
  id: 'postels-law',
  title: 'Postel\'s Law',
  subtitle: 'Seja liberal no que aceita, conservador no que envia',
  category: 'ux',
  icon: 'FaHandshake',
  shortDescription: 'Seja tolerante com inputs do usuário, mas rigoroso com outputs do sistema.',
  inventor: 'Jon Postel',
  year: '1980',
  history: 'Jon Postel, um dos pioneiros da Internet, formulou este princípio de robustez no contexto de protocolos TCP/IP. Ele se aplica perfeitamente a interfaces: aceite variações de input dos usuários, mas forneça output consistente e claro.',
  purpose: 'Criar sistemas tolerantes a falhas e flexíveis com entradas do usuário.',
  whyRedFlag: 'Quando sistemas são inflexíveis com inputs (rejeita formato de telefone, não aceita variações de endereço, exige formato específico), usuários frustram. Por outro lado, quando outputs são inconsistentes, cria confusão. Isso indica validação rígida demais ou falta de normalização. A oportunidade está em aceitar múltiplos formatos de input mas sempre devolver dados normalizados.',
  eli5: 'Se alguém te pede água e você só aceita se pedirem "H2O por favor", você é chato. Mas quando você dá água, sempre dá num copo limpo do mesmo jeito!',
  detailed: 'A Lei de Postel para UX significa: aceite inputs em múltiplos formatos (telefone com ou sem formatação, datas em vários formatos, endereços com variações); normalize/formate automaticamente; seja permissivo com erros pequenos (autocorrect, sugestões); mas sempre mostre dados formatados consistentemente; forneça feedback claro e previsível; mantenha padrões de output rigorosos. Exemplos: aceite CPF com ou sem pontos, mas sempre exiba formatado; aceite cartão de crédito com ou sem espaços.',
  relatedHeuristics: ['jakobs-law', 'pola'],
  youtubeVideos: [],
  sources: [
    { title: 'Laws of UX - Postel\'s Law', url: 'https://lawsofux.com/postels-law/' },
    { title: 'RFC 761 - Robustness Principle', url: 'https://datatracker.ietf.org/doc/html/rfc761' },
  ],
};

