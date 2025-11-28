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
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((f) => f !== feature)
      : [...selectedFeatures, feature];

    setSelectedFeatures(newFeatures);

    // Apply filters
    applyFilters(newFeatures);
  };

  const applyFilters = (features: string[]) => {
    const filters: ProductFilters = {};

    // Only add features if any are selected
    if (features.length > 0) {
      filters.features = features;
    }

    onFilterChange(filters);
  };

  const handleClearFilters = () => {
    setSelectedFeatures([]);
    onFilterChange({});
  };

  const hasActiveFilters = selectedFeatures.length > 0;

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
