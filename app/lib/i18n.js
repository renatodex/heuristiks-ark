export const ui = {
  en: {
    // Header
    brandTitle: 'HEURISTICS ARK',
    tagline: 'Powerful concepts for everyone',
    navAbout: 'About',
    // Footer
    footerBrand: 'Heuristics Ark',
    footerDescription: 'Powerful concepts from programming and technical fields, useful for everyone in any profession.',
    footerLinks: 'Links',
    footerHome: 'Home',
    footerCreatedBy: 'Created by',
    footerCopyright: '© 2025 Heuristics Ark. Made with 💜 by',
    // Heuristic card
    readMore: 'Read more',
    // Home
    heroBadge: 'Knowledge Catalog',
    heroTitle1: 'HEURISTICS',
    heroTitle2: 'ARK',
    statHeuristics: 'Heuristics',
    statCategories: 'Categories',
    statFree: 'Free',
    whatTitle: 'What are Heuristics?',
    clickToCollapse: 'Click to collapse',
    clickToLearn: 'Click to learn more',
    openInitiative: '100% Free and Open Initiative',
    cardUniversalTitle: 'Universally Applicable',
    cardUniversalText: 'Works in any area: work, studies, personal life',
    cardFastTitle: 'Fast Decisions',
    cardFastText: 'Mental shortcuts for solving complex problems',
    cardWisdomTitle: 'Collective Wisdom',
    cardWisdomText: 'Knowledge accumulated over decades of experience',
    exampleTitle: 'Practical Example',
    explore: 'EXPLORE',
    resultSingular: 'result',
    resultPlural: 'results',
    allCategories: 'All',
    emptyTitle: 'No heuristics found',
    emptyHint: 'Try selecting another category',
    // Heuristic page
    backToArk: 'Back to the Ark',
    back: 'Back',
    previous: 'Previous',
    next: 'Next',
    keyboardHint: 'Use ← → to navigate',
    eli5Title: "Explain it like I'm five",
    eli5Sub: "Now we're talking! 🎉",
    redFlagTitle: 'Why is this a Red Flag?',
    redFlagSub: 'Watch out for this! ⚡',
    purposeTitle: "What it's for",
    detailedTitle: 'Detailed Explanation',
    historyTitle: 'History',
    inventorTitle: 'Who Created It',
    yearLabel: 'Year',
    shareTitle: 'Share',
    copyLink: 'Copy Link',
    linkCopied: 'Link copied to clipboard!',
    related: 'Related',
    relatedHeuristics: 'Related Heuristics',
    youtubeVideos: 'YouTube Videos',
    watchOnYoutube: 'Watch on YouTube',
    sourcesTitle: 'Sources & References',
    sourcesHint: 'Want to go deeper? Check out these official sources:',
    notFound: 'Heuristic not found',
    backHome: 'Back to home',
    shareIntro: 'Check out',
  },
  pt: {
    // Header
    brandTitle: 'ARCA DAS HEURÍSTICAS',
    tagline: 'Conceitos poderosos para todos',
    navAbout: 'Sobre',
    // Footer
    footerBrand: 'Arca das Heurísticas',
    footerDescription: 'Conceitos poderosos de programação e áreas técnicas, úteis para todas as pessoas e profissões.',
    footerLinks: 'Links',
    footerHome: 'Home',
    footerCreatedBy: 'Criado por',
    footerCopyright: '© 2025 Arca das Heurísticas. Criado com 💜 por',
    // Heuristic card
    readMore: 'Ler mais',
    // Home
    heroBadge: 'Catálogo de Conhecimento',
    heroTitle1: 'ARCA DAS',
    heroTitle2: 'HEURÍSTICAS',
    statHeuristics: 'Heurísticas',
    statCategories: 'Categorias',
    statFree: 'Gratuito',
    whatTitle: 'O que são Heurísticas?',
    clickToCollapse: 'Clique para recolher',
    clickToLearn: 'Clique para aprender mais',
    openInitiative: 'Iniciativa 100% Gratuita e Aberta',
    cardUniversalTitle: 'Universalmente Aplicável',
    cardUniversalText: 'Funciona em qualquer área: trabalho, estudos, vida pessoal',
    cardFastTitle: 'Decisões Rápidas',
    cardFastText: 'Atalhos mentais para resolver problemas complexos',
    cardWisdomTitle: 'Sabedoria Coletiva',
    cardWisdomText: 'Conhecimento acumulado de décadas de experiência',
    exampleTitle: 'Exemplo Prático',
    explore: 'EXPLORAR',
    resultSingular: 'resultado',
    resultPlural: 'resultados',
    allCategories: 'Todas',
    emptyTitle: 'Nenhuma heurística encontrada',
    emptyHint: 'Tente selecionar outra categoria',
    // Heuristic page
    backToArk: 'Voltar para a Arca',
    back: 'Voltar',
    previous: 'Anterior',
    next: 'Próxima',
    keyboardHint: 'Use ← → para navegar',
    eli5Title: 'Explicando como se você tivesse 5 anos',
    eli5Sub: 'Agora sim! 🎉',
    redFlagTitle: 'Por que isso é uma Red Flag?',
    redFlagSub: 'Atenção ao problema! ⚡',
    purposeTitle: 'Para que serve',
    detailedTitle: 'Explicação Detalhada',
    historyTitle: 'História',
    inventorTitle: 'Quem Inventou',
    yearLabel: 'Ano',
    shareTitle: 'Compartilhar',
    copyLink: 'Copiar Link',
    linkCopied: 'Link copiado para a área de transferência!',
    related: 'Relacionadas',
    relatedHeuristics: 'Heurísticas Relacionadas',
    youtubeVideos: 'Vídeos no YouTube',
    watchOnYoutube: 'Assistir no YouTube',
    sourcesTitle: 'Fontes e Referências',
    sourcesHint: 'Quer se aprofundar? Confira essas fontes oficiais:',
    notFound: 'Heurística não encontrada',
    backHome: 'Voltar para a home',
    shareIntro: 'Conheça',
  },
};

// Achata os campos localizados (title, subtitle, eli5...) da heurística
// para o idioma ativo, mantendo os campos compartilhados (id, icon, sources...).
export function localizeHeuristic(heuristic, lang) {
  if (!heuristic) return heuristic;
  const content = heuristic[lang] || heuristic.en;
  return content ? { ...heuristic, ...content } : heuristic;
}

export function localizeCategory(category, lang) {
  if (!category) return category;
  const name =
    typeof category.name === 'object'
      ? category.name[lang] || category.name.en
      : category.name;
  return { ...category, name };
}
