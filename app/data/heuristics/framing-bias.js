export default {
  id: 'framing-bias',
  title: 'Framing Bias',
  subtitle: 'A forma como apresentamos a informação muda a decisão',
  category: 'ux',
  icon: 'FaFramer',
  shortDescription: 'Pessoas reagem de forma diferente à mesma informação dependendo de como ela é apresentada.',
  inventor: 'Amos Tversky e Daniel Kahneman',
  year: '1981',
  history: 'Os psicólogos Tversky e Kahneman demonstraram em experimentos clássicos que pessoas fazem escolhas diferentes dependendo se a informação é enquadrada em termos de ganhos ou perdas. No famoso "problema asiático da doença", participantes escolhiam opções diferentes quando o mesmo cenário era descrito em termos de vidas salvas vs vidas perdidas, mesmo sendo matematicamente idêntico.',
  purpose: 'Demonstrar que o enquadramento da informação influencia profundamente decisões e percepções.',
  whyRedFlag: 'Quando interfaces apresentam informações de forma não intencional ou enganosa, podem manipular usuários ou causar decisões ruins. "Somente 3 restantes!" cria urgência artificial. "95% de satisfação" vs "5% insatisfeitos" têm impactos diferentes. Isso pode ser usado eticamente (destacar benefícios reais) ou manipulativamente (dark patterns). A oportunidade está em enquadrar informações de forma honesta mas persuasiva, destacando valor real sem enganar.',
  eli5: 'Se eu te pergunto "quer brincar lá fora onde está chovendo?" você diz não. Mas se pergunto "quer brincar lá fora e pular nas poças?" você diz sim! É a mesma coisa, mas o jeito que eu falei mudou sua vontade!',
  detailed: 'Framing Bias (Viés de Enquadramento) é a tendência de reagir de forma diferente à mesma informação dependendo de como é apresentada. Exemplos: "90% livre de gordura" é mais atraente que "10% de gordura"; "salve $50" é mais motivador que "pague $450 ao invés de $500"; "chance de 90% de sucesso" soa melhor que "10% de falha". Em UX, isso se manifesta em: microcopy persuasivo, botões com framing positivo ("Começar grátis" vs "Não pagar nada"), progresso mostrado como "75% completo" vs "25% restante", preços com âncoras ("de R$200 por R$100"). Use eticamente para destacar valor real, não para manipular ou enganar usuários.',
  relatedHeuristics: ['goal-gradient-effect', 'loss-aversion', 'anchoring'],
  youtubeVideos: [
    { title: 'The Framing Effect - Cognitive Bias', url: 'https://www.youtube.com/watch?v=VJG7GXJvmU8' },
  ],
  sources: [
    { title: 'Paper Original - The Framing of Decisions (Tversky & Kahneman, 1981)', url: 'https://www.uzh.ch/cmsssl/suz/dam/jcr:ffffffff-fad3-547b-ffff-ffffe54d58af/10.18_kahneman_tversky_81.pdf' },
    { title: 'Wikipedia - Framing Effect', url: 'https://en.wikipedia.org/wiki/Framing_effect_(psychology)' },
    { title: 'NNGroup - Framing Effect in UX', url: 'https://www.nngroup.com/articles/framing-effect/' },
  ],
};
