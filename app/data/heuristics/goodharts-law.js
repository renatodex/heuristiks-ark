export default {
  id: 'goodharts-law',
  title: 'Goodhart\'s Law',
  subtitle: 'Quando uma medida vira meta, deixa de ser boa medida',
  category: 'management',
  icon: 'FaChartBar',
  shortDescription: 'Métricas perdem o valor quando se tornam alvos.',
  inventor: 'Charles Goodhart',
  year: '1975',
  history: 'Charles Goodhart, economista britânico, formulou esta lei ao observar políticas monetárias: quando o governo escolhe uma métrica econômica específica como alvo, as pessoas começam a otimizar para aquela métrica, tornando-a menos útil como indicador. Marilyn Strathern reformulou de forma mais concisa em 1997.',
  purpose: 'Alertar sobre o perigo de transformar métricas em metas absolutas.',
  whyRedFlag: 'Quando métricas viram metas, pessoas começam a "gaming the system" ao invés de buscar o objetivo real. Exemplos: aumentar linhas de código para parecer produtivo, fechar bugs como "won\'t fix" para melhorar estatísticas, fazer commits pequenos demais só para ter mais commits. Isso indica gestão que valoriza números ao invés de resultados reais. A oportunidade está em usar múltiplas métricas balanceadas, focar em outcomes ao invés de outputs, e criar cultura de valor real ao invés de performance teatral.',
  eli5: 'Se seu professor diz "vou dar nota pela quantidade de palavras na redação", todo mundo vai escrever textos gigantes cheios de "blá blá blá". A quantidade de palavras deixou de medir qualidade!',
  detailed: 'A Lei de Goodhart afirma que "quando uma medida se torna uma meta, ela deixa de ser uma boa medida". Isso acontece porque as pessoas começam a otimizar para a métrica ao invés do objetivo subjacente. Em software: medir produtividade por linhas de código incentiva código verboso; medir por número de bugs fechados incentiva fechar bugs sem resolver; medir por velocity incentiva inflar story points. Use métricas como guias, não como metas absolutas. Combine múltiplas métricas e foque no resultado real desejado.',
  relatedHeuristics: ['pareto-principle', 'bike-shedding'],
  youtubeVideos: [],
  sources: [
    { title: 'Wikipedia - Goodhart\'s Law', url: 'https://en.wikipedia.org/wiki/Goodhart%27s_law' },
    { title: 'Paper original - Monetary Relationships: A View from Threadneedle Street', url: 'https://www.researchgate.net/publication/247579977' },
    { title: 'Article - Goodhart\'s Law in Software', url: 'https://commoncog.com/goodharts-law/' },
  ],
};

