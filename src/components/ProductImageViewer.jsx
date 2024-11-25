import { useState } from "react";
import ProductGallery from "./ProductGallery";
import ProductLightbox from "./ProductLightbox";
import useMediaQuery from "../hooks/useMediaQuery";

export default function ProductImageViewer({ productImages }) {
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <ProductGallery
        images={productImages}
        activeImageIndex={activeImageIndex}
        setActiveImageIndex={setActiveImageIndex}
        setIsLightboxVisible={setIsLightboxVisible}
      />
      {!isMobile && isLightboxVisible && (
        <ProductLightbox
          images={productImages}
          activeImageIndex={activeImageIndex}
          setIsLightboxVisible={setIsLightboxVisible}
        />
      )}
    </>
  );
}
