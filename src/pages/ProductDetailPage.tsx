import React from "react";
import { useParams } from "react-router-dom";
import { ImageGallery } from "../components/ImageGallery";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useProducts } from "../contexts/ProductContext";
import { useComparison } from "../contexts/ComparisonContext";
import type { ProductVariant } from "../types/product";
import "./ProductDetailPage.css";

// Helper function to map color names to hex values
const getColorHex = (colorName: string): string => {
  const colorMap: Record<string, string> = {
    black: "#000000",
    white: "#FFFFFF",
    silver: "#C0C0C0",
    gold: "#FFD700",
    "rose gold": "#B76E79",
    pink: "#FFC0CB",
    blue: "#0066CC",
    green: "#28A745",
    red: "#DC3545",
    gray: "#6C757D",
    grey: "#6C757D",
    brown: "#8B4513",
    orange: "#FF8C00",
    purple: "#6F42C1",
    yellow: "#FFC107",
  };

  return colorMap[colorName.toLowerCase()] || "#CCCCCC";
};

export const ProductDetailPage: React.FC = () => {
  const { id: productId } = useParams<{ id: string }>();
  const { getProductById, loading } = useProducts();
  const { addToComparison, canAddMore, comparisonProducts } = useComparison();
  const [selectedVariant, setSelectedVariant] =
    React.useState<ProductVariant | null>(null);

  const product = productId ? getProductById(productId) : undefined;

  // Set initial variant when product loads
  React.useEffect(() => {
    if (product?.variants && product.variants.length > 0 && !selectedVariant) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product, selectedVariant]);

  // Get images to display based on selected variant
  const getDisplayImages = (): string[] => {
    if (!product) return [];

    // If a variant is selected and has an image, show variant-specific images
    if (selectedVariant?.image && product.variants) {
      const variantImage = selectedVariant.image;

      // Get all variant image paths to filter them out
      const variantImages = product.variants
        .map((v) => v.image)
        .filter((img): img is string => img !== undefined);

      // Filter product images: keep the selected variant image and non-variant images
      const filteredImages = product.images.filter((img) => {
        // Keep the selected variant image
        if (img === variantImage) return true;
        // Filter out other variant images
        if (variantImages.includes(img) && img !== variantImage) return false;
        // Keep all other images (overall, detail, screen, etc.)
        return true;
      });

      // Put variant image first, then other images
      return [
        variantImage,
        ...filteredImages.filter((img) => img !== variantImage),
      ];
    }

    // Default: show all product images
    return product.images;
  };

  if (loading) {
    return (
      <div className="product-detail-page">
        <LoadingSpinner size="large" message="Loading product details..." />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="product-not-found">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <a href="/products" className="back-to-catalog">
            Back to Catalog
          </a>
        </div>
      </div>
    );
  }

  const isInComparison = comparisonProducts.some((p) => p.id === product.id);

  const handleAddToComparison = () => {
    if (isInComparison) {
      return;
    }

    const success = addToComparison(product);
    if (success) {
      alert("Product added to comparison!");
    } else {
      alert("Cannot add more products. Maximum 3 products allowed.");
    }
  };

  const handleContactUs = () => {
    const subject = encodeURIComponent(`Inquiry about ${product.name}`);
    window.location.href = `/contact?subject=${subject}`;
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-gallery">
          <ImageGallery
            images={getDisplayImages()}
            alt={product.name}
            key={selectedVariant?.id || "default"}
          />
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.name}</h1>
          <p className="product-detail-description">{product.description}</p>

          {/* Color Selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="color-selector-section">
              <h3>Available Colors</h3>
              <div className="color-options">
                {product.variants.map((variant: ProductVariant) => (
                  <button
                    key={variant.id}
                    className={`color-option ${
                      selectedVariant?.id === variant.id ? "selected" : ""
                    }`}
                    onClick={() => setSelectedVariant(variant)}
                    aria-label={`Select ${variant.color} color`}
                    title={variant.name}
                  >
                    <div
                      className="color-swatch"
                      style={{
                        backgroundColor: getColorHex(variant.color || ""),
                        border:
                          variant.color?.toLowerCase() === "white" ||
                          variant.color?.toLowerCase() === "silver"
                            ? "1px solid #ddd"
                            : "none",
                      }}
                    />
                    <span className="color-name">{variant.color}</span>
                  </button>
                ))}
              </div>
              {selectedVariant && (
                <div className="selected-variant-info">
                  <p>
                    <strong>Selected:</strong> {selectedVariant.name}
                  </p>
                  {selectedVariant.bandMaterial && (
                    <p>
                      <strong>Band Material:</strong>{" "}
                      {selectedVariant.bandMaterial}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="product-detail-actions">
            <button
              className="btn btn-primary"
              onClick={handleContactUs}
              aria-label={`Contact us about ${product.name}`}
            >
              Contact Us to Purchase
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleAddToComparison}
              disabled={isInComparison || !canAddMore()}
              aria-label={
                isInComparison ? "Already in comparison" : "Add to comparison"
              }
            >
              {isInComparison ? "In Comparison" : "Add to Compare"}
            </button>
          </div>

          {/* Highlights Section */}
          {product.highlights && product.highlights.length > 0 && (
            <div className="product-detail-section">
              <h2>Key Highlights</h2>
              <ul className="product-highlights-list">
                {product.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Specifications Section */}
      <div className="product-specifications">
        <h2>Technical Specifications</h2>
        <div className="specifications-grid">
          <div className="spec-item">
            <strong>Display</strong>
            <span>{product.specifications.display}</span>
          </div>
          <div className="spec-item">
            <strong>Processor</strong>
            <span>{product.specifications.processor}</span>
          </div>
          <div className="spec-item">
            <strong>Battery</strong>
            <span>{product.specifications.battery}</span>
          </div>
          <div className="spec-item">
            <strong>Water Resistance</strong>
            <span>{product.specifications.waterResistance}</span>
          </div>
          <div className="spec-item">
            <strong>Connectivity</strong>
            <span>{product.specifications.connectivity.join(", ")}</span>
          </div>
          <div className="spec-item">
            <strong>Sensors</strong>
            <span>{product.specifications.sensors.join(", ")}</span>
          </div>
          <div className="spec-item">
            <strong>Compatibility</strong>
            <span>{product.specifications.compatibility.join(", ")}</span>
          </div>
          <div className="spec-item">
            <strong>Dimensions</strong>
            <span>{product.specifications.dimensions}</span>
          </div>
          <div className="spec-item">
            <strong>Weight</strong>
            <span>{product.specifications.weight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
