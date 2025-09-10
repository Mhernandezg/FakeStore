import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <NavLink to="/" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
        ShopCatalog
      </NavLink>
      <NavLink to="/about" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
        <div className="ml-4 flow-root lg:ml-6">
          <a href="#" className="group -m-2 flex items-center p-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
            >
              <path
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              0
            </span>
            <span className="sr-only">items in cart, view bag</span>
          </a>
        </div>
      </NavLink>
    </nav>
  );
}
