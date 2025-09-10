import { useProductContext } from "~/context/ProductContext";

export function useProducts() {
  const { state, loadProducts, loadCategories } = useProductContext();

  const { products, categories, loading, error } = state;

  return {
    products,
    categories,
    loading,
    error,
    loadProducts,
    loadCategories,
  };
}