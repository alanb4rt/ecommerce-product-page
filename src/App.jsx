import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import CartProvider from "./contexts/CartProvider";

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
