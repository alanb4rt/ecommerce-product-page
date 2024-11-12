import { useState } from "react";
import ProductGallery from "./ProductGallery";
import ProductLightbox from "./ProductLightbox";

export default function ProductImageViewer() {
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(1);

  const imageList = [1, 2, 3, 4];

  return (
    <>
      <ProductGallery
        imageList={imageList}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        setIsLightboxVisible={setIsLightboxVisible}
      />
      {isLightboxVisible && (
        <ProductLightbox
          imageList={imageList}
          activeImage={activeImage}
          setIsLightboxVisible={setIsLightboxVisible}
        />
      )}
    </>
  );
}
