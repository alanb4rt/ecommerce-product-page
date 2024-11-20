import useMediaQuery from "../hooks/useMediaQuery";
import { getImageURL } from "../utils/getImageURL";

export default function ProductImage({
  activeImageIndex,
  setIsLightboxVisible,
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <img
      className="w-full h-72 md:h-auto object-cover cursor-pointer md:rounded-2xl md:mb-8"
      src={getImageURL(`${activeImageIndex}.jpg`)}
      alt={activeImageIndex}
      onClick={isMobile ? undefined : () => setIsLightboxVisible(true)}
    />
  );
}
