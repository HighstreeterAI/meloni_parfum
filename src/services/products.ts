import { products } from "@/data/products";
import type { Product } from "@/types/product";

/**
 * Product data access layer.
 * Backed by mock data today; replace the bodies with API calls later
 * without changing the function signatures consumed by the UI.
 */

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProduct(slug: string): Promise<Product | null> {
  return products.find((product) => product.slug === slug) ?? null;
}

export async function getProductById(id: string): Promise<Product | null> {
  return products.find((product) => product.id === id) ?? null;
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  return products.filter((product) => product.isFeatured).slice(0, limit);
}

export async function getRelatedProducts(slug: string, limit = 3): Promise<Product[]> {
  return products.filter((product) => product.slug !== slug).slice(0, limit);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const term = query.trim().toLowerCase();
  if (!term) return [];

  return products.filter((product) => {
    const haystack = [
      product.name,
      product.tagline,
      product.fragranceType,
      ...product.notes.top,
      ...product.notes.heart,
      ...product.notes.base,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(term);
  });
}
