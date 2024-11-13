import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <>
      <Header />
      <ProductPage productId={1} />
    </>
  );
}
