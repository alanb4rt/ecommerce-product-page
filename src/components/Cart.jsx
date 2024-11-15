import { useContext } from "react";
import Button from "./Button";
import { CartItem } from "./CartItem";
import { CartContext } from "../contexts/CartProvider";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <section className="absolute left-2 md:left-[inherit] right-2 md:right-[inherit] top-16 md:top-10 mt-2 md:w-96 bg-white rounded-lg shadow-xl">
      <div className="p-6 border-b-[1px]">
        <p className="font-bold">Cart</p>
      </div>
      <div className="flex flex-col gap-6 p-6 min-h-40">
        {cartItems.length === 0 ? (
          <p className="m-auto font-bold text-[var(--dark-grayish-blue)]">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item, index) => <CartItem key={index} value={item} />)
        )}
        {cartItems.length > 0 && <Button>Checkout</Button>}
      </div>
    </section>
  );
}
