import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Error 404" },
    { name: "description", content: "Página no encontrada" },
  ];
}

export default function pageNotFound() {
  return <div>Página no encontrada</div>;
}
