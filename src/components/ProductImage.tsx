import useMediaQuery from "../hooks/useMediaQuery";
import { getImageURL } from "../utils/getImageURL";

interface ProductImageProps {
  activeImageIndex: string;
  setIsLightboxVisible?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ProductImage({
  activeImageIndex,
  setIsLightboxVisible,
}: ProductImageProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <img
      className="w-full h-72 md:h-auto object-cover cursor-pointer md:rounded-2xl md:mb-8"
      src={getImageURL(`${activeImageIndex}.jpg`)}
      alt={activeImageIndex}
      onClick={isMobile ? undefined : () => setIsLightboxVisible?.(true)}
    />
  );
}
