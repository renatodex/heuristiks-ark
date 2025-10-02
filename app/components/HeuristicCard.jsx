import { Link } from "react-router";
import * as Icons from "react-icons/fa";

export default function HeuristicCard({ heuristic, categoryColor, categoryName, categoryEmoji }) {
  const IconComponent = Icons[heuristic.icon] || Icons.FaBrain;

  return (
    <Link
      to={`/${heuristic.id}`}
      className="retro-card block group cursor-pointer"
    >
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="category-badge text-xs"
          style={{
            backgroundColor: `${categoryColor}15`,
            borderColor: `${categoryColor}30`,
            color: categoryColor
          }}
        >
          <span>{categoryEmoji}</span>
          <span>{categoryName}</span>
        </span>

        <div
          className="text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ color: categoryColor }}
        >
          <IconComponent />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3
          className="text-xl font-bold leading-tight tracking-tight transition-colors"
          style={{ color: categoryColor }}
        >
          {heuristic.title}
        </h3>

        <p className="text-sm text-gray-300 font-medium leading-relaxed">
          {heuristic.subtitle}
        </p>

        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
          {heuristic.shortDescription}
        </p>
      </div>

      {/* Meta Info */}
      <div className="mt-6 pt-4 border-t border-[#8b5cf6]/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#06b6d4]/20 flex items-center justify-center">
            <Icons.FaUser className="text-xs" style={{ color: categoryColor }} />
          </div>
          <span className="text-xs text-gray-400 font-medium">{heuristic.inventor}</span>
        </div>
        <span className="text-xs text-gray-500 font-mono">{heuristic.year}</span>
      </div>

      {/* Hover indicator */}
      <div className="mt-4 flex items-center gap-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span style={{ color: categoryColor }}>Ler mais</span>
        <Icons.FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" style={{ color: categoryColor }} />
      </div>
    </Link>
  );
}
