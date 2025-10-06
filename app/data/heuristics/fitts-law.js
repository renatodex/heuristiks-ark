export default {
  id: 'fitts-law',
  title: 'Fitts\'s Law',
  subtitle: 'Tempo para clicar depende do tamanho e distância do alvo',
  category: 'ux',
  icon: 'FaBullseye',
  shortDescription: 'O tempo para adquirir um alvo é uma função da distância e tamanho do alvo.',
  inventor: 'Paul Fitts',
  year: '1954',
  history: 'Paul Fitts, psicólogo, estudou o sistema motor humano e criou um modelo matemático que prevê o tempo necessário para mover rapidamente para uma área alvo. Foi inicialmente usado em ergonomia e depois se tornou fundamental no design de interfaces.',
  purpose: 'Guiar o posicionamento e dimensionamento de elementos interativos em interfaces.',
  whyRedFlag: 'Quando botões importantes são pequenos demais ou estão longe demais do cursor/dedo do usuário, a interação se torna lenta e frustrante. Isso indica falta de consideração por princípios básicos de ergonomia. A oportunidade está em aumentar alvos importantes, posicionar elementos relacionados próximos, e colocar ações frequentes em áreas de fácil acesso.',
  eli5: 'É mais fácil acertar um alvo grande e perto do que um alvo pequeno e longe!',
  detailed: 'A Lei de Fitts estabelece que o tempo T para mover o cursor até um alvo é: T = a + b × log₂(1 + D/W), onde D é a distância até o alvo e W é a largura do alvo. Implicações práticas: botões importantes devem ser grandes; elementos relacionados devem estar próximos; bordas e cantos da tela são infinitamente "grandes" (o cursor para neles); botões de ação devem estar perto de onde o usuário está olhando/interagindo.',
  relatedHeuristics: ['doherty-threshold', 'hicks-law'],
  youtubeVideos: [],
  sources: [
    { title: 'Laws of UX - Fitts\'s Law', url: 'https://lawsofux.com/fittss-law/' },
    { title: 'Wikipedia - Fitts\'s Law', url: 'https://en.wikipedia.org/wiki/Fitts%27s_law' },
  ],
};

