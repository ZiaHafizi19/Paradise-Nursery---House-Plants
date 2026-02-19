import { Header } from "../components/Header";
import { plants, categories } from "../data/plants";
import { useCart } from "../context/CartContext";
import type { Plant } from "../data/plants";

function PlantCard({ plant }: { plant: Plant }) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(plant.id);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={plant.image}
          alt={plant.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute right-2 top-2 flex gap-1">
          {plant.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{plant.name}</h3>
          <span className="whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-800">
            ${plant.price}
          </span>
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">
          {plant.description}
        </p>
        <button
          onClick={() => !inCart && addToCart(plant)}
          disabled={inCart}
          className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
            inCart
              ? "cursor-not-allowed bg-gray-100 text-gray-400"
              : "bg-green-600 text-white hover:bg-green-700 active:scale-[0.98]"
          }`}
        >
          {inCart ? (
            <span className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Added to Cart
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add to Cart
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export function ProductListingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Plants Collection
          </h2>
          <p className="mt-2 text-gray-500">
            Discover the perfect house plant for your home
          </p>
        </div>

        {/* Categories */}
        {categories.map((category) => {
          const categoryPlants = plants.filter((p) =>
            p.categories.includes(category)
          );
          return (
            <section key={category} className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl">
                  {category === "Air Purifying" && "🍃"}
                  {category === "Aromatic" && "🌸"}
                  {category === "Medicinal" && "💊"}
                </span>
                <h3 className="text-2xl font-bold text-gray-800">
                  {category} Plants
                </h3>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {categoryPlants.length} plants
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryPlants.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
