import { ProductGalleryType } from "../types/product";
import IconNext from "./icons/IconNext";
import IconPrevious from "./icons/IconPrevious";
import ProductImage from "./ProductImage";
import ProductThumbnail from "./ProductThumbnail";

export default function ProductGallery({
  images,
  activeImageIndex,
  setActiveImageIndex,
  setIsLightboxVisible,
}: ProductGalleryType) {
  return (
    <section>
      <div className="relative flex items-center">
        <button
          className="btn-pagination left-4 hover:text-[var(--color-primary)] md:hidden"
          onClick={() => setActiveImageIndex(Number(activeImageIndex - 1))}
          disabled={activeImageIndex === 0}
        >
          <IconPrevious color="currentcolor" />
        </button>
        <ProductImage
          activeImageIndex={images[activeImageIndex]}
          setIsLightboxVisible={setIsLightboxVisible}
        />
        <button
          className="btn-pagination right-4 hover:text-[var(--color-primary)] md:hidden"
          onClick={() => setActiveImageIndex(activeImageIndex + 1)}
          disabled={activeImageIndex === images.length - 1}
        >
          <IconNext color="currentcolor" />
        </button>
      </div>
      <ul className="hidden md:flex gap-8">
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
