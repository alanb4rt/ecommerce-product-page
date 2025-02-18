import Header from "./components/Header";
import CartProvider from "./contexts/CartProvider";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <ProductPage productId={1} />
      </CartProvider>
    </>
  );
}
