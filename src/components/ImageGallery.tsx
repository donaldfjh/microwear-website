import React, { useState, useEffect } from "react";
import "./ImageGallery.css";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Auto-play: cycle through images every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="image-gallery-empty">
        <p>No images available</p>
      </div>
    );
  }

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="image-gallery">
      <div className="image-gallery-main">
        <img
          src={images[selectedImageIndex]}
          alt={`${alt} - Image ${selectedImageIndex + 1}`}
          className="main-image"
        />
      </div>

      {images.length > 1 && (
        <div className="image-gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${
                index === selectedImageIndex ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img src={image} alt={`${alt} thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
