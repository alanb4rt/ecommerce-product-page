import { useState } from "react";
import { CartContext } from "./CartContext";
import { Cart } from "../types/cart";

interface Props {
  children?: React.ReactNode
}

interface CartContextValue {
  cartItems: Cart[];
  setCartItems: React.Dispatch<React.SetStateAction<Cart[]>>;
}

export default function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<Cart[]>([]);

  const contextValue: CartContextValue = { cartItems, setCartItems }

  return (
    <CartContext value={contextValue}>
      {children}
    </CartContext>
  );
}
