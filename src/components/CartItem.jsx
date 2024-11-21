import { useContext } from "react";
import IconDelete from "./icons/IconDelete";
import Products from "../data/products.json";
import { CartContext } from "../contexts/CartProvider";
import { getImageURL } from "../utils/getImageURL";

export default function CartItem({ item }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const product = Products.find(({ id }) => id === item.id);

  const { id, images, name, price, discount } = product;

  const imageURL = getImageURL(`${images[0]}-thumbnail.jpg`);

  const discountedPrice = (price * (discount / 100)).toFixed(2);

  const totalPrice = (discountedPrice * item.quantity).toFixed(2);

  const handleDelete = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredItems);
  };

  return (
    <div className="flex items-center gap-4">
      <img
        className="size-14 object-cover rounded-lg"
        src={imageURL}
        alt="Image product"
      />
      <div className="flex-1 flex flex-col text-sm md:text-base text-[var(--dark-grayish-blue)]">
        <p>{name}</p>
        <p>
          ${discountedPrice} x {item.quantity}{" "}
          <span className="text-[var(--very-dark-blue)] font-bold">
            ${totalPrice}
          </span>
        </p>
      </div>
      <button
        onClick={() => handleDelete(id)}
        className="cursor-pointer text-[var(--dark-grayish-blue)] hover:text-black"
      >
        <IconDelete color="currentcolor" />
      </button>
    </div>
  );
}
