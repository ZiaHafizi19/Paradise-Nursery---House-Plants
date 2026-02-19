import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-800 to-green-700 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo + Company Name */}
        <Link to="/" className="flex items-center gap-3 transition hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-2xl">
            🌿
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-white sm:text-xl">
              Paradise Nursery
            </h1>
            <p className="hidden text-xs text-green-200 sm:block">
              Where Green Meets Serenity
            </p>
          </div>
        </Link>

        {/* Cart Icon */}
        <Link
          to="/cart"
          className="relative flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white transition hover:bg-white/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
          <span className="hidden text-sm font-medium sm:inline">Cart</span>
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
