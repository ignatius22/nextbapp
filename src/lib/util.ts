export const url = "https://dummyjson.com/products";

export function formatCurrency(
  amount: number,
  currencySymbol: string = "$"
): string {
  return currencySymbol + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
