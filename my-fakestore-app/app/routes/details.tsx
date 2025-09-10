import type { Route } from "./+types/home";
import { fetchProductById } from "../services/products";
import { type Product } from "../types/product";
import { useProductContext } from "../context/productContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FallBackCardDetails from "~/components/Cards/FallBackCardDetails";
import CardDetails from "~/components/Cards/CardDetails";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Detalles de producto" },
    { name: "description", content: "Detalles del producto seleccionado" },
  ];
}

export default function details() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const { state } = useProductContext();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const found = state.products.find((p) => p.id === productId);
    if (found) {
      setProduct(found);
      return;
    }
    setLoading(true);
    fetchProductById(productId)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id, productId, state.products]);

  if (loading) return <FallBackCardDetails />;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!product) return <p>No se encontró el producto</p>;

  return (
    <CardDetails product={product} />
  );
}
