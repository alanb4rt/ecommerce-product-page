import { useState } from "react";
import ProductGallery from "./ProductGallery";
import ProductLightbox from "./ProductLightbox";
import useMediaQuery from "../hooks/useMediaQuery";

interface ProductImageViewerProps {
  images: string[];
}

export default function ProductImageViewer({ images }: ProductImageViewerProps) {
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <ProductGallery
        images={images}
        activeImageIndex={activeImageIndex}
        setActiveImageIndex={setActiveImageIndex}
        setIsLightboxVisible={setIsLightboxVisible}
      />
      {!isMobile && isLightboxVisible && 
        <ProductLightbox
          images={images}
          activeImageIndex={activeImageIndex}
          setIsLightboxVisible={setIsLightboxVisible}
        />
      }
    </>
  );
}
