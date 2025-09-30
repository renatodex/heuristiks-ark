export default function Footer() {
  return (
    <footer className="border-t border-[#8b5cf6]/10 bg-gradient-to-b from-transparent to-[#0a0a0f] mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-2">
              Arca das Heurísticas
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Conceitos poderosos de programação e áreas técnicas, úteis para todas as pessoas e profissões.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="https://r-labs.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#8b5cf6] transition-colors"
                >
                  r-labs.dev →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Criado por
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              <a
                href="https://r-labs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b5cf6] hover:text-[#06b6d4] font-medium transition-colors"
              >
                Renato Alves
              </a>
              <br />
              <span className="text-gray-500">@ r-labs.dev</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#8b5cf6]/5">
          <p className="text-center text-xs text-gray-500">
            © 2025 Arca das Heurísticas. Criado com 💜 por{" "}
            <a
              href="https://r-labs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b5cf6] hover:text-[#06b6d4] transition-colors font-medium"
            >
              r-labs.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
