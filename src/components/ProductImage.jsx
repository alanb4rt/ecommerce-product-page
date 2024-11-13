export default function ProductImage({
  activeImageIndex,
  setIsLightboxVisible,
}) {
  return (
    <img
      className="cursor-pointer rounded-2xl mb-8"
      src={`./src/assets/images/${activeImageIndex}.jpg`}
      alt={activeImageIndex}
      onClick={() => setIsLightboxVisible(true)}
    />
  );
}
