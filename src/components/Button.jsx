export default function Button({ type, children }) {
  return (
    <button
      type={type}
      className="w-full flex items-center justify-center gap-4 bg-[var(--color-primary)] font-bold p-3 rounded-lg"
    >
      {children}
    </button>
  );
}
