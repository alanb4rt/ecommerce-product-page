import { useContext } from "react";
import CartItem from "./CartItem";
import Button from "./Button";
import { CartContext } from "../contexts/CartContext";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <section className="z-20 absolute left-2 md:left-auto right-2 md:right-auto top-16 md:top-10 mt-2 md:w-96 bg-white rounded-lg shadow-xl">
      <div className="p-6 border-b-[1px]">
        <p className="font-bold">Cart</p>
      </div>
      <div className="flex flex-col gap-6 p-6 min-h-44">
        {cartItems.length === 0 ? (
          <p className="m-auto font-bold text-[var(--dark-grayish-blue)]">
            Your cart is empty.
          </p>
        ) : (
          <ul className="grid gap-4">
            {cartItems.map((item) => (
              <li key={item.id}>
                <CartItem item={item} />
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && <Button>Checkout</Button>}
      </div>
    </section>
  );
}
