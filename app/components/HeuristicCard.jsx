import { Link } from "react-router";
import * as Icons from "react-icons/fa";

export default function HeuristicCard({ heuristic, categoryColor }) {
  const IconComponent = Icons[heuristic.icon] || Icons.FaBrain;

  return (
    <Link
      to={`/heuristica/${heuristic.id}`}
      className="retro-card block group"
    >
      <div className="flex items-start gap-4">
        <div
          className="text-4xl group-hover:scale-110 transition-transform"
          style={{ color: categoryColor }}
        >
          <IconComponent />
        </div>

        <div className="flex-1">
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: categoryColor }}
          >
            {heuristic.title}
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            {heuristic.subtitle}
          </p>
          <p className="text-xs text-gray-500">
            {heuristic.shortDescription}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-[#8b5cf6]/30 flex justify-between text-xs text-gray-500">
        <span>{heuristic.inventor}</span>
        <span>{heuristic.year}</span>
      </div>
    </Link>
  );
}
