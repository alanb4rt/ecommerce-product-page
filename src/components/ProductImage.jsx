import { getImageURL } from "../utils/getImageURL";

export default function ProductImage({
  activeImageIndex,
  setIsLightboxVisible,
}) {
  return (
    <img
      className="w-full h-72 md:h-auto object-cover cursor-pointer md:rounded-2xl md:mb-8"
      src={getImageURL(`${activeImageIndex}.jpg`)}
      alt={activeImageIndex}
      onClick={() => setIsLightboxVisible(true)}
    />
  );
}
