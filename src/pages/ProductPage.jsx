import Button from "../components/Button";
import IconCart from "../components/icons/IconCart";
import ProductImageViewer from "../components/ProductImageViewer";
import QuantitySelector from "../components/QuantitySelector";

export default function ProductPage() {
  return (
    <main>
      <div className="w-full max-w-screen-lg mx-auto p-16">
        <div className="grid md:grid-cols-2 items-center gap-24">
          <ProductImageViewer />
          <section className="flex flex-col gap-4">
            <p className="font-bold text-[var(--dark-grayish-blue)] tracking-widest uppercase">
              Sneaker Company
            </p>
            <h1 className="text-4xl font-bold mb-4">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-sm text-[var(--dark-grayish-blue)]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex items-end gap-4">
              <p className="text-3xl font-bold">$125.00</p>
              <p className="text-sm font-bold text-white bg-[var(--very-dark-blue)] rounded px-2 py-[2px]">
                50%
              </p>
            </div>
            <p className="line-through font-bold text-[var(--dark-grayish-blue)]">
              $250.00
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
