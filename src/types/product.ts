export interface ProductImage {
  src: string;
  alt: string;
}

export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  story: string;
  price: number;
  currency: string;
  images: ProductImage[];
  panelImage: ProductImage;
  size: string;
  fragranceType: string;
  notes: FragranceNotes;
  keyNotes: string[];
  ingredients: string;
  isFeatured: boolean;
}
