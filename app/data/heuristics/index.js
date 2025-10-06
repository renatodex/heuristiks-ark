import cognitiveComplexity from './cognitive-complexity.js';
import cyclomaticComplexity from './cyclomatic-complexity.js';
import bikeShedding from './bike-shedding.js';
import codeChurn from './code-churn.js';
import parkinsonsLaw from './parkinsons-law.js';
import brooksLaw from './brooks-law.js';
import idempotence from './idempotence.js';
import paretoPrinciple from './pareto-principle.js';
import overengineering from './overengineering.js';
import srp from './srp.js';
import ocp from './ocp.js';
import lsp from './lsp.js';
import isp from './isp.js';
import dip from './dip.js';
import conwaysLaw from './conways-law.js';
import pola from './pola.js';
import busFactor from './bus-factor.js';
import ubiquitousLanguage from './ubiquitous-language.js';
import knowledgeSilos from './knowledge-silos.js';
import shotgunSurgery from './shotgun-surgery.js';
import dataClumps from './data-clumps.js';
import changeAmplification from './change-amplification.js';
import primitiveObsession from './primitive-obsession.js';
import temporalCoupling from './temporal-coupling.js';
import impedanceMismatch from './impedance-mismatch.js';
import goodhartsLaw from './goodharts-law.js';
import aestheticUsabilityEffect from './aesthetic-usability-effect.js';
import fittsLaw from './fitts-law.js';
import hicksLaw from './hicks-law.js';
import jakobsLaw from './jakobs-law.js';
import millersLaw from './millers-law.js';
import dohertyThreshold from './doherty-threshold.js';
import peakEndRule from './peak-end-rule.js';
import teslersLaw from './teslers-law.js';
import vonRestorffEffect from './von-restorff-effect.js';
import zeigarnikEffect from './zeigarnik-effect.js';
import serialPositionEffect from './serial-position-effect.js';
import goalGradientEffect from './goal-gradient-effect.js';
import postelsLaw from './postels-law.js';
import occamsRazor from './occams-razor.js';

// Função para embaralhar array usando algoritmo Fisher-Yates
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const allHeuristics = [
  cognitiveComplexity,
  cyclomaticComplexity,
  bikeShedding,
  codeChurn,
  parkinsonsLaw,
  brooksLaw,
  idempotence,
  paretoPrinciple,
  overengineering,
  srp,
  ocp,
  lsp,
  isp,
  dip,
  conwaysLaw,
  pola,
  busFactor,
  ubiquitousLanguage,
  knowledgeSilos,
  shotgunSurgery,
  dataClumps,
  changeAmplification,
  primitiveObsession,
  temporalCoupling,
  impedanceMismatch,
  goodhartsLaw,
  aestheticUsabilityEffect,
  fittsLaw,
  hicksLaw,
  jakobsLaw,
  millersLaw,
  dohertyThreshold,
  peakEndRule,
  teslersLaw,
  vonRestorffEffect,
  zeigarnikEffect,
  serialPositionEffect,
  goalGradientEffect,
  postelsLaw,
  occamsRazor,
];

// Embaralha as heurísticas para não ficar tudo agrupado por categoria
export const heuristics = allHeuristics;

export default heuristics;
