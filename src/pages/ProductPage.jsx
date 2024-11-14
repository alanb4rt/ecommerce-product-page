import AddToCart from "../components/AddToCart";
import ProductImageViewer from "../components/ProductImageViewer";
import Products from "../data/products.json";

export default function ProductPage({ productId }) {
  const product = Products.find(({ id }) => id === productId);

  const { id, images, category, name, description, discount, price } = product;

  const discountedPrice = (price * (discount / 100)).toFixed(2);

  return (
    <main>
      <div className="w-full max-w-screen-lg mx-auto p-16">
        <div className="grid md:grid-cols-2 items-center gap-24">
          <ProductImageViewer productImages={images} />
          <section className="flex flex-col gap-4">
            <p className="font-bold text-[var(--dark-grayish-blue)] tracking-widest uppercase">
              {category}
            </p>
            <h1 className="text-4xl font-bold mb-4">{name}</h1>
            <p className="text-sm text-[var(--dark-grayish-blue)]">
              {description}
            </p>
            <div className="flex items-end gap-4">
              <p className="text-3xl font-bold">${discountedPrice}</p>
              <p className="text-sm font-bold text-white bg-[var(--very-dark-blue)] rounded px-2 py-[2px]">
                {discount}%
              </p>
            </div>
            <p className="line-through font-bold text-[var(--dark-grayish-blue)]">
              ${price.toFixed(2)}
            </p>
            <AddToCart productId={id} />
          </section>
        </div>
      </div>
    </main>
  );
}
