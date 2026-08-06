import { heuristics as baseHeuristics } from './heuristics/index.js';
import { stories } from './stories/index.js';

export { categories } from './categories.js';

// Heurísticas clássicas + histórias que viraram lição (type: 'story')
export const heuristics = [...baseHeuristics, ...stories];
