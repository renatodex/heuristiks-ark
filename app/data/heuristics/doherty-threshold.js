export default {
  id: 'doherty-threshold',
  title: 'Doherty Threshold',
  subtitle: 'Respostas em menos de 400ms mantêm atenção',
  category: 'ux',
  icon: 'FaBolt',
  shortDescription: 'Produtividade dispara quando computador e usuário interagem em ritmo que nenhum precisa esperar (<400ms).',
  inventor: 'Walter J. Doherty e Ahrvind J. Thadani',
  year: '1982',
  history: 'Pesquisadores da IBM descobriram que quando o tempo de resposta de um sistema cai abaixo de 400 milissegundos, a produtividade e engajamento do usuário aumentam dramaticamente. Isso estabeleceu uma meta de performance crucial para interfaces.',
  purpose: 'Estabelecer metas de performance que mantêm usuários engajados e produtivos.',
  whyRedFlag: 'Quando interfaces são lentas (>400ms de resposta), usuários perdem fluxo, ficam frustrados, e produtividade cai. Isso indica problemas de performance, consultas lentas ao banco, ou falta de otimização de frontend. A oportunidade está em otimizar carregamentos, usar feedback imediato, implementar skeleton screens, e fazer carregamento progressivo.',
  eli5: 'Se você fala com alguém e ela demora 10 segundos para responder cada coisa, fica chato e você perde o fio da meada. Se responde na hora, a conversa flui!',
  detailed: 'O Doherty Threshold estabelece que interações devem ter resposta em menos de 400ms para manter usuários no estado de flow. Acima disso, a atenção começa a divagar. Estratégias: otimize performance real (backend e frontend); use feedback imediato mesmo quando processamento é lento (spinners, progress bars); implemente skeleton screens; faça carregamento progressivo (mostre conteúdo conforme carrega); use caching agressivo; considere otimistic UI (mostre resultado antes de confirmar).',
  relatedHeuristics: ['flow', 'fitts-law'],
  youtubeVideos: [],
  sources: [
    { title: 'Laws of UX - Doherty Threshold', url: 'https://lawsofux.com/doherty-threshold/' },
    { title: 'IBM Research - Response Time in Man-Computer Conversational Transactions', url: 'https://jlelliotton.blogspot.com/p/the-economic-value-of-rapid-response.html' },
  ],
};

