import { useState } from "react";
import { heuristics, categories } from "../data/heuristics";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeuristicCard from "../components/HeuristicCard";

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

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 retro-glow text-[#06b6d4]">
            BEM-VINDO À ARCA
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Heurísticas são princípios poderosos criados em programação e áreas técnicas,
            mas que são úteis para <span className="text-[#8b5cf6] font-bold">todas as pessoas e profissões</span>.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#fbbf24]">Filtrar por Categoria</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 retro-border transition-all ${
                selectedCategory === null
                  ? 'bg-[#8b5cf6] text-white'
                  : 'hover:bg-[#8b5cf6]/20'
              }`}
            >
              Todas
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 retro-border transition-all ${
                  selectedCategory === cat.id
                    ? 'text-white'
                    : 'hover:bg-[#8b5cf6]/20'
                }`}
                style={{
                  backgroundColor: selectedCategory === cat.id ? cat.color : 'transparent'
                }}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Heuristics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHeuristics.map(heuristic => {
            const category = categories.find(c => c.id === heuristic.category);
            return (
              <HeuristicCard
                key={heuristic.id}
                heuristic={heuristic}
                categoryColor={category?.color || '#8b5cf6'}
              />
            );
          })}
        </div>

        {filteredHeuristics.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">
              Nenhuma heurística encontrada nesta categoria.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
