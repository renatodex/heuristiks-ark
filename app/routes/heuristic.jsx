import { Link, useNavigate } from "react-router";
import { useEffect } from "react";
import { heuristics, categories } from "../data/heuristics";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Icons from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { ui, localizeHeuristic, localizeCategory } from "../lib/i18n";

export function meta({ params }) {
  const heuristic = heuristics.find(h => h.id === params.id);
  if (!heuristic) {
    return [{ title: "Heuristic not found" }];
  }
  const en = heuristic.en || heuristic;
  return [
    { title: `${en.title} - Heuristics Ark` },
    { name: "description", content: en.subtitle },
  ];
}

export default function Heuristic({ params }) {
  const { id } = params;
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = ui[lang];
  const rawHeuristic = heuristics.find(h => h.id === id);

  // Navegação entre heurísticas
  const currentIndex = heuristics.findIndex(h => h.id === id);
  const previousHeuristic = localizeHeuristic(
    heuristics[currentIndex - 1] || heuristics[heuristics.length - 1],
    lang
  );
  const nextHeuristic = localizeHeuristic(
    heuristics[currentIndex + 1] || heuristics[0],
    lang
  );

  // Navegação por teclado (setas)
  useEffect(() => {
    if (!rawHeuristic) return;

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        navigate(`/heuristica/${previousHeuristic.id}`);
      } else if (e.key === 'ArrowRight') {
        navigate(`/heuristica/${nextHeuristic.id}`);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate, rawHeuristic, previousHeuristic.id, nextHeuristic.id]);

  if (!rawHeuristic) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-4xl font-bold text-[#ec4899] mb-4">
            {t.notFound}
          </h2>
          <Link to="/" className="text-[#06b6d4] hover:underline">
            {t.backHome}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const heuristic = localizeHeuristic(rawHeuristic, lang);
  const category = localizeCategory(
    categories.find(c => c.id === rawHeuristic.category),
    lang
  );
  const relatedHeuristicsData = rawHeuristic.relatedHeuristics
    .map(relatedId => heuristics.find(h => h.id === relatedId))
    .filter(Boolean)
    .map(related => localizeHeuristic(related, lang));

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${t.shareIntro} ${heuristic.title}: ${heuristic.subtitle}`;

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
      alert(t.linkCopied);
    }
  };

  const IconComponent = Icons[heuristic.icon] || Icons.FaBrain;

  // Entradas do tipo "story" trazem a narrativa que originou o termo + a lição
  const isStory = rawHeuristic.type === 'story';
  const inventorLabel = isStory ? t.protagonistTitle : t.inventorTitle;
  const storyParagraphs = heuristic.story
    ? (Array.isArray(heuristic.story) ? heuristic.story : [heuristic.story])
    : null;

  const storySection = storyParagraphs && (
    <div className="relative p-8 bg-gradient-to-br from-[#84cc16]/20 to-[#fbbf24]/10 rounded-lg border-2 border-[#84cc16]/40 shadow-[0_0_30px_rgba(132,204,22,0.25)] transform hover:scale-102 transition-all">
      <div className="absolute top-4 right-4 text-6xl opacity-10">
        📜
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="text-5xl">📜</div>
        <div>
          <h2 className="text-3xl font-bold text-[#84cc16] retro-glow">
            {t.storyTitle}
          </h2>
          <p className="text-[#84cc16]/70 text-sm mt-1">{t.storySub}</p>
        </div>
      </div>
      <div className="space-y-4 bg-black/20 p-6 rounded-lg border border-[#84cc16]/30">
        {storyParagraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-200 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );

  const lessonSection = heuristic.lesson && (
    <div className="relative p-8 bg-gradient-to-br from-[#10b981]/30 to-[#06b6d4]/20 rounded-lg border border-[#10b981]/40 shadow-lg transform hover:scale-102 transition-all">
      <div className="absolute top-4 right-4 text-5xl opacity-10">
        💡
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl">💡</div>
        <div>
          <h2 className="text-2xl font-bold text-[#10b981]">
            {t.lessonTitle}
          </h2>
          <p className="text-[#10b981]/70 text-sm mt-1">{t.lessonSub}</p>
        </div>
      </div>
      <p className="text-xl text-gray-100 leading-relaxed font-medium bg-black/20 p-6 rounded-lg border border-[#10b981]/30">
        {heuristic.lesson}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#06b6d4] hover:text-[#8b5cf6] transition-colors"
          >
            <Icons.FaArrowLeft />
            <span className="hidden sm:inline">{t.backToArk}</span>
            <span className="sm:hidden">{t.back}</span>
          </Link>

          {/* Navigation Arrows */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-3">
              <Link
                to={`/heuristica/${previousHeuristic.id}`}
                className="group retro-button px-4 py-2 hover:bg-[#8b5cf6]/20 transition-all"
                title={`${t.previous}: ${previousHeuristic.title}`}
              >
                <Icons.FaChevronLeft className="inline text-lg group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline ml-2">{t.previous}</span>
              </Link>
              <span className="text-gray-500 text-sm">
                {currentIndex + 1} / {heuristics.length}
              </span>
              <Link
                to={`/heuristica/${nextHeuristic.id}`}
                className="group retro-button px-4 py-2 hover:bg-[#8b5cf6]/20 transition-all"
                title={`${t.next}: ${nextHeuristic.title}`}
              >
                <span className="hidden md:inline mr-2">{t.next}</span>
                <Icons.FaChevronRight className="inline text-lg group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            <span className="hidden md:block text-xs text-gray-600">
              <Icons.FaKeyboard className="inline mr-1" />
              {t.keyboardHint}
            </span>
          </div>
        </div>

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
                {category?.emoji} {category?.name || 'Category'}
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

        {/* Desktop Panel Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 mb-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* A HISTÓRIA + LIÇÃO - só para entradas do tipo story */}
            {storySection}
            {lessonSection}

            {/* ELI5 - DESTAQUE */}
            <div className="relative p-8 bg-gradient-to-br from-[#ec4899] to-[#8b5cf6] rounded-lg shadow-[0_0_30px_rgba(236,72,153,0.6)] transform hover:scale-102 transition-all">
              <div className="absolute top-4 right-4 text-6xl opacity-20">
                🎨
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">👶</div>
                <div>
                  <h2 className="text-3xl font-bold text-white retro-glow">
                    {t.eli5Title}
                  </h2>
                  <p className="text-white/80 text-sm mt-1">{t.eli5Sub}</p>
                </div>
              </div>
              <p className="text-xl text-white leading-relaxed font-normal bg-black/20 p-6 rounded-lg border-2 border-white/30">
                {heuristic.eli5}
              </p>
            </div>

            {/* RED FLAG - DESTAQUE */}
            {heuristic.whyRedFlag && (
              <div className="relative p-8 bg-gradient-to-br from-red-900/40 to-orange-900/40 rounded-lg shadow-lg transform hover:scale-102 transition-all border border-red-600/30">
                <div className="absolute top-4 right-4 text-4xl opacity-10">
                  ⚠️
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">🚩</div>
                  <div>
                    <h2 className="text-2xl font-bold text-red-300">
                      {t.redFlagTitle}
                    </h2>
                    <p className="text-red-200/70 text-sm mt-1">{t.redFlagSub}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-200 leading-relaxed font-normal bg-black/10 p-6 rounded-lg border border-red-600/20">
                  {heuristic.whyRedFlag}
                </p>
              </div>
            )}

            {/* Purpose */}
            <div className="retro-card">
              <div className="flex items-center gap-3 mb-4">
                <Icons.FaBullseye className="text-2xl text-[#ec4899]" />
                <h2 className="text-2xl font-bold text-[#ec4899]">{t.purposeTitle}</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {heuristic.purpose}
              </p>
            </div>

            {/* Detailed Explanation */}
            <div className="retro-card">
              <div className="flex items-center gap-3 mb-4">
                <Icons.FaGraduationCap className="text-2xl text-[#06b6d4]" />
                <h2 className="text-2xl font-bold text-[#06b6d4]">{t.detailedTitle}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {heuristic.detailed}
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* História */}
            <div className="retro-card">
              <div className="flex items-center gap-3 mb-4">
                <Icons.FaHistory className="text-2xl text-[#fbbf24]" />
                <h2 className="text-xl font-bold text-[#fbbf24]">{t.historyTitle}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                {heuristic.history}
              </p>
            </div>

            {/* Inventor */}
            <div className="retro-card">
              <div className="flex items-center gap-3 mb-4">
                <Icons.FaUser className="text-2xl text-[#10b981]" />
                <h2 className="text-xl font-bold text-[#10b981]">{inventorLabel}</h2>
              </div>
              <p className="text-gray-300">
                <span className="font-bold text-[#10b981]">{heuristic.inventor}</span>
              </p>
              <p className="text-gray-500 mt-2">
                {t.yearLabel}: {heuristic.year}
              </p>
            </div>

            {/* Share Section */}
            <div className="retro-card">
              <div className="flex items-center gap-3 mb-4">
                <Icons.FaShareAlt className="text-2xl text-[#8b5cf6]" />
                <h2 className="text-xl font-bold text-[#8b5cf6]">{t.shareTitle}</h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleShare('twitter')}
                  className="px-3 py-2 text-sm bg-blue-500 hover:bg-blue-600 transition-colors rounded"
                >
                  <Icons.FaTwitter className="inline mr-1" /> Twitter
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="px-3 py-2 text-sm bg-blue-700 hover:bg-blue-800 transition-colors rounded"
                >
                  <Icons.FaFacebook className="inline mr-1" /> Facebook
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 transition-colors rounded"
                >
                  <Icons.FaLinkedin className="inline mr-1" /> LinkedIn
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="px-3 py-2 text-sm bg-green-600 hover:bg-green-700 transition-colors rounded"
                >
                  <Icons.FaWhatsapp className="inline mr-1" /> WhatsApp
                </button>
                <button
                  onClick={() => handleShare('instagram')}
                  className="px-3 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors rounded"
                >
                  <Icons.FaInstagram className="inline mr-1" /> Instagram
                </button>
                <button
                  onClick={() => handleShare('tiktok')}
                  className="px-3 py-2 text-sm bg-black hover:bg-gray-900 transition-colors rounded"
                >
                  <Icons.FaTiktok className="inline mr-1" /> TikTok
                </button>
              </div>
              <button
                onClick={copyToClipboard}
                className="w-full mt-2 px-3 py-2 text-sm retro-border hover:bg-[#8b5cf6]/20 transition-colors rounded"
              >
                <Icons.FaCopy className="inline mr-1" /> {t.copyLink}
              </button>
            </div>

            {/* Related Heuristics */}
            {relatedHeuristicsData.length > 0 && (
              <div className="retro-card">
                <div className="flex items-center gap-3 mb-4">
                  <Icons.FaNetworkWired className="text-2xl text-[#8b5cf6]" />
                  <h2 className="text-xl font-bold text-[#8b5cf6]">
                    {t.related}
                  </h2>
                </div>
                <div className="space-y-3">
                  {relatedHeuristicsData.map(related => {
                    const relatedCat = categories.find(c => c.id === related.category);
                    return (
                      <Link
                        key={related.id}
                        to={`/heuristica/${related.id}`}
                        className="block p-3 border-2 border-[#8b5cf6]/50 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all rounded"
                      >
                        <h3
                          className="font-bold mb-1 text-sm"
                          style={{ color: relatedCat?.color || '#8b5cf6' }}
                        >
                          {related.title}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {related.subtitle}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout - Original */}
        <div className="lg:hidden space-y-6">
          {/* A HISTÓRIA + LIÇÃO - só para entradas do tipo story */}
          {storySection}
          {lessonSection}

          {/* ELI5 - DESTAQUE */}
          <div className="relative p-8 bg-gradient-to-br from-[#ec4899] to-[#8b5cf6] rounded-lg shadow-[0_0_30px_rgba(236,72,153,0.6)] transform hover:scale-102 transition-all">
            <div className="absolute top-4 right-4 text-6xl opacity-20">
              🎨
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">👶</div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white retro-glow">
                  {t.eli5Title}
                </h2>
                <p className="text-white/80 text-sm mt-1">{t.eli5Sub}</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white leading-relaxed font-normal bg-black/20 p-6 rounded-lg border-2 border-white/30">
              {heuristic.eli5}
            </p>
          </div>

          {/* RED FLAG - DESTAQUE */}
          {heuristic.whyRedFlag && (
            <div className="relative p-8 bg-gradient-to-br from-red-900/40 to-orange-900/40 rounded-lg shadow-lg transform hover:scale-102 transition-all border border-red-600/30">
              <div className="absolute top-4 right-4 text-4xl opacity-10">
                ⚠️
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl">🚩</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-red-300">
                    {t.redFlagTitle}
                  </h2>
                  <p className="text-red-200/70 text-sm mt-1">{t.redFlagSub}</p>
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-normal bg-black/10 p-6 rounded-lg border border-red-600/20">
                {heuristic.whyRedFlag}
              </p>
            </div>
          )}

          {/* Share Section */}
          <div className="retro-card">
            <div className="flex items-center gap-4 flex-wrap">
              <Icons.FaShareAlt className="text-2xl text-[#8b5cf6]" />
              <span className="font-bold">{t.shareTitle}:</span>
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
                  <Icons.FaCopy className="inline mr-1" /> {t.copyLink}
                </button>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* História */}
            <div className="retro-card">
              <div className="flex items-center gap-3 mb-4">
                <Icons.FaHistory className="text-2xl text-[#fbbf24]" />
                <h2 className="text-2xl font-bold text-[#fbbf24]">{t.historyTitle}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {heuristic.history}
              </p>
            </div>

            {/* Inventor */}
            <div className="retro-card">
              <div className="flex items-center gap-3 mb-4">
                <Icons.FaUser className="text-2xl text-[#10b981]" />
                <h2 className="text-2xl font-bold text-[#10b981]">{inventorLabel}</h2>
              </div>
              <p className="text-gray-300">
                <span className="font-bold text-[#10b981]">{heuristic.inventor}</span>
              </p>
              <p className="text-gray-500 mt-2">
                {t.yearLabel}: {heuristic.year}
              </p>
            </div>
          </div>

          {/* Purpose */}
          <div className="retro-card">
            <div className="flex items-center gap-3 mb-4">
              <Icons.FaBullseye className="text-2xl text-[#ec4899]" />
              <h2 className="text-2xl font-bold text-[#ec4899]">{t.purposeTitle}</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              {heuristic.purpose}
            </p>
          </div>

          {/* Detailed Explanation */}
          <div className="retro-card">
            <div className="flex items-center gap-3 mb-4">
              <Icons.FaGraduationCap className="text-2xl text-[#06b6d4]" />
              <h2 className="text-2xl font-bold text-[#06b6d4]">{t.detailedTitle}</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {heuristic.detailed}
            </p>
          </div>

          {/* Related Heuristics */}
          {relatedHeuristicsData.length > 0 && (
            <div className="retro-card">
              <div className="flex items-center gap-3 mb-4">
                <Icons.FaNetworkWired className="text-2xl text-[#8b5cf6]" />
                <h2 className="text-2xl font-bold text-[#8b5cf6]">
                  {t.relatedHeuristics}
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
        </div>

        {/* YouTube Videos - Full Width */}
        {heuristic.youtubeVideos && heuristic.youtubeVideos.length > 0 && (
          <div className="retro-card mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Icons.FaYoutube className="text-2xl text-red-500" />
              <h2 className="text-2xl font-bold text-red-500">
                {t.youtubeVideos}
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
                  <span className="text-red-500">{video.title || t.watchOnYoutube} →</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Sources and References - Full Width */}
        {heuristic.sources && heuristic.sources.length > 0 && (
          <div className="retro-card mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Icons.FaBookOpen className="text-2xl text-[#10b981]" />
              <h2 className="text-2xl font-bold text-[#10b981]">
                {t.sourcesTitle}
              </h2>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              {t.sourcesHint}
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
