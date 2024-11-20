import { useState } from "react";
import IconClose from "./icons/IconClose";
import ProductImage from "./ProductImage";
import ProductThumbnail from "./ProductThumbnail";
import IconNext from "./icons/IconNext";
import IconPrevious from "./icons/IconPrevious";

export default function ProductLightbox({
  images,
  activeImageIndex: showImage,
  setIsLightboxVisible,
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(showImage);

  return (
    <div className="fixed inset-0 w-full h-screen bg-black/75">
      <div className="grid place-content-center h-full">
        <div className="max-w-md">
          <div className="text-right">
            <button
              className="scale-150 py-4 text-white hover:text-[var(--color-primary)]"
              onClick={() => setIsLightboxVisible(false)}
            >
              <IconClose color="currentcolor" />
            </button>
          </div>
          <section>
            <div className="relative flex items-center">
              <button
                className="btn-pagination -left-8 hover:text-[var(--color-primary)]"
                onClick={() => setActiveImageIndex(activeImageIndex - 1)}
                disabled={activeImageIndex === 0}
              >
                <IconPrevious color="currentcolor" />
              </button>
              <ProductImage activeImageIndex={images[activeImageIndex]} />
              <button
                className="btn-pagination -right-8 hover:text-[var(--color-primary)]"
                onClick={() => setActiveImageIndex(activeImageIndex + 1)}
                disabled={activeImageIndex === images.length - 1}
              >
                <IconNext color="currentcolor" />
              </button>
            </div>
            <ul className="flex gap-8 w-4/5 mx-auto">
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
        </div>
      </div>
    </div>
  );
}
