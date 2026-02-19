import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { useCart } from "../context/CartContext";
import type { CartItem } from "../context/CartContext";

function CartItemCard({ item }: { item: CartItem }) {
  const { removeFromCart, incrementItem, decrementItem } = useCart();
  const subtotal = item.plant.price * item.quantity;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:flex-row">
      {/* Image */}
      <div className="h-40 w-full shrink-0 bg-gray-100 sm:h-auto sm:w-40">
        <img
          src={item.plant.image}
          alt={item.plant.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.plant.name}
              </h3>
              <p className="text-sm text-gray-500">
                Unit Price: ${item.plant.price}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.plant.id)}
              className="rounded-lg p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
              title="Remove from cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          {/* Quantity controls */}
          <div className="flex items-center gap-0 overflow-hidden rounded-xl border border-gray-200">
            <button
              onClick={() => decrementItem(item.plant.id)}
              className="flex h-9 w-9 items-center justify-center bg-gray-50 text-lg font-medium text-gray-600 transition hover:bg-gray-100"
            >
              −
            </button>
            <span className="flex h-9 w-10 items-center justify-center border-x border-gray-200 text-sm font-semibold text-gray-900">
              {item.quantity}
            </span>
            <button
              onClick={() => incrementItem(item.plant.id)}
              className="flex h-9 w-9 items-center justify-center bg-gray-50 text-lg font-medium text-gray-600 transition hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Subtotal */}
          <div className="text-right">
            <p className="text-xs text-gray-400">Subtotal</p>
            <p className="text-lg font-bold text-green-700">${subtotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShoppingCartPage() {
  const { cartItems, totalItems, totalCost } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (showCheckout) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
            🎉
          </div>
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Coming Soon!
          </h2>
          <p className="mb-8 text-gray-500">
            Our checkout functionality is under development. Thank you for
            shopping with Paradise Nursery!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Continue Shopping
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            🛒 Shopping Cart
          </h2>
          <p className="mt-2 text-gray-500">
            {totalItems > 0
              ? `You have ${totalItems} item${totalItems > 1 ? "s" : ""} in your cart`
              : "Your cart is empty"}
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty cart */
          <div className="flex flex-col items-center rounded-2xl border-2 border-dashed border-gray-200 bg-white px-6 py-16 text-center">
            <div className="mb-4 text-6xl">🌵</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-700">
              Your cart is empty
            </h3>
            <p className="mb-6 max-w-sm text-gray-400">
              Looks like you haven't added any plants yet. Browse our collection
              and find your perfect green companion!
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Browse Plants
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item) => (
                <CartItemCard key={item.plant.id} item={item} />
              ))}

              <Link
                to="/products"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-green-700 transition hover:text-green-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-gray-900">
                  Order Summary
                </h3>

                <div className="space-y-3 border-b border-gray-100 pb-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.plant.id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-500">
                        {item.plant.name} × {item.quantity}
                      </span>
                      <span className="font-medium text-gray-700">
                        ${item.plant.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Items</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {totalItems}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total Cost</p>
                    <p className="text-2xl font-bold text-green-700">
                      ${totalCost}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowCheckout(true)}
                  className="mt-6 w-full rounded-xl bg-green-600 py-3 text-base font-semibold text-white shadow-lg shadow-green-200 transition-all hover:bg-green-700 hover:shadow-xl active:scale-[0.98]"
                >
                  Checkout
                </button>

                <p className="mt-3 text-center text-xs text-gray-400">
                  🔒 Secure checkout powered by Paradise Nursery
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
