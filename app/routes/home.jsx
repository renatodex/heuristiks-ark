import { useState } from "react";
import { heuristics, categories } from "../data/heuristics";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeuristicCard from "../components/HeuristicCard";
import HeroAnimation from "../components/HeroAnimation";

export function meta() {
  return [
    { title: "Arca das Heurísticas - Conceitos poderosos para todos" },
    { name: "description", content: "Catálogo elegante de heurísticas de programação e áreas técnicas, úteis para todas as pessoas e profissões." },
  ];
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredHeuristics = selectedCategory
    ? heuristics.filter(h => h.category === selectedCategory)
    : heuristics;

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
              <span className="inline-block px-4 py-1.5 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full text-sm font-semibold text-[#8b5cf6] tracking-wide uppercase backdrop-blur-sm">
                Catálogo de Conhecimento
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="gradient-text retro-glow">Arca das</span>
              <br />
              <span className="gradient-text retro-glow">Heurísticas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
              Princípios poderosos de programação e áreas técnicas que são{" "}
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

        {/* Category Filter */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mt-6">
              <span className="gradient-text">Explorar</span>
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
