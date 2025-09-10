import type { Route } from "./+types/home";
import { fetchProducts } from "../services/products";
import { type Product } from "../types/product";
import ProductCard from "~/components/Cards/card";
import { useProductContext } from "~/context/productContext";
import { useEffect } from "react";
import FallBackCard from "~/components/Cards/fallBackCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { state, dispatch } = useProductContext();
  useEffect(() => {
    if (state.products.length || state.loading || state.error) return;

    dispatch({ type: "FETCH_START" });

    fetchProducts()
      .then((data: Product[]) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((err: Error) => {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  }, [state.products.length, state.loading, state.error, dispatch]);
  if (state.error) {
    return <p className="text-red-500">Error: {state.error}</p>;
  }
  const products = state.products;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {state.loading
            ? Array.from({ length: 4 }).map((_, i) => <FallBackCard key={i} />)
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
}
