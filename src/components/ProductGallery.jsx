import ProductImage from "./ProductImage";
import ProductThumbnail from "./ProductThumbnail";

export default function ProductGallery({
  imageList,
  activeImage,
  setActiveImage,
  setIsLightboxVisible,
}) {
  return (
    <section>
      <ProductImage
        activeImage={activeImage}
        setIsLightboxVisible={setIsLightboxVisible}
      />
      <ul className="flex gap-8">
        {imageList.map((image) => (
          <ProductThumbnail
            key={image}
            src={image}
            isActive={image === activeImage}
            onClick={() => setActiveImage(image)}
          />
        ))}
      </ul>
    </section>
  );
}
