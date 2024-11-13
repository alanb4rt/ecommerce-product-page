import Button from "../components/Button";
import IconCart from "../components/icons/IconCart";
import ProductImageViewer from "../components/ProductImageViewer";
import QuantitySelector from "../components/QuantitySelector";
import Products from "../data/products.json";

export default function ProductPage({ productId }) {
  const product = Products.find(({ id }) => id === productId);

  const discountedPrice = (product.price * (product.discount / 100)).toFixed(2);

  return (
    <main>
      <div className="w-full max-w-screen-lg mx-auto p-16">
        <div className="grid md:grid-cols-2 items-center gap-24">
          <ProductImageViewer productImages={product.images} />
          <section className="flex flex-col gap-4">
            <p className="font-bold text-[var(--dark-grayish-blue)] tracking-widest uppercase">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-sm text-[var(--dark-grayish-blue)]">
              {product.description}
            </p>
            <div className="flex items-end gap-4">
              <p className="text-3xl font-bold">${discountedPrice}</p>
              <p className="text-sm font-bold text-white bg-[var(--very-dark-blue)] rounded px-2 py-[2px]">
                {product.discount}%
              </p>
            </div>
            <p className="line-through font-bold text-[var(--dark-grayish-blue)]">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center gap-4">
              <QuantitySelector />
              <Button>
                <IconCart color="var(--very-dark-blue)" />
                Add to cart
              </Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
