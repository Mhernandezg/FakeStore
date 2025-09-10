import {
  createContext,
  useReducer,
  useContext,
  type ReactNode,
  useMemo,
} from "react";
import type { Product } from "../types/product";
import { fetchProducts } from "../services/products";

type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

type ProductAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: Product[] }
  | { type: "FETCH_ERROR"; payload: string };

function productReducer(
  state: ProductState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { products: action.payload, loading: false, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

const ProductContext = createContext<
  | {
      state: ProductState;
      loadProducts: () => Promise<void>;
    }
  | undefined
>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  async function loadProducts() {
    if (state.products.length || state.loading) return; // 👈 evitar llamadas repetidas

    dispatch({ type: "FETCH_START" });
    try {
      const data = await fetchProducts();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err instanceof Error ? err.message : "Error desconocido",
      });
    }
  }

  const value = useMemo(() => ({ state, loadProducts }), [state]);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext debe usarse dentro de ProductProvider");
  }
  return context;
}
