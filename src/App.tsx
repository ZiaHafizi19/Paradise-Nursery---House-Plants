import { HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { LandingPage } from "./pages/LandingPage";
import { ProductListingPage } from "./pages/ProductListingPage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";

export function App() {
  return (
    <HashRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </CartProvider>
    </HashRouter>
  );
}
