import { useProductContext } from "../context/ProductContext";

export function useProducts() {
  const { state, loadProducts } = useProductContext();

  const { products, loading, error } = state;

  return {
    products,
    loading,
    error,
    loadProducts,
  };
}