import AddToCart from "./AddToCart";

export default function ProductDetails({
  id,
  category,
  name,
  description,
  price,
  discount,
}) {
  const discountedPrice = (price * (discount / 100)).toFixed(2);

  return (
    <section className="flex flex-col gap-4 p-6 md:p-0">
      <p className="text-sm font-bold text-[var(--dark-grayish-blue)] tracking-widest uppercase">
        {category}
      </p>
      <h1 className="text-3xl md:text-4xl font-bold md:mb-4">{name}</h1>
      <p className="text-sm text-[var(--dark-grayish-blue)] mb-4">
        {description}
      </p>
      <div className="flex md:flex-col items-center md:items-start justify-between gap-4 mb-4 md:mb-6">
        <div className="flex items-end gap-4">
          <p className="text-3xl font-bold">${discountedPrice}</p>
          <p className="text-sm font-bold text-white bg-[var(--very-dark-blue)] rounded px-2 py-[2px]">
            {discount}%
          </p>
        </div>
        <p className="line-through font-bold text-[var(--dark-grayish-blue)]">
          ${price.toFixed(2)}
        </p>
      </div>
      <AddToCart productId={id} />
    </section>
  );
}
