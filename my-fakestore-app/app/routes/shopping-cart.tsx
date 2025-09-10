import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Carrito de compras" },
    { name: "description", content: "Detalles del carrito de compras" },
  ];
}

export default function cart() {
  return <div>Carrito de compra</div>;
}
