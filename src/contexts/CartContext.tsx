import { createContext } from "react";
import { Cart } from "../types/cart";

interface CartContextType {
    cartItems: Cart[];
    setCartItems: React.Dispatch<React.SetStateAction<Cart[]>>;
}

const defaultValue: CartContextType = {
    cartItems: [],
    setCartItems: () => {}
};

export const CartContext = createContext<CartContextType>(defaultValue);