import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowLeft, FaCode, FaHeart, FaRocket } from "react-icons/fa";

export function meta() {
  return [
    { title: "Sobre - Arca das Heurísticas" },
    { name: "description", content: "Conheça o criador da Arca das Heurísticas - Renato Alves" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 text-[#06b6d4] hover:text-[#8b5cf6] transition-colors"
        >
          <FaArrowLeft />
          Voltar para a Arca
        </Link>

        {/* Hero */}
        <div className="retro-card mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 retro-glow text-[#06b6d4]">
            SOBRE O PROJETO
          </h1>
          <p className="text-xl text-gray-300">
            Por que catalogar heurísticas?
          </p>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="retro-card text-center">
            <FaCode className="text-5xl text-[#8b5cf6] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2 text-[#8b5cf6]">
              Conceitos Poderosos
            </h2>
            <p className="text-gray-400">
              Heurísticas criadas em programação têm aplicações universais
            </p>
          </div>

          <div className="retro-card text-center">
            <FaHeart className="text-5xl text-[#ec4899] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2 text-[#ec4899]">
              Para Todos
            </h2>
            <p className="text-gray-400">
              Conhecimento que deveria ser acessível a todas as pessoas
            </p>
          </div>

          <div className="retro-card text-center">
            <FaRocket className="text-5xl text-[#fbbf24] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2 text-[#fbbf24]">
              Aplicação Prática
            </h2>
            <p className="text-gray-400">
              Útil para qualquer profissão e área da vida
            </p>
          </div>
        </div>

        {/* About Creator */}
        <div className="retro-card mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#06b6d4]">
            Sobre o Criador
          </h2>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Olá! Eu sou <span className="text-[#8b5cf6] font-bold">Renato Alves</span>,
              desenvolvedor e fundador da{" "}
              <a
                href="https://r-labs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06b6d4] hover:text-[#8b5cf6] transition-colors font-bold"
              >
                r-labs.dev
              </a>
              , uma agência focada em criar soluções tecnológicas elegantes e eficientes.
            </p>

            <p>
              Ao longo dos anos trabalhando com desenvolvimento de software, percebi que
              muitos dos conceitos e heurísticas que usamos no dia a dia da programação
              são, na verdade, princípios universais que podem ser aplicados em
              <span className="text-[#fbbf24]"> qualquer área da vida</span>.
            </p>

            <p>
              Coisas como a <span className="text-[#ec4899]">Lei de Parkinson</span> (o trabalho se expande
              para preencher o tempo disponível), <span className="text-[#10b981]">Bike Shedding</span> (gastar
              muito tempo em decisões triviais), e o <span className="text-[#8b5cf6]">Princípio de Pareto</span> (80/20)
              são ferramentas mentais poderosas para qualquer pessoa - não apenas programadores.
            </p>

            <p>
              Por isso criei a <span className="text-[#06b6d4] font-bold">Arca das Heurísticas</span>:
              um lugar para catalogar, explicar e compartilhar esses conceitos de forma
              acessível, elegante e visual. Minha missão é tornar esse conhecimento
              disponível para todos.
            </p>

            <p>
              Este projeto é open source e está em constante evolução. Se você tiver
              sugestões de novas heurísticas para adicionar ou melhorias no site,
              ficarei feliz em ouvir!
            </p>

            <p className="text-[#8b5cf6] font-bold">
              Cada heurística tem sua própria página com um link compartilhável,
              para que você possa espalhar esse conhecimento!
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#8b5cf6]/30">
            <h3 className="text-xl font-bold mb-4 text-[#8b5cf6]">
              Entre em Contato
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://r-labs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#8b5cf6] hover:bg-[#06b6d4] transition-colors"
              >
                Visite r-labs.dev
              </a>
              <Link
                to="/"
                className="px-6 py-3 retro-border hover:bg-[#8b5cf6]/20 transition-colors"
              >
                Explorar Heurísticas
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
