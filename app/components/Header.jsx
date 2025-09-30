import { Link } from "react-router";
import { FaArchway, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="border-b-2 border-[#8b5cf6] bg-[#050508]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <FaArchway className="text-4xl text-[#8b5cf6] group-hover:text-[#06b6d4] transition-colors" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold retro-glow text-[#8b5cf6]">
                ARCA DAS HEURÍSTICAS
              </h1>
              <p className="text-xs md:text-sm text-gray-400">
                Conceitos poderosos para todos
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              to="/sobre"
              className="flex items-center gap-2 px-4 py-2 retro-border hover:bg-[#8b5cf6]/20 transition-colors"
            >
              <FaUser />
              <span className="hidden md:inline">Sobre</span>
            </Link>
            <a
              href="https://r-labs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#8b5cf6] hover:bg-[#06b6d4] text-white transition-colors"
            >
              r-labs.dev
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
