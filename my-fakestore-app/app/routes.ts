import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products/:id", "routes/detaills.tsx"),
  route("shopping-cart", "routes/shopping-cart.tsx"),
] satisfies RouteConfig;
