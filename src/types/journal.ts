import type { ProductImage } from "./product";

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: ProductImage;
  body: string[];
  quote?: string;
}
