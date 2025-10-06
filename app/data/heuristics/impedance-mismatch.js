export default {
  id: 'impedance-mismatch',
  title: 'Impedance Mismatch',
  subtitle: 'Incompatibilidade entre diferentes modelos de dados',
  category: 'architecture',
  icon: 'FaPlugCircleXmark',
  shortDescription: 'A diferença conceitual entre modelos de dados que dificulta a integração.',
  inventor: 'Comunidade de Engenharia de Software',
  year: 'Anos 90',
  history: 'O termo vem da engenharia elétrica, onde "impedância" refere-se à resistência em circuitos. Em software, tornou-se popular nos anos 90 para descrever o problema de mapear objetos para tabelas relacionais (Object-Relational Impedance Mismatch). O problema existe sempre que dois sistemas usam paradigmas diferentes para representar dados.',
  purpose: 'Identificar e lidar com incompatibilidades entre diferentes modelos de representação de dados.',
  whyRedFlag: 'Impedance Mismatch não resolvido leva a código complexo de mapeamento, perda de performance, e bugs sutis na conversão de dados. Indica que estamos forçando paradigmas incompatíveis a trabalhar juntos sem uma camada de adaptação adequada. O resultado é código cheio de conversões manuais, lógica de transformação espalhada, e dificuldade de manutenção. A oportunidade está em usar ferramentas adequadas (ORMs, adapters) ou escolher tecnologias mais compatíveis.',
  eli5: 'É como tentar encaixar uma peça redonda em um buraco quadrado. Você consegue, mas precisa cortar, adaptar, e fica meio torto. Melhor seria ter peças que já combinam!',
  detailed: 'Impedance Mismatch ocorre quando dois sistemas representam dados de formas fundamentalmente diferentes. O exemplo clássico é Object-Relational: orientação a objetos usa herança, encapsulamento e referências, enquanto bancos relacionais usam tabelas, chaves estrangeiras e joins. Outros exemplos: JSON vs XML, REST vs GraphQL, sistemas síncronos vs assíncronos. Isso gera código complexo de tradução. Soluções incluem ORMs (Object-Relational Mappers), camadas de adaptação, ou escolher tecnologias mais alinhadas desde o início.',
  relatedHeuristics: ['leaky-abstraction'],
  youtubeVideos: [],
  sources: [
    { title: 'Wikipedia - Object-Relational Impedance Mismatch', url: 'https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch' },
    { title: 'Martin Fowler - ORM Hate', url: 'https://martinfowler.com/bliki/OrmHate.html' },
  ],
};

