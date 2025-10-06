export default {
  id: 'cognitive-complexity',
  title: 'Cognitive Complexity',
  subtitle: 'Esforço mental necessário para entender algo',
  category: 'complexity',
  icon: 'FaBrain',
  shortDescription: 'Mede o quão difícil é entender um pedaço de código ou sistema.',
  inventor: 'G. Ann Campbell',
  year: '2016',
  history: 'Criada pela SonarSource para melhorar a medição de complexidade de código, focando no esforço cognitivo real necessário para entender o código, ao invés de apenas contar caminhos como a complexidade ciclomática. G. Ann Campbell percebeu que nem todas as estruturas de código são igualmente difíceis de entender.',
  purpose: 'Avaliar o quão difícil é para um humano entender um pedaço de código, ajudando a identificar áreas que precisam de refatoração.',
  whyRedFlag: 'Alta complexidade cognitiva indica que o código é difícil de entender, aumentando o risco de bugs durante manutenção. Isso aponta para necessidade de refatoração, simplificação da lógica, ou quebra em funções menores. Código difícil de entender é código difícil de manter e evoluir.',
  eli5: 'Imagina que você está montando um quebra-cabeça. Alguns quebra-cabeças são fáceis de entender só de olhar, outros precisam que você pense muito. Cognitive Complexity mede o quanto você precisa pensar para entender um código.',
  detailed: 'Cognitive Complexity é uma métrica moderna que avalia o quão difícil é para um humano entender um pedaço de código. Diferente da Complexidade Ciclomática que conta todos os caminhos possíveis, a Cognitive Complexity ignora estruturas que são naturalmente fáceis de entender (como sequências simples) e penaliza mais pesadamente estruturas confusas (como ifs aninhados). A métrica aumenta quando há: breaks no fluxo linear, estruturas aninhadas, e recursão.',
  relatedHeuristics: ['cyclomatic-complexity', 'code-churn'],
  youtubeVideos: [
    { title: 'Cognitive Complexity - A new way of measuring understandability', url: 'https://www.youtube.com/watch?v=el9OKGrqU6o' },
  ],
  sources: [
    { title: 'Paper original - Cognitive Complexity: A new way of measuring understandability', url: 'https://www.sonarsource.com/resources/cognitive-complexity/' },
    { title: 'SonarSource - Documentação oficial', url: 'https://www.sonarsource.com/docs/CognitiveComplexity.pdf' },
  ],
};
