"use client";

import { cn } from "@/lib/format";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: "default" | "compact";
  label?: string;
  disabled?: boolean;
  className?: string;
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 10,
  size = "default",
  label = "Menge",
  disabled,
  className,
}: QuantitySelectorProps) {
  const isCompact = size === "compact";
  const buttonClass = cn(
    "flex items-center justify-center text-ink transition-colors duration-300 hover:bg-cream disabled:cursor-not-allowed disabled:text-line disabled:hover:bg-transparent",
    isCompact ? "h-10 w-9" : "h-14 w-12",
  );

  const handleChange = (next: number) => {
    if (Number.isNaN(next)) return;
    onChange(Math.min(max, Math.max(min, next)));
  };

  return (
    <div
      role="group"
      aria-label={label}
      className={cn("inline-flex items-center border border-line", className)}
    >
      <button
        type="button"
        className={buttonClass}
        onClick={() => handleChange(value - 1)}
        disabled={disabled || value <= min}
        aria-label="Menge verringern"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M0 5h10" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>
      <input
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        disabled={disabled}
        aria-label={label}
        onChange={(event) => handleChange(Number(event.target.value))}
        className={cn(
          "border-0 bg-transparent text-center font-sans font-light text-ink focus:outline-none focus:ring-0",
          isCompact ? "h-10 w-8 text-base sm:text-[13px]" : "h-14 w-10 text-base sm:text-[14px]",
        )}
      />
      <button
        type="button"
        className={buttonClass}
        onClick={() => handleChange(value + 1)}
        disabled={disabled || value >= max}
        aria-label="Menge erhöhen"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M0 5h10M5 0v10" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>
    </div>
  );
}
