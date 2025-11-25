import React from "react";
import type { Product } from "../types/product";
import { ProductCard } from "./ProductCard";
import "./ProductGrid.css";

interface ProductGridProps {
  products: Product[];
  onProductClick?: (productId: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onProductClick,
}) => {
  if (products.length === 0) {
    return (
      <div className="product-grid-empty">
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onProductClick={onProductClick}
        />
      ))}
    </div>
  );
};
