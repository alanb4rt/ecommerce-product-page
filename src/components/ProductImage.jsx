export default function ProductImage({ activeImage, setIsLightboxVisible }) {
  return (
    <img
      className="cursor-pointer rounded-2xl mb-8"
      src={`./src/assets/images/image-product-${activeImage}.jpg`}
      alt={`Image ${activeImage}`}
      onClick={() => setIsLightboxVisible(true)}
    />
  );
}
