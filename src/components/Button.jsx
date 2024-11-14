export default function Button({ type, children }) {
  return (
    <button
      type={type}
      className="flex-1 flex items-center justify-center gap-4 bg-[var(--color-primary)] font-bold p-3 rounded-lg"
    >
      {children}
    </button>
  );
}
