import { useEffect, useState } from "react";
import IconMinus from "./icons/IconMinus";
import IconPlus from "./icons/IconPlus";

interface QuantitySelectorProps {
  handleQuantity: (quantity: number) => void
}

export default function QuantitySelector({ handleQuantity }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    handleQuantity(quantity);
  }, [quantity, handleQuantity]);

  return (
    <div className="w-full md:w-fit flex items-center justify-between md:justify-normal gap-8 p-3 bg-[var(--light-grayish-blue)] rounded-lg">
      <button
        type="button"
        className="p-1 hover:brightness-150"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity === 0}
      >
        <IconMinus color="var(--color-primary)" />
      </button>
      <span className="w-[3ch] text-center font-bold">{quantity}</span>
      <button
        type="button"
        className="p-1 hover:brightness-150"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity === 99}
      >
        <IconPlus color="var(--color-primary)" />
      </button>
    </div>
  );
}
