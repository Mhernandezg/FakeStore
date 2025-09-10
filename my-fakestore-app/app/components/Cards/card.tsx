import { type Product } from "../../types/product";
import { NavLink } from "react-router";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div className="group relative">
      <img
        src={product.image}
        alt={product.title}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <NavLink
              to={`/products/${product.id}`}
              className="flex items-center"
            >
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.title}
            </NavLink>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
  );
}
