import type { Route } from "./+types/home";
import ProductCard from "~/components/Cards/card";
import { useProducts } from "../hooks/useProducts";
import { useEffect, useState } from "react";
import FallBackCard from "~/components/Cards/fallBackCard";
import SearchBar from "~/components/SearchBar/searchBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { products, loading, error, loadProducts } = useProducts();
  const [searchProduct, setSearchProduct] = useState("");
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchProduct.toLowerCase())
  );
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <SearchBar onSearch={setSearchProduct} />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => <FallBackCard key={i} />)
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No se encontraron productos</p>
          )}
        </div>
      </div>
    </div>
  );
}
