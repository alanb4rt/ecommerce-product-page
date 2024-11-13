import ProductImage from "./ProductImage";
import ProductThumbnail from "./ProductThumbnail";

export default function ProductGallery({
  images,
  activeImageIndex,
  setActiveImageIndex,
  setIsLightboxVisible,
}) {
  return (
    <section>
      <ProductImage
        activeImageIndex={images[activeImageIndex]}
        setIsLightboxVisible={setIsLightboxVisible}
      />
      <ul className="flex gap-8">
        {images.map((image) => (
          <ProductThumbnail
            key={image}
            src={image}
            isActive={image === images[activeImageIndex]}
            onClick={() => setActiveImageIndex(images.indexOf(image))}
          />
        ))}
      </ul>
    </section>
  );
}
