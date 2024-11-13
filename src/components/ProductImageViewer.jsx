import { useState } from "react";
import ProductGallery from "./ProductGallery";
import ProductLightbox from "./ProductLightbox";

export default function ProductImageViewer({ productImages }) {
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <>
      <ProductGallery
        images={productImages}
        activeImageIndex={activeImageIndex}
        setActiveImageIndex={setActiveImageIndex}
        setIsLightboxVisible={setIsLightboxVisible}
      />
      {isLightboxVisible && (
        <ProductLightbox
          images={productImages}
          activeImageIndex={activeImageIndex}
          setIsLightboxVisible={setIsLightboxVisible}
        />
      )}
    </>
  );
}
