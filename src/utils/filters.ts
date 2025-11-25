import type { Product } from "../types/product";

export interface ProductFilters {
  priceRange?: { min: number; max: number };
  features?: string[];
  category?: string;
}

/**
 * Filter products by price range
 * @param products - Array of products to filter
 * @param min - Minimum price (inclusive)
 * @param max - Maximum price (inclusive)
 * @returns Filtered array of products within the price range
 */
export function filterByPriceRange(
  products: Product[],
  min: number,
  max: number
): Product[] {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

/**
 * Filter products by features
 * Products must have ALL specified features to be included
 * @param products - Array of products to filter
 * @param features - Array of feature strings that products must have
 * @returns Filtered array of products that have all specified features
 */
export function filterByFeatures(
  products: Product[],
  features: string[]
): Product[] {
  if (!features || features.length === 0) {
    return products;
  }

  return products.filter((product) =>
    features.every((feature) => product.features.includes(feature))
  );
}

/**
 * Filter products by category
 * @param products - Array of products to filter
 * @param category - Category string to filter by
 * @returns Filtered array of products in the specified category
 */
export function filterByCategory(
  products: Product[],
  category: string
): Product[] {
  return products.filter((product) => product.category === category);
}

/**
 * Apply multiple filters to products
 * Combines price range, feature, and category filtering
 * @param products - Array of products to filter
 * @param filters - Object containing optional filter criteria
 * @returns Filtered array of products matching all specified criteria
 */
export function filterProducts(
  products: Product[],
  filters: ProductFilters
): Product[] {
  let filtered = [...products];

  // Filter by price range
  if (filters.priceRange) {
    const { min, max } = filters.priceRange;
    filtered = filterByPriceRange(filtered, min, max);
  }

  // Filter by features
  if (filters.features && filters.features.length > 0) {
    filtered = filterByFeatures(filtered, filters.features);
  }

  // Filter by category
  if (filters.category) {
    filtered = filterByCategory(filtered, filters.category);
  }

  return filtered;
}
