import { useState } from "react";
import IconClose from "./icons/IconClose";
import ProductImage from "./ProductImage";
import ProductThumbnail from "./ProductThumbnail";
import IconNext from "./icons/IconNext";
import IconPrevious from "./icons/IconPrevious";

export default function ProductLightbox({
  imageList,
  activeImage: showImage,
  setIsLightboxVisible,
}) {
  const [activeImage, setActiveImage] = useState(showImage);

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
                className="btn-lightbox -left-8 hover:text-[var(--color-primary)]"
                onClick={() => setActiveImage(activeImage - 1)}
                disabled={activeImage === 1}
              >
                <IconPrevious color="currentcolor" />
              </button>
              <ProductImage activeImage={activeImage} />
              <button
                className="btn-lightbox -right-8 hover:text-[var(--color-primary)]"
                onClick={() => setActiveImage(activeImage + 1)}
                disabled={activeImage === imageList.length}
              >
                <IconNext color="currentcolor" />
              </button>
            </div>
            <ul className="flex gap-8 w-4/5 mx-auto">
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
        </div>
      </div>
    </div>
  );
}
