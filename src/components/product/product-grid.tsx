import { cn } from "@/lib/format";
import type { Product } from "@/types/product";
import { ProductCard } from "./product-card";
import { ProductPanel } from "./product-panel";

const layouts = {
  collection: {
    grid: "grid gap-x-8 gap-y-16 md:grid-cols-3 md:gap-y-20 lg:gap-x-12",
    item: (index: number) => (index === 1 ? "md:mt-24" : ""),
    sizes: "(min-width: 768px) 33vw, 100vw",
    variant: "large",
  },
  related: {
    grid: "-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 scrollbar-none sm:mx-auto sm:grid sm:max-w-4xl sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 sm:overflow-visible sm:px-0 lg:gap-x-16",
    item: () => "w-[78%] shrink-0 snap-start sm:w-auto",
    sizes: "(min-width: 640px) 40vw, 78vw",
    variant: "default",
  },
} as const;

interface ProductGridProps {
  products: Product[];
  layout?: keyof typeof layouts;
  className?: string;
}

export function ProductGrid({ products, layout = "collection", className }: ProductGridProps) {
  const config = layouts[layout];

  return (
    <ul className={cn(config.grid, className)}>
      {products.map((product, index) => (
        <li key={product.id} className={config.item(index)}>
          <ProductCard product={product} variant={config.variant} sizes={config.sizes} />
        </li>
      ))}
    </ul>
  );
}

export function ProductPanelStrip({ products, className }: { products: Product[]; className?: string }) {
  return (
    <ul
      className={cn(
        "grid divide-y divide-line border-y border-line lg:grid-cols-3 lg:divide-x lg:divide-y-0",
        className,
      )}
    >
      {products.map((product) => (
        <li key={product.id}>
          <ProductPanel product={product} />
        </li>
      ))}
    </ul>
  );
}
