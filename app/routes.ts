import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("heuristica/:id", "routes/heuristic.jsx", { id: "heuristica1" }),
  route(":id", "routes/heuristic.jsx", { id: "heuristica2" }),
  route("sobre", "routes/about.jsx"),
];
