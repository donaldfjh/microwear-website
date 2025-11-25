import React from "react";
import type { Product } from "../types/product";
import "./ComparisonTable.css";

interface ComparisonTableProps {
  products: Product[];
  onRemoveProduct: (productId: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  products,
  onRemoveProduct,
}) => {
  if (products.length === 0) {
    return null;
  }

  // Extract all unique specification keys
  const allSpecKeys = new Set<string>();
  products.forEach((product) => {
    Object.keys(product.specifications).forEach((key) => allSpecKeys.add(key));
  });

  const specKeys = Array.from(allSpecKeys);

  // Helper function to format spec key for display
  const formatSpecKey = (key: string): string => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  // Helper function to get spec value as string
  const getSpecValue = (product: Product, key: string): string => {
    const value =
      product.specifications[key as keyof typeof product.specifications];
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return value?.toString() || "N/A";
  };

  // Helper function to check if values differ across products for a given spec
  const hasDifference = (key: string): boolean => {
    if (products.length <= 1) return false;
    const values = products.map((p) => getSpecValue(p, key));
    return new Set(values).size > 1;
  };

  return (
    <div className="comparison-table">
      <div className="comparison-grid">
        {/* Header row with product names and images */}
        <div className="comparison-row header-row">
          <div className="spec-label-cell">Product</div>
          {products.map((product) => (
            <div key={product.id} className="product-cell">
              <button
                className="remove-btn"
                onClick={() => onRemoveProduct(product.id)}
                aria-label={`Remove ${product.name} from comparison`}
              >
                ×
              </button>
              <img
                src={product.images[0]}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Price row */}
        <div
          className={`comparison-row ${
            hasDifference("price") ? "has-difference" : ""
          }`}
        >
          <div className="spec-label-cell">Price</div>
          {products.map((product) => (
            <div key={product.id} className="spec-value-cell">
              ${product.price.toFixed(2)}
            </div>
          ))}
        </div>

        {/* Specification rows */}
        {specKeys.map((key) => (
          <div
            key={key}
            className={`comparison-row ${
              hasDifference(key) ? "has-difference" : ""
            }`}
          >
            <div className="spec-label-cell">{formatSpecKey(key)}</div>
            {products.map((product) => (
              <div key={product.id} className="spec-value-cell">
                {getSpecValue(product, key)}
              </div>
            ))}
          </div>
        ))}

        {/* Highlights row */}
        <div className="comparison-row">
          <div className="spec-label-cell">Key Highlights</div>
          {products.map((product) => (
            <div key={product.id} className="spec-value-cell">
              <ul className="highlights-list">
                {product.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
