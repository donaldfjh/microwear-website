import type { Product } from "../types/product";

/**
 * Search products by query string
 * Performs case-insensitive search across product names and descriptions
 * @param products - Array of products to search
 * @param query - Search query string
 * @returns Filtered array of products matching the query
 */
export function searchProducts(products: Product[], query: string): Product[] {
  if (!query.trim()) {
    return products;
  }

  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
  );
}
