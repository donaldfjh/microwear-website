import React from "react";
import type { Product } from "../types/product";
import { useComparison } from "../contexts/ComparisonContext";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  onProductClick?: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onProductClick,
}) => {
  const { addToComparison, canAddMore, comparisonProducts } = useComparison();

  const isInComparison = comparisonProducts.some((p) => p.id === product.id);

  const handleAddToCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInComparison) {
      return;
    }

    const success = addToComparison(product);
    if (!success && !canAddMore()) {
      alert("You can only compare up to 3 products at a time.");
    }
  };

  const handleCardClick = () => {
    if (onProductClick) {
      onProductClick(product.id);
    }
  };

  // Get key features (first 3 features)
  const keyFeatures = product.features.slice(0, 3);

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className="product-card-image">
        <img src={product.images[0]} alt={product.name} />
      </div>

      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>

        <ul className="product-card-features">
          {keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <button
          className={`product-card-compare-btn ${
            isInComparison ? "added" : ""
          }`}
          onClick={handleAddToCompare}
          disabled={isInComparison || (!canAddMore() && !isInComparison)}
        >
          {isInComparison ? "Added to Compare" : "Add to Compare"}
        </button>
      </div>
    </div>
  );
};
