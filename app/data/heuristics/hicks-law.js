export default {
  id: 'hicks-law',
  title: 'Hick\'s Law',
  subtitle: 'Mais opções = mais tempo para decidir',
  category: 'ux',
  icon: 'FaQuestion',
  shortDescription: 'O tempo para tomar uma decisão aumenta com o número e complexidade de escolhas.',
  inventor: 'William Edmund Hick e Ray Hyman',
  year: '1952',
  history: 'William Hick e Ray Hyman, psicólogos britânicos, estudaram o tempo de reação em relação ao número de estímulos. Descobriram que o tempo de decisão aumenta logaritmicamente com o número de opções - não linearmente, mas ainda aumenta significativamente.',
  purpose: 'Minimizar o tempo e esforço cognitivo necessário para tomada de decisão em interfaces.',
  whyRedFlag: 'Quando usuários são bombardeados com muitas opções, a paralisia de decisão ocorre. Menus gigantes, dashboards sobrecarregados, e formulários complexos indicam falta de hierarquia e priorização. Isso leva a abandono, frustração, e decisões ruins. A oportunidade está em simplificar, categorizar, usar progressive disclosure, e mostrar apenas o que é relevante no momento.',
  eli5: 'Se você vai à sorveteria e tem 3 sabores, escolhe rápido. Se tem 50 sabores, fica parado sem saber qual escolher!',
  detailed: 'A Lei de Hick estabelece que o tempo de decisão T cresce logaritmicamente: T = b × log₂(n + 1), onde n é o número de opções. Implicações: simplifique opções de navegação; use categorização e hierarquia; implemente progressive disclosure (mostre opções avançadas apenas quando necessário); destaque a ação principal; considere valores padrão inteligentes. Porém, não sobre-simplifique: usuários experientes podem preferir mais opções visíveis.',
  relatedHeuristics: ['fitts-law', 'millers-law', 'choice-overload'],
  youtubeVideos: [],
  sources: [
    { title: 'Laws of UX - Hick\'s Law', url: 'https://lawsofux.com/hicks-law/' },
    { title: 'Wikipedia - Hick\'s Law', url: 'https://en.wikipedia.org/wiki/Hick%27s_law' },
  ],
};

