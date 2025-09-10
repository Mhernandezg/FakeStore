import { createContext, useReducer, useContext, type ReactNode, useMemo } from "react";
import type { Product } from "../types/product";

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

function productReducer(state: ProductState, action: ProductAction): ProductState {
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
  { state: ProductState; dispatch: React.Dispatch<ProductAction> } | undefined
>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext debe usarse dentro de un ProductProvider");
  }
  return context;
}
