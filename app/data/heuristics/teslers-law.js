export default {
  id: 'teslers-law',
  title: 'Tesler\'s Law',
  subtitle: 'Complexidade não pode ser eliminada, apenas movida',
  category: 'ux',
  icon: 'FaBalanceScale',
  shortDescription: 'Para qualquer sistema, existe certa complexidade que não pode ser reduzida.',
  inventor: 'Larry Tesler',
  year: '1980s',
  history: 'Larry Tesler, cientista da computação que trabalhou na Xerox PARC e Apple, formulou a Lei da Conservação de Complexidade. Ele observou que cada aplicação tem uma quantidade inerente de complexidade que não pode ser eliminada - apenas transferida entre sistema e usuário.',
  purpose: 'Reconhecer que complexidade deve ser gerenciada, não eliminada, e decidir quem deve lidar com ela.',
  whyRedFlag: 'Quando desenvolvedores transferem complexidade excessiva para usuários (interfaces confusas, muitas configurações, processos complicados), a experiência sofre. Por outro lado, esconder toda complexidade pode limitar poder usuários. Isso indica falta de decisão consciente sobre onde colocar complexidade. A oportunidade está em assumir complexidade no sistema para simplificar a experiência do usuário, mantendo poder para casos avançados.',
  eli5: 'Para fazer suco de laranja, alguém tem que espremer a laranja. Você pode fazer isso, ou comprar suco pronto e a fábrica faz. A tarefa não desaparece, só muda de lugar!',
  detailed: 'A Lei de Tesler afirma que todo sistema tem complexidade irredutível. A questão é: quem lida com ela - usuário ou sistema? Exemplos: configuração automática vs manual, sugestões inteligentes vs campos vazios, defaults inteligentes vs todas opções visíveis. Estratégia: assuma complexidade no backend/sistema quando possível; forneça defaults inteligentes; use progressive disclosure para poder avançado; não sobre-simplifique removendo controles necessários; teste com usuários reais para encontrar o balanço.',
  relatedHeuristics: ['hicks-law', 'cognitive-load'],
  youtubeVideos: [],
  sources: [
    { title: 'Laws of UX - Tesler\'s Law', url: 'https://lawsofux.com/teslers-law/' },
    { title: 'Wikipedia - Law of Conservation of Complexity', url: 'https://en.wikipedia.org/wiki/Law_of_conservation_of_complexity' },
  ],
};

