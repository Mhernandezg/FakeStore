import type { Route } from "./+types/home";
import ProductCard from "../components/Cards/ProductCard";
import { useEffect, useState } from "react";
import FallBackCard from "../components/Cards/FallBackCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { useProducts } from "../hooks/useProducts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Catálogo" },
    { name: "description", content: "Lista de productos disponibles" },
  ];
}

export default function Home() {
  const { products, categories, loading, error, loadProducts, loadCategories } =
    useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, [loadProducts, loadCategories]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <SearchBar
          categories={categories}
          onSearch={(valueSearch, valueCategory) => {
            setSearchQuery(valueSearch);
            setFilterCategory(valueCategory);
          }}
        />

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <FallBackCard key={i} />
            ))
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