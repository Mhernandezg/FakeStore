import { type Product } from "../../types/product";
import { StarIcon } from "@heroicons/react/20/solid";

type ProductCardProps = {
  product: Product;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CardDetails({ product }: ProductCardProps) {
  console.log(product);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain border rounded"
        />
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-2">{product.category}</p>
          <p className="text-xl font-semibold text-blue-600 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                aria-hidden="true"
                className={classNames(
                  rating < product.rating.rate
                    ? "text-gray-900"
                    : "text-gray-200",  
                  "size-5 shrink-0"
                )}
              />
            ))}
            <p className="text-gray-600">{product.rating.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
