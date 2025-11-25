export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  color?: string;
  bandMaterial?: string;
  storageSize?: string;
  image?: string;
}

export interface ProductSpecifications {
  display: string;
  processor: string;
  battery: string;
  waterResistance: string;
  connectivity: string[];
  sensors: string[];
  compatibility: string[];
  dimensions: string;
  weight: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  specifications: ProductSpecifications;
  highlights: string[];
  variants?: ProductVariant[];
  features: string[];
  category: string;
}
