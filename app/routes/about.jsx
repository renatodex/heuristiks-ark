import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowLeft, FaCode, FaHeart, FaRocket } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../lib/i18n";

export function meta() {
  return [
    { title: "About - Heuristics Ark" },
    { name: "description", content: "Meet the creator of the Heuristics Ark - Renato Alves" },
  ];
}

export default function About() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const isPt = lang === 'pt';

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
          {t.backToArk}
        </Link>

        {/* Hero */}
        <div className="retro-card mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 retro-glow text-[#06b6d4]">
            {isPt ? 'SOBRE O PROJETO' : 'ABOUT THE PROJECT'}
          </h1>
          <p className="text-xl text-gray-300">
            {isPt ? 'Por que catalogar heurísticas?' : 'Why catalog heuristics?'}
          </p>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="retro-card text-center">
            <FaCode className="text-5xl text-[#8b5cf6] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2 text-[#8b5cf6]">
              {isPt ? 'Conceitos Poderosos' : 'Powerful Concepts'}
            </h2>
            <p className="text-gray-400">
              {isPt
                ? 'Heurísticas criadas em programação têm aplicações universais'
                : 'Heuristics born in programming have universal applications'}
            </p>
          </div>

          <div className="retro-card text-center">
            <FaHeart className="text-5xl text-[#ec4899] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2 text-[#ec4899]">
              {isPt ? 'Para Todos' : 'For Everyone'}
            </h2>
            <p className="text-gray-400">
              {isPt
                ? 'Conhecimento que deveria ser acessível a todas as pessoas'
                : 'Knowledge that should be accessible to everyone'}
            </p>
          </div>

          <div className="retro-card text-center">
            <FaRocket className="text-5xl text-[#fbbf24] mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2 text-[#fbbf24]">
              {isPt ? 'Aplicação Prática' : 'Practical Application'}
            </h2>
            <p className="text-gray-400">
              {isPt
                ? 'Útil para qualquer profissão e área da vida'
                : 'Useful for any profession and any area of life'}
            </p>
          </div>
        </div>

        {/* About Creator */}
        <div className="retro-card mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#06b6d4]">
            {isPt ? 'Sobre o Criador' : 'About the Creator'}
          </h2>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            {isPt ? (
              <>
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
              </>
            ) : (
              <>
                <p>
                  Hi! I'm <span className="text-[#8b5cf6] font-bold">Renato Alves</span>,
                  a developer and the founder of{" "}
                  <a
                    href="https://r-labs.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#06b6d4] hover:text-[#8b5cf6] transition-colors font-bold"
                  >
                    r-labs.dev
                  </a>
                  , an agency focused on building elegant, efficient technology solutions.
                </p>

                <p>
                  Over the years working with software development, I realized that
                  many of the concepts and heuristics we use in everyday programming
                  are actually universal principles that can be applied to
                  <span className="text-[#fbbf24]"> any area of life</span>.
                </p>

                <p>
                  Things like <span className="text-[#ec4899]">Parkinson's Law</span> (work expands
                  to fill the time available), <span className="text-[#10b981]">Bike Shedding</span> (spending
                  too much time on trivial decisions), and the <span className="text-[#8b5cf6]">Pareto Principle</span> (80/20)
                  are powerful mental tools for anyone - not just programmers.
                </p>

                <p>
                  That's why I created the <span className="text-[#06b6d4] font-bold">Heuristics Ark</span>:
                  a place to catalog, explain, and share these concepts in an
                  accessible, elegant, and visual way. My mission is to make this
                  knowledge available to everyone.
                </p>

                <p>
                  This project is open source and constantly evolving. If you have
                  suggestions for new heuristics to add or improvements to the site,
                  I'd love to hear them!
                </p>

                <p className="text-[#8b5cf6] font-bold">
                  Every heuristic has its own page with a shareable link,
                  so you can spread this knowledge!
                </p>
              </>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-[#8b5cf6]/30">
            <h3 className="text-xl font-bold mb-4 text-[#8b5cf6]">
              {isPt ? 'Entre em Contato' : 'Get in Touch'}
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://r-labs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#8b5cf6] hover:bg-[#06b6d4] transition-colors"
              >
                {isPt ? 'Visite r-labs.dev' : 'Visit r-labs.dev'}
              </a>
              <Link
                to="/"
                className="px-6 py-3 retro-border hover:bg-[#8b5cf6]/20 transition-colors"
              >
                {isPt ? 'Explorar Heurísticas' : 'Explore Heuristics'}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
