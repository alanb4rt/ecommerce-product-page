import { useContext, useState } from "react";
import Cart from "./Cart";
import IconCart from "./icons/IconCart";
import { CartContext } from "../contexts/CartContext";

export default function CartSection() {
  const { cartItems } = useContext(CartContext);

  const [isCartVisible, setIsCartVisible] = useState(false);

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="md:relative flex flex-col items-center">
      <button
        className="relative cursor-pointer"
        onClick={() => setIsCartVisible(!isCartVisible)}
      >
        <IconCart
          color={isCartVisible ? "black" : "var(--dark-grayish-blue)"}
        />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-3 px-2 text-white text-xs  bg-[var(--color-primary)] rounded-full">
            {itemCount}
          </span>
        )}
      </button>
      {isCartVisible && <Cart />}
    </div>
  );
}
