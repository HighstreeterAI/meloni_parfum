export function formatPrice(amount: number, currency = "CHF"): string {
  if (Number.isInteger(amount)) {
    return `${currency} ${amount.toLocaleString("de-CH")}.–`;
  }

  const formatted = amount.toLocaleString("de-CH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `${currency} ${formatted}`;
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
