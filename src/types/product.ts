export interface Product {
  id: number;
  images?: string[];
  category: string;
  name: string;
  description: string;
  discount: number;
  price: number;
}

export interface ProductGalleryType {
  images: string[];
  activeImageIndex: number;
  setActiveImageIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsLightboxVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
