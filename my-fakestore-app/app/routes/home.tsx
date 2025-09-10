import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import ProductCard from "../components/Cards/ProductCard";
import FallBackCards from "../components/Cards/FallBackCards";
import SearchBar from "../components/SearchBar/SearchBar";
import { useProducts } from "../hooks/useProducts";
import Paginator from "../components/Paginator/Paginator";

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

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

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

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterCategory]);

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
              <FallBackCards key={i} />
            ))
          ) : currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No se encontraron productos</p>
          )}
        </div>

        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}