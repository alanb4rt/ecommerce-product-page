interface ButtonProps {
  type?: "button" | "submit" | "reset",
  children: React.ReactNode
}

export default function Button({ type, children }: ButtonProps) {
  return (
    <button
      type={type}
      className="w-full flex items-center justify-center gap-4 bg-[var(--color-primary)] hover:bg-[#ffac6a] font-bold p-3 rounded-lg"
    >
      {children}
    </button>
  );
}
