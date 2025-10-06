import { useState, useEffect } from "react";
import { heuristics, categories } from "../data/heuristics";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeuristicCard from "../components/HeuristicCard";
import HeroAnimation from "../components/HeroAnimation";

export function meta() {
  return [
    { title: "Arca das Heurísticas - Conhecimento poderoso para todos" },
    { name: "description", content: "Catálogo gratuito e aberto de heurísticas: princípios práticos e atemporais úteis para todas as pessoas e profissões. Aprenda e aplique em qualquer área da vida." },
  ];
}

// Função para embaralhar array usando algoritmo Fisher-Yates
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isExplanationOpen, setIsExplanationOpen] = useState(false);
  const [shuffledHeuristics, setShuffledHeuristics] = useState(heuristics);

  // Embaralha as heurísticas apenas no cliente após a hidratação
  useEffect(() => {
    setShuffledHeuristics(shuffleArray(heuristics));
  }, []);

  const filteredHeuristics = selectedCategory
    ? shuffledHeuristics.filter(h => h.category === selectedCategory)
    : shuffledHeuristics;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Full Width */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        {/* Animação 3D de fundo - Full Width */}
        <HeroAnimation />

        {/* Conteúdo centralizado */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full text-xs font-semibold text-[#8b5cf6] tracking-wide uppercase backdrop-blur-sm">
                Catálogo de Conhecimento
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              <span className="gradient-text retro-glow">ARCA DAS</span>
              <br />
              <span className="gradient-text retro-glow">HEURÍSTICAS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
              Princípios poderosos e atemporais que são{" "}
              <span className="text-[#8b5cf6] font-semibold">úteis para todas as pessoas</span> e profissões.
              Catalogados de forma elegante e acessível.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <div className="retro-card text-center py-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{heuristics.length}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Heurísticas</div>
              </div>
              <div className="retro-card text-center py-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{categories.length}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Categorias</div>
              </div>
              <div className="retro-card text-center py-6 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">100%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Gratuito</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* O que são Heurísticas - Seção Explicativa */}
        <section className="my-10 max-w-8xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/90 border border-purple-500/20 rounded-xl p-0 transition-all duration-300 ease-out shadow-lg shadow-black/30 hover:shadow-purple-500/10 hover:shadow-xl hover:-translate-y-1 hover:border-purple-500/40 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-purple-500/50 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 bg-gradient-to-br from-[#8b5cf6]/10 to-[#ec4899]/10 border-2 border-[#8b5cf6]/30">
            {/* Header Colapsável */}
            <button
              onClick={() => setIsExplanationOpen(!isExplanationOpen)}
              className="cursor-pointer w-full p-6 md:p-8 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-4xl md:text-5xl">💡</div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-1">
                      <span className="gradient-text retro-glow">O que são Heurísticas?</span>
                    </h2>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {isExplanationOpen ? 'Clique para recolher' : 'Clique para aprender mais'}
                    </p>
                  </div>
                </div>
                <div className={`text-2xl md:text-3xl text-[#8b5cf6] transition-transform duration-300 ${isExplanationOpen ? 'rotate-180' : ''}`}>
                  ▼
                </div>
              </div>

              {/* Badge - Iniciativa Aberta */}
              <div className="flex justify-start mt-4 ml-14 md:ml-20">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#10b981]/20 border border-[#10b981]/40 rounded-full text-xs font-semibold text-[#10b981] backdrop-blur-sm">
                  <span>✨</span> Iniciativa 100% Gratuita e Aberta
                </span>
              </div>
            </button>

            {/* Conteúdo Colapsável */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                isExplanationOpen
                  ? 'max-h-[2000px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 md:px-12 pb-8 md:pb-12">
                {/* Explicação Principal */}
                <div className="space-y-6 mb-10">
                  <p className="pt-5 text-lg md:text-xl text-gray-300 leading-relaxed">
                    <span className="text-[#8b5cf6] font-bold">Heurísticas</span> são como{" "}
                    <span className="text-white font-semibold">tocar um solo de guitarra decorado</span>. 🎶{" "}
                    Você não pensa em cada nota, os dedos já vão sozinhos porque sabem o caminho.
                  </p>

                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    É a nossa <span className="text-[#ec4899]">mente agindo no automático</span> usando os atalhos mentais que criamos para realizar determinadas tarefas.
                    <br/>Pensa numa <span className="text-white font-semibold">receita de bolo da avó:</span> não tem medidas exatas,
                    mas dá certo quase sempre. Heurísticas são isso: regras práticas que a gente usa pra decidir rápido sem complicar.
                  </p>

                  <div className="bg-[#8b5cf6]/10 border-l-4 border-[#8b5cf6] p-4 rounded-r">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="font-bold text-[#8b5cf6]">🌍 Nossa Missão:</span> Democratizar o acesso a heurísticas poderosas,
                      tornando este conhecimento acessível e compreensível para todas as pessoas, independente da sua área de atuação.
                      Este é um projeto aberto, gratuito e feito com amor para a comunidade.
                    </p>
                  </div>
                </div>

                {/* Cards de Exemplos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-black/20 backdrop-blur-sm p-5 rounded-lg border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/40 transition-all">
                    <div className="text-3xl mb-3">🎯</div>
                    <h3 className="text-[#8b5cf6] font-bold mb-2 text-sm">Universalmente Aplicável</h3>
                    <p className="text-xs text-gray-400">
                      Funciona em qualquer área: trabalho, estudos, vida pessoal
                    </p>
                  </div>

                  <div className="bg-black/20 backdrop-blur-sm p-5 rounded-lg border border-[#ec4899]/20 hover:border-[#ec4899]/40 transition-all">
                    <div className="text-3xl mb-3">⚡</div>
                    <h3 className="text-[#ec4899] font-bold mb-2 text-sm">Decisões Rápidas</h3>
                    <p className="text-xs text-gray-400">
                      Atalhos mentais para resolver problemas complexos
                    </p>
                  </div>

                  <div className="bg-black/20 backdrop-blur-sm p-5 rounded-lg border border-[#06b6d4]/20 hover:border-[#06b6d4]/40 transition-all">
                    <div className="text-3xl mb-3">🧠</div>
                    <h3 className="text-[#06b6d4] font-bold mb-2 text-sm">Sabedoria Coletiva</h3>
                    <p className="text-xs text-gray-400">
                      Conhecimento acumulado de décadas de experiência
                    </p>
                  </div>
                </div>

                {/* Exemplo Prático */}
                <div className="bg-gradient-to-r from-[#fbbf24]/10 to-[#10b981]/10 p-6 rounded-lg border border-[#fbbf24]/20">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">📚</div>
                    <div>
                      <h3 className="text-[#fbbf24] font-bold mb-2">Exemplo Prático</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        <span className="font-semibold text-white">Princípio de Pareto (80/20):</span> 80% dos resultados
                        vêm de 20% dos esforços. Você pode aplicar isso ao estudar para uma prova, organizar sua casa,
                        priorizar tarefas no trabalho, ou até escolher em que investir seu tempo livre.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mt-6">
              <span className="gradient-text">EXPLORAR</span>
            </h2>
            <span className="text-sm text-gray-400 font-medium">
              {filteredHeuristics.length} {filteredHeuristics.length === 1 ? 'resultado' : 'resultados'}
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`retro-button cursor-pointer ${
                selectedCategory === null
                  ? 'bg-[#8b5cf6] text-white border-[#8b5cf6]'
                  : ''
              }`}
            >
              🌟 Todas
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`retro-button cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'text-white border-opacity-60'
                    : ''
                }`}
                style={{
                  backgroundColor: selectedCategory === cat.id ? cat.color : 'transparent',
                  borderColor: selectedCategory === cat.id ? cat.color : undefined
                }}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Heuristics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {filteredHeuristics.map(heuristic => {
            const category = categories.find(c => c.id === heuristic.category);
            return (
              <HeuristicCard
                key={heuristic.id}
                heuristic={heuristic}
                categoryColor={category?.color || '#8b5cf6'}
                categoryName={category?.name || 'Categoria'}
                categoryEmoji={category?.emoji || '📝'}
              />
            );
          })}
        </div>

        {filteredHeuristics.length === 0 && (
          <div className="text-center py-20 retro-card max-w-md mx-auto">
            <p className="text-xl text-gray-400 mb-2">
              Nenhuma heurística encontrada
            </p>
            <p className="text-sm text-gray-500">
              Tente selecionar outra categoria
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
