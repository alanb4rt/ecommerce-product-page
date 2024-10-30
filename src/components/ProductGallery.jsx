import { useState } from "react";

export default function ProductGallery() {
  const listImage = [1, 2, 3, 4];

  const [activeImage, setActiveImage] = useState(1);

  return (
    <section>
      <ProductImage activeImage={activeImage} />
      <ul className="flex gap-8">
        {listImage.map((image) => (
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

export function ProductImage({ activeImage }) {
  return (
    <img
      className="rounded-2xl mb-8"
      src={`./src/assets/images/image-product-${activeImage}.jpg`}
      alt={`Image ${activeImage}`}
    />
  );
}

export function ProductThumbnail({ src, isActive, onClick }) {
  return (
    <li
      className={`overflow-hidden cursor-pointer rounded-lg ${
        isActive ? "active-image" : ""
      }`}
      onClick={onClick}
    >
      <img
        className="hover:opacity-50"
        src={`./src/assets/images/image-product-${src}-thumbnail.jpg`}
        alt={`Image ${src}`}
      />
    </li>
  );
}
