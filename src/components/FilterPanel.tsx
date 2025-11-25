import React, { useState } from "react";
import type { ProductFilters } from "../contexts/ProductContext";
import "./FilterPanel.css";

interface FilterPanelProps {
  onFilterChange: (filters: ProductFilters) => void;
  availableFeatures?: string[];
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  onFilterChange,
  availableFeatures = [
    "GPS",
    "Heart Rate Monitor",
    "SpO2",
    "Sleep Tracking",
    "Waterproof",
    "NFC Payment",
    "ECG",
    "Blood Pressure",
  ],
}) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const handlePriceChange = (type: "min" | "max", value: string) => {
    const numValue = parseFloat(value) || 0;
    const newPriceRange = {
      ...priceRange,
      [type]: numValue,
    };
    setPriceRange(newPriceRange);

    // Apply filters
    applyFilters(newPriceRange, selectedFeatures);
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((f) => f !== feature)
      : [...selectedFeatures, feature];

    setSelectedFeatures(newFeatures);

    // Apply filters
    applyFilters(priceRange, newFeatures);
  };

  const applyFilters = (
    price: { min: number; max: number },
    features: string[]
  ) => {
    const filters: ProductFilters = {};

    // Only add price range if it's not the default
    if (price.min > 0 || price.max < 500) {
      filters.priceRange = price;
    }

    // Only add features if any are selected
    if (features.length > 0) {
      filters.features = features;
    }

    onFilterChange(filters);
  };

  const handleClearFilters = () => {
    setPriceRange({ min: 0, max: 500 });
    setSelectedFeatures([]);
    onFilterChange({});
  };

  const hasActiveFilters =
    priceRange.min > 0 || priceRange.max < 500 || selectedFeatures.length > 0;

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>Filters</h3>
        {hasActiveFilters && (
          <button className="clear-filters-btn" onClick={handleClearFilters}>
            Clear All
          </button>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-inputs">
          <div className="price-input-group">
            <label htmlFor="min-price">Min</label>
            <input
              id="min-price"
              type="number"
              min="0"
              max={priceRange.max}
              value={priceRange.min}
              onChange={(e) => handlePriceChange("min", e.target.value)}
              placeholder="$0"
            />
          </div>
          <span className="price-separator">-</span>
          <div className="price-input-group">
            <label htmlFor="max-price">Max</label>
            <input
              id="max-price"
              type="number"
              min={priceRange.min}
              max="500"
              value={priceRange.max}
              onChange={(e) => handlePriceChange("max", e.target.value)}
              placeholder="$500"
            />
          </div>
        </div>
        <div className="price-display">
          ${priceRange.min} - ${priceRange.max}
        </div>
      </div>

      {/* Features Filter */}
      <div className="filter-section">
        <h4>Features</h4>
        <div className="feature-checkboxes">
          {availableFeatures.map((feature) => (
            <label key={feature} className="feature-checkbox">
              <input
                type="checkbox"
                checked={selectedFeatures.includes(feature)}
                onChange={() => handleFeatureToggle(feature)}
              />
              <span>{feature}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
