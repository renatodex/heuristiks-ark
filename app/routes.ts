import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("heuristica/:id", "routes/heuristic.jsx"),
  route("sobre", "routes/about.jsx"),
];
