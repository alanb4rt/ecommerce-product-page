import { useState } from "react";
import IconDelete from "./icons/IconDelete";
import Button from "./Button";

const fakeData = {
  image: "./src/assets/images/image-product-1-thumbnail.jpg",
  title: "Fall Limited Edition Sneakers",
  price: 125,
  quantity: 3,
};

export default function Cart() {
  const [cartItems, setCartItems] = useState([fakeData]);

  return (
    <section className="absolute top-11 w-96 bg-white rounded-lg shadow-xl">
      <div className="p-6 border-b-[1px]">
        <p className="font-bold">Cart</p>
      </div>
      <div className="flex flex-col gap-6 p-6 min-h-40">
        {cartItems.length === 0 ? (
          <p className="m-auto font-bold text-[var(--dark-grayish-blue)]">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item, index) => <CartItem key={index} {...item} />)
        )}
        {cartItems.length > 0 && <Button>Checkout</Button>}
      </div>
    </section>
  );
}

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
