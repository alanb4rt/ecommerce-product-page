import { useState } from "react";
import IconMinus from "./icons/IconMinus";
import IconPlus from "./icons/IconPlus";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex items-center gap-8 p-3 bg-[var(--light-grayish-blue)] rounded-lg">
      <button
        className="p-1 hover:brightness-150"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity === 0}
      >
        <IconMinus color="var(--color-primary)" />
      </button>
      <span className="w-[3ch] text-center font-bold">{quantity}</span>
      <button
        className="p-1 hover:brightness-150"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity === 99}
      >
        <IconPlus color="var(--color-primary)" />
      </button>
    </div>
  );
}
