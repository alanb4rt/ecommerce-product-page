import { useState } from "react";
import IconClose from "./icons/IconClose";
import ProductImage from "./ProductImage";
import ProductThumbnail from "./ProductThumbnail";
import IconNext from "./icons/IconNext";
import IconPrevious from "./icons/IconPrevious";
import { ProductGalleryType } from "../types/product";

type ProductLightboxProps = Pick<ProductGalleryType, "images" | "activeImageIndex" | "setIsLightboxVisible">

export default function ProductLightbox({
  images,
  activeImageIndex: showImage,
  setIsLightboxVisible
}: ProductLightboxProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(showImage);

  const handlePrevious = () => {
    setActiveImageIndex((prevIndex: number) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prevIndex: number) => Math.min(images.length - 1, prevIndex + 1));
  };

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
                onClick={handlePrevious}
                disabled={activeImageIndex === 0}
              >
                <IconPrevious color="currentcolor" />
              </button>
              <ProductImage activeImageIndex={images[activeImageIndex]} />
              <button
                className="btn-pagination -right-8 hover:text-[var(--color-primary)]"
                onClick={handleNext}
                disabled={activeImageIndex === images.length - 1}
              >
                <IconNext color="currentcolor" />
              </button>
            </div>
            <ul className="flex gap-8 w-4/5 mx-auto">
              {images.map((image: string) => (
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
