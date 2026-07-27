import { Link } from "react-router";
import { FaArchway, FaUser } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { ui } from "../lib/i18n";

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const buttonClass = (active) =>
    `px-2.5 py-1.5 text-xs font-bold cursor-pointer transition-colors ${
      active
        ? "bg-[#8b5cf6] text-white"
        : "text-gray-400 hover:text-[#8b5cf6] hover:bg-[#8b5cf6]/10"
    }`;

  return (
    <div className="flex items-center retro-border overflow-hidden" role="group" aria-label="Language">
      <button onClick={() => setLang("en")} className={buttonClass(lang === "en")} aria-pressed={lang === "en"}>
        EN
      </button>
      <button onClick={() => setLang("pt")} className={buttonClass(lang === "pt")} aria-pressed={lang === "pt"}>
        PT
      </button>
    </div>
  );
}

export default function Header() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-[#8b5cf6]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#8b5cf6] opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
              <FaArchway className="text-4xl text-[#8b5cf6] relative z-10 group-hover:text-[#06b6d4] transition-all duration-300 transform group-hover:scale-110" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
                <span className="gradient-text retro-glow">{t.brandTitle}</span>
              </h1>
              <p className="text-xs lg:text-sm text-gray-400 font-medium tracking-wide mt-0.5">
                {t.tagline}
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              to="/sobre"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium retro-button hover:text-[#8b5cf6] transition-colors"
            >
              <FaUser className="text-sm" />
              <span className="hidden sm:inline">{t.navAbout}</span>
            </Link>
            <a
              href="https://r-labs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button-primary text-sm font-semibold"
            >
              <span className="hidden sm:inline">r-labs.dev</span>
              <span className="sm:hidden">r-labs</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
