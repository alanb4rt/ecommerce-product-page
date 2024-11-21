import { useContext, useState } from "react";
import Button from "../components/Button";
import IconCart from "../components/icons/IconCart";
import QuantitySelector from "../components/QuantitySelector";
import { CartContext } from "../contexts/CartProvider";

export default function AddToCart({ productId }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [quantityItem, setQuantityItem] = useState(0);

  const handleQuantity = (quantity) => setQuantityItem(quantity);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantityItem === 0) return;

    const existingItem = cartItems.find(({ id }) => id === productId);
    const updatedCartItems = existingItem
      ? cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: quantityItem } : item
        )
      : [...cartItems, { id: productId, quantity: quantityItem }];
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
