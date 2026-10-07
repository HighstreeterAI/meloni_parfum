import type { ProductImage } from "./product";

export interface CartLine {
  id: string;
  productId: string;
  slug: string;
  name: string;
  fragranceType: string;
  size: string;
  image: ProductImage;
  unitPrice: number;
  currency: string;
  quantity: number;
}

export interface Cart {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  currency: string;
}

export interface CheckoutResult {
  url: string | null;
  message?: string;
}
