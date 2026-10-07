import { getProductById } from "@/services/products";
import type { Cart, CartLine, CheckoutResult } from "@/types/cart";

/**
 * Cart data access layer.
 * Persists to localStorage today; replace the bodies with API calls later
 * without changing the function signatures consumed by the UI.
 */

const STORAGE_KEY = "meloni.cart.v1";
const DEFAULT_CURRENCY = "CHF";
const MAX_QUANTITY = 10;

interface StoredLine {
  productId: string;
  quantity: number;
}

function clampQuantity(quantity: number): number {
  return Math.min(MAX_QUANTITY, Math.max(0, Math.floor(quantity)));
}

function readStoredLines(): StoredLine[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (line): line is StoredLine =>
        typeof line?.productId === "string" && typeof line?.quantity === "number",
    );
  } catch {
    return [];
  }
}

function writeStoredLines(lines: StoredLine[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
}

async function buildCart(stored: StoredLine[]): Promise<Cart> {
  const resolved = await Promise.all(
    stored.map(async ({ productId, quantity }): Promise<CartLine | null> => {
      const product = await getProductById(productId);
      if (!product) return null;

      return {
        id: product.id,
        productId: product.id,
        slug: product.slug,
        name: product.name,
        fragranceType: product.fragranceType,
        size: product.size,
        image: product.images[0],
        unitPrice: product.price,
        currency: product.currency,
        quantity,
      };
    }),
  );

  const lines = resolved.filter((line): line is CartLine => line !== null);

  return {
    lines,
    itemCount: lines.reduce((total, line) => total + line.quantity, 0),
    subtotal: lines.reduce((total, line) => total + line.unitPrice * line.quantity, 0),
    currency: lines[0]?.currency ?? DEFAULT_CURRENCY,
  };
}

export async function getCart(): Promise<Cart> {
  return buildCart(readStoredLines());
}

export async function addToCart(productId: string, quantity = 1): Promise<Cart> {
  const lines = readStoredLines();
  const existing = lines.find((line) => line.productId === productId);

  if (existing) {
    existing.quantity = clampQuantity(existing.quantity + quantity);
  } else {
    lines.push({ productId, quantity: clampQuantity(quantity) });
  }

  writeStoredLines(lines.filter((line) => line.quantity > 0));
  return getCart();
}

export async function updateCart(lineId: string, quantity: number): Promise<Cart> {
  const next = readStoredLines()
    .map((line) =>
      line.productId === lineId ? { ...line, quantity: clampQuantity(quantity) } : line,
    )
    .filter((line) => line.quantity > 0);

  writeStoredLines(next);
  return getCart();
}

export async function removeFromCart(lineId: string): Promise<Cart> {
  writeStoredLines(readStoredLines().filter((line) => line.productId !== lineId));
  return getCart();
}

export async function clearCart(): Promise<Cart> {
  writeStoredLines([]);
  return getCart();
}

export async function beginCheckout(): Promise<CheckoutResult> {
  return {
    url: null,
    message: "Die Online-Kasse ist bald verfügbar. Bitte kontaktieren Sie uns für Ihre Bestellung.",
  };
}

export { MAX_QUANTITY };
