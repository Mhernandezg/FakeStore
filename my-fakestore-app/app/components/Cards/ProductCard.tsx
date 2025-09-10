import { type Product } from "../../types/product";
import { NavLink } from "react-router";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <NavLink to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-sm text-gray-500 description">
              {product.description}
            </p>
            <p className="text-sm font-medium text-gray-900">
              ${product.price}
            </p>
            <button type="button" className="flex w-full gap-x-3 justify-center rounded-lg items-center bg-sky-500 text-white mt-2 px-4 py-2 hover:bg-sky-600 cursor-pointer">
              + Add
            </button>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
