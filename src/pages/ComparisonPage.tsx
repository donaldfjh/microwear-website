import React from "react";
import { ComparisonTable } from "../components/ComparisonTable";
import { useComparison } from "../contexts/ComparisonContext";
import "./ComparisonPage.css";

export const ComparisonPage: React.FC = () => {
  const { comparisonProducts, removeFromComparison, clearComparison } =
    useComparison();

  const handleRemoveProduct = (productId: string) => {
    removeFromComparison(productId);
  };

  const handleClearAll = () => {
    clearComparison();
  };

  const handleBrowseProducts = () => {
    window.location.href = "/products";
  };

  if (comparisonProducts.length === 0) {
    return (
      <div className="comparison-page">
        <div className="comparison-header">
          <h1>Product Comparison</h1>
          <p>Compare up to 3 smartwatches side by side</p>
        </div>

        <div className="empty-comparison">
          <svg
            className="empty-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
          <h2>No products to compare</h2>
          <p>
            Start adding products to your comparison list to see them side by
            side. You can compare up to 3 products at once.
          </p>
          <button className="browse-btn" onClick={handleBrowseProducts}>
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="comparison-page">
      <div className="comparison-header">
        <div className="header-content">
          <div>
            <h1>Product Comparison</h1>
            <p>Comparing {comparisonProducts.length} of 3 products</p>
          </div>
          <button className="clear-all-btn" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
      </div>

      <div className="comparison-content">
        <ComparisonTable
          products={comparisonProducts}
          onRemoveProduct={handleRemoveProduct}
        />

        {comparisonProducts.length < 3 && (
          <div className="add-more-notice">
            <svg
              className="info-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>
              You can add {3 - comparisonProducts.length} more product
              {3 - comparisonProducts.length !== 1 ? "s" : ""} to your
              comparison.
            </span>
            <button className="add-more-btn" onClick={handleBrowseProducts}>
              Add More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
