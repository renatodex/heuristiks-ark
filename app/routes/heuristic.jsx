import { Link } from "react-router";
import { heuristics, categories } from "../data/heuristics";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Icons from "react-icons/fa";

export function meta({ params }) {
  const heuristic = heuristics.find(h => h.id === params.id);
  if (!heuristic) {
    return [{ title: "Heurística não encontrada" }];
  }
  return [
    { title: `${heuristic.title} - Arca das Heurísticas` },
    { name: "description", content: heuristic.subtitle },
  ];
}

export default function Heuristic({ params }) {
  const { id } = params;
  const heuristic = heuristics.find(h => h.id === id);

  if (!heuristic) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-4xl font-bold text-[#ec4899] mb-4">
            Heurística não encontrada
          </h2>
          <Link to="/" className="text-[#06b6d4] hover:underline">
            Voltar para a home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const category = categories.find(c => c.id === heuristic.category);
  const IconComponent = Icons[heuristic.icon] || Icons.FaBrain;
  const relatedHeuristicsData = heuristic.relatedHeuristics
    .map(id => heuristics.find(h => h.id === id))
    .filter(Boolean);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Conheça ${heuristic.title}: ${heuristic.subtitle}`;

  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);

    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      instagram: `https://www.instagram.com/`,
      tiktok: `https://www.tiktok.com/`,
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const copyToClipboard = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 text-[#06b6d4] hover:text-[#8b5cf6] transition-colors"
        >
          <Icons.FaArrowLeft />
          Voltar para a Arca
        </Link>

        {/* Hero Section */}
        <div className="retro-card mb-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div
              className="text-6xl md:text-8xl"
              style={{ color: category?.color || '#8b5cf6' }}
            >
              <IconComponent />
            </div>

            <div className="flex-1">
              <div
                className="inline-block px-3 py-1 mb-4 text-xs retro-border"
                style={{ color: category?.color || '#8b5cf6' }}
              >
                {category?.emoji} {category?.name || 'Categoria'}
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold mb-3 retro-glow"
                style={{ color: category?.color || '#8b5cf6' }}
              >
                {heuristic.title}
              </h1>

              <p className="text-xl text-gray-300 mb-4">
                {heuristic.subtitle}
              </p>

              <p className="text-gray-400">
                {heuristic.shortDescription}
              </p>
            </div>
          </div>
        </div>

        {/* ELI5 - DESTAQUE */}
        <div className="relative mb-12 p-8 bg-gradient-to-br from-[#ec4899] to-[#8b5cf6] rounded-lg shadow-[0_0_30px_rgba(236,72,153,0.6)] transform hover:scale-102 transition-all">
          <div className="absolute top-4 right-4 text-6xl opacity-20">
            🎨
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">👶</div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white retro-glow">
                Explicando como se você tivesse 5 anos
              </h2>
              <p className="text-white/80 text-sm mt-1">Agora sim! 🎉</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-white leading-relaxed font-normal bg-black/20 p-6 rounded-lg border-2 border-white/30">
            {heuristic.eli5}
          </p>
        </div>

        {/* Share Section */}
        <div className="retro-card mb-12">
          <div className="flex items-center gap-4 flex-wrap">
            <Icons.FaShareAlt className="text-2xl text-[#8b5cf6]" />
            <span className="font-bold">Compartilhar:</span>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => handleShare('twitter')}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                <Icons.FaTwitter className="inline mr-1" /> Twitter
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 transition-colors"
              >
                <Icons.FaFacebook className="inline mr-1" /> Facebook
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Icons.FaLinkedin className="inline mr-1" /> LinkedIn
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 transition-colors"
              >
                <Icons.FaWhatsapp className="inline mr-1" /> WhatsApp
              </button>
              <button
                onClick={() => handleShare('instagram')}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Icons.FaInstagram className="inline mr-1" /> Instagram
              </button>
              <button
                onClick={() => handleShare('tiktok')}
                className="px-4 py-2 bg-black hover:bg-gray-900 transition-colors"
              >
                <Icons.FaTiktok className="inline mr-1" /> TikTok
              </button>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 retro-border hover:bg-[#8b5cf6]/20 transition-colors"
              >
                <Icons.FaCopy className="inline mr-1" /> Copiar Link
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* História */}
          <div className="retro-card">
            <div className="flex items-center gap-3 mb-4">
              <Icons.FaHistory className="text-2xl text-[#fbbf24]" />
              <h2 className="text-2xl font-bold text-[#fbbf24]">História</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {heuristic.history}
            </p>
          </div>

          {/* Inventor */}
          <div className="retro-card">
            <div className="flex items-center gap-3 mb-4">
              <Icons.FaUser className="text-2xl text-[#10b981]" />
              <h2 className="text-2xl font-bold text-[#10b981]">Quem Inventou</h2>
            </div>
            <p className="text-gray-300">
              <span className="font-bold text-[#10b981]">{heuristic.inventor}</span>
            </p>
            <p className="text-gray-500 mt-2">
              Ano: {heuristic.year}
            </p>
          </div>
        </div>

        {/* Purpose */}
        <div className="retro-card mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Icons.FaBullseye className="text-2xl text-[#ec4899]" />
            <h2 className="text-2xl font-bold text-[#ec4899]">Para que serve</h2>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            {heuristic.purpose}
          </p>
        </div>

        {/* Detailed Explanation */}
        <div className="retro-card mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Icons.FaGraduationCap className="text-2xl text-[#06b6d4]" />
            <h2 className="text-2xl font-bold text-[#06b6d4]">Explicação Detalhada</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {heuristic.detailed}
          </p>
        </div>

        {/* Related Heuristics */}
        {relatedHeuristicsData.length > 0 && (
          <div className="retro-card mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Icons.FaNetworkWired className="text-2xl text-[#8b5cf6]" />
              <h2 className="text-2xl font-bold text-[#8b5cf6]">
                Heurísticas Relacionadas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedHeuristicsData.map(related => {
                const relatedCat = categories.find(c => c.id === related.category);
                return (
                  <Link
                    key={related.id}
                    to={`/heuristica/${related.id}`}
                    className="p-4 border-2 border-[#8b5cf6]/50 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all"
                  >
                    <h3
                      className="font-bold mb-1"
                      style={{ color: relatedCat?.color || '#8b5cf6' }}
                    >
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {related.subtitle}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* YouTube Videos */}
        {heuristic.youtubeVideos && heuristic.youtubeVideos.length > 0 && (
          <div className="retro-card mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Icons.FaYoutube className="text-2xl text-red-500" />
              <h2 className="text-2xl font-bold text-red-500">
                Vídeos no YouTube
              </h2>
            </div>
            <div className="space-y-3">
              {heuristic.youtubeVideos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border-2 border-red-500/50 hover:border-red-500 hover:bg-red-500/10 transition-all"
                >
                  <Icons.FaYoutube className="inline text-red-500 mr-2" />
                  <span className="text-red-500">{video.title || 'Assistir no YouTube'} →</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Sources and References */}
        {heuristic.sources && heuristic.sources.length > 0 && (
          <div className="retro-card mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Icons.FaBookOpen className="text-2xl text-[#10b981]" />
              <h2 className="text-2xl font-bold text-[#10b981]">
                Fontes e Referências
              </h2>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Quer se aprofundar? Confira essas fontes oficiais:
            </p>
            <div className="space-y-3">
              {heuristic.sources.map((source, index) => (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border-2 border-[#10b981]/50 hover:border-[#10b981] hover:bg-[#10b981]/10 transition-all"
                >
                  <Icons.FaExternalLinkAlt className="inline text-[#10b981] mr-2" />
                  <span className="text-[#10b981]">{source.title} →</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
