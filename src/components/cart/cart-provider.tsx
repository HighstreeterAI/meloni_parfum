"use client";

import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import * as cartService from "@/services/cart";
import type { Cart } from "@/types/cart";

interface CartContextValue {
  cart: Cart | null;
  isReady: boolean;
  addToCart: (productId: string, quantity?: number) => Promise<void>;
  updateCart: (lineId: string, quantity: number) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    let isActive = true;
    cartService.getCart().then((next) => {
      if (isActive) setCart(next);
    });
    return () => {
      isActive = false;
    };
  }, []);

  const addToCart = useCallback(async (productId: string, quantity = 1) => {
    setCart(await cartService.addToCart(productId, quantity));
  }, []);

  const updateCart = useCallback(async (lineId: string, quantity: number) => {
    setCart(await cartService.updateCart(lineId, quantity));
  }, []);

  const removeFromCart = useCallback(async (lineId: string) => {
    setCart(await cartService.removeFromCart(lineId));
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({ cart, isReady: cart !== null, addToCart, updateCart, removeFromCart }),
    [cart, addToCart, updateCart, removeFromCart],
  );

  return <CartContext value={value}>{children}</CartContext>;
}

export function useCart(): CartContextValue {
  const context = use(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
