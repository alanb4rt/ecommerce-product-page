import { useState } from "react";
import Cart from "./Cart";
import IconCart from "./icons/IconCart";

export default function CartSection() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <div className="md:relative flex flex-col items-center">
      <button
        className="cursor-pointer"
        onClick={() => setIsCartVisible(!isCartVisible)}
      >
        <IconCart
          color={isCartVisible ? "black" : "var(--dark-grayish-blue)"}
        />
      </button>
      {isCartVisible && <Cart />}
    </div>
  );
}
