import { NavLink } from "react-router";
import { FiShoppingCart } from "react-icons/fi";

export default function NavBar() {
  return (
    <div className="bg-white top-0 sticky z-50">
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="px-4 sm:px-6 lg:px-8 border-b border-gray-200"
        >
          <div className="flex h-16 items-center">
            <div className="ml-4 flex lg:ml-0">
              <NavLink to="/" className="flex items-center">
                <h1 className="font-bold text-lg">ShopCatalog</h1>
              </NavLink>
            </div>
            <div className="ml-auto flex items-center">
              <div className="ml-4 flow-root lg:ml-6">
                <NavLink to="/shopping-cart" className="relative flex items-center">
                  <FiShoppingCart className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                  <span className="absolute -top-3 -right-4 bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
