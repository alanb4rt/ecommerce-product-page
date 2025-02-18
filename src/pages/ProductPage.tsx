import ProductDetails from "../components/ProductDetails";
import ProductImageViewer from "../components/ProductImageViewer";
import Products from "../data/products.json";

interface ProductPageProps {
  productId: number
}

export default function ProductPage({ productId }: ProductPageProps) {
  const product = Products.find(({ id }) => id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  const { id, images, category, name, description, discount, price } = product;

  return (
    <main>
      <div className="w-full max-w-screen-lg mx-auto md:py-20 md:px-16">
        <div className="grid md:grid-cols-2 items-center md:gap-24">
          <ProductImageViewer images={images} />
          <ProductDetails
            id={id}
            category={category}
            name={name}
            description={description}
            price={price}
            discount={discount}
          />
        </div>
      </div>
    </main>
  );
}
