import { useState } from "react";
import Button from "./Button";
import { CartItem } from "./CartItem";

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
