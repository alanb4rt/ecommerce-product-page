import { useContext, useState } from "react";
import Button from "./Button";
import QuantitySelector from "./QuantitySelector";
import IconCart from "./icons/IconCart";
import { CartContext } from "../contexts/CartContext";
import { Cart } from "../types/cart";

interface AddToCartProps {
  productId: number
}

export default function AddToCart({ productId }: AddToCartProps) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { cartItems, setCartItems } = cartContext;
  const [quantityItem, setQuantityItem] = useState<number>(0);

  const handleQuantity = (quantity: number) => setQuantityItem(quantity);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (quantityItem === 0) return;

    const existingItem = cartItems.find(({ id }) => id === productId);
    const newItem: Cart = { id: productId, quantity: quantityItem };

    const updatedCartItems = existingItem
      ? cartItems.map((item) => (item.id === productId ? { ...item, quantity: quantityItem } : item))
      : [...cartItems, newItem];

    setCartItems(updatedCartItems);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-4"
    >
      <QuantitySelector handleQuantity={handleQuantity} />
      <Button type="submit">
        <IconCart color="var(--very-dark-blue)" />
        Add to cart
      </Button>
    </form>
  );
}
