import IconDelete from "./icons/IconDelete";

export function CartItem(props) {
  const { image, title, price, quantity } = props;

  const totalPrice = price * quantity;

  return (
    <div className="flex items-center gap-4">
      <img
        className="size-14 object-cover rounded-lg"
        src={image}
        alt="Image product"
      />
      <div className="flex-1 flex flex-col text-[var(--dark-grayish-blue)]">
        <p>{title}</p>
        <p className="text-lg">
          ${price.toFixed(2)} x {quantity}{" "}
          <span className="text-black font-bold">${totalPrice.toFixed(2)}</span>
        </p>
      </div>
      <button className="cursor-pointer text-[var(--dark-grayish-blue)] hover:text-black">
        <IconDelete color="currentcolor" />
      </button>
    </div>
  );
}
