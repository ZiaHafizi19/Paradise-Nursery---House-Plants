import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&h=900&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Logo */}
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-5xl backdrop-blur-sm">
          🌿
        </div>

        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
          Paradise Nursery
        </h1>

        <p className="mb-3 text-xl font-medium text-green-300 sm:text-2xl">
          Where Green Meets Serenity
        </p>

        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
          Welcome to Paradise Nursery, your one-stop destination for beautiful
          house plants. We offer a curated selection of air-purifying, aromatic,
          and medicinal plants to transform your living space into a lush,
          green paradise. Whether you're a seasoned plant parent or just getting
          started, we have the perfect plant waiting for you.
        </p>

        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:bg-green-500 hover:shadow-2xl hover:scale-105 active:scale-95"
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-white/50">
        🌱 Bringing nature closer to you since 2020
      </div>
    </div>
  );
}
