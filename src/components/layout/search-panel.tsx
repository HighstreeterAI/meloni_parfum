"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { formatPrice } from "@/lib/format";
import { searchProducts } from "@/services/products";
import type { Product } from "@/types/product";
import { CloseIcon, SearchIcon } from "@/components/ui/icons";
import { routes } from "./navigation";

const SUGGESTIONS = ["Jasmin", "Oud", "Safran", "Vanille"];

interface SearchPanelProps {
  onClose: () => void;
}

export function SearchPanel({ onClose }: SearchPanelProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    let isActive = true;
    searchProducts(query).then((next) => {
      if (isActive) setResults(next);
    });
    return () => {
      isActive = false;
    };
  }, [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Suche"
      className="absolute inset-x-0 top-full border-b border-line bg-ivory shadow-[0_24px_48px_-32px_rgba(29,27,24,0.25)]"
    >
      <div className="container-page py-8 lg:py-12">
        <div className="flex items-center gap-4 border-b border-ink pb-3">
          <SearchIcon className="shrink-0 text-taupe" />
          <label htmlFor={inputId} className="sr-only">
            Kollektion durchsuchen
          </label>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Düfte oder Noten suchen"
            className="w-full border-0 bg-transparent p-0 font-serif text-2xl font-light text-ink placeholder:text-taupe/70 focus:outline-none focus:ring-0 lg:text-3xl"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Suche schliessen"
            className="shrink-0 p-1 text-stone transition-colors hover:text-ink"
          >
            <CloseIcon />
          </button>
        </div>

        {!hasQuery && (
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="eyebrow">Beliebte Noten</span>
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setQuery(suggestion)}
                className="text-[13px] font-light text-stone underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {hasQuery && (
          <div className="mt-8" aria-live="polite">
            {results.length === 0 ? (
              <p className="body-copy">Keine Düfte gefunden für «{query}».</p>
            ) : (
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {results.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={routes.product(product.slug)}
                      onClick={onClose}
                      className="group flex items-center gap-4"
                    >
                      <div className="relative aspect-[3/4] w-16 shrink-0 overflow-hidden bg-cream">
                        <Image
                          src={product.images[0].src}
                          alt=""
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-serif text-xl tracking-[0.04em] text-ink transition-colors group-hover:text-stone">
                          {product.name}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-label text-taupe">
                          {formatPrice(product.price, product.currency)}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
