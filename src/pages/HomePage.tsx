import React from "react";
import { HeroSection } from "../components/HeroSection";
import { ProductGrid } from "../components/ProductGrid";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonials } from "../components/Testimonials";
import { FooterBanner } from "../components/FooterBanner";
import { useProducts } from "../contexts/ProductContext";
import "./HomePage.css";

export const HomePage: React.FC = () => {
  const { products, loading } = useProducts();

  // Get featured products (first 6 products for the homepage)
  const featuredProducts = products.slice(0, 6);

  const handleCtaClick = () => {
    // Navigate to product catalog
    window.location.href = "/products";
  };

  const handleProductClick = (productId: string) => {
    // Navigate to product detail page
    window.location.href = `/products/${productId}`;
  };

  return (
    <div className="home-page">
      <HeroSection
        title="Elevate Your Lifestyle with MicroWear"
        subtitle="Premium smartwatches designed for the modern individual. Track your health, stay connected, and express your style."
        ctaText="Explore Products"
        ctaLink="/products"
        onCtaClick={handleCtaClick}
      />

      <section className="featured-products-section">
        <div className="featured-products-container">
          <h2 className="featured-products-title">Featured Products</h2>
          {loading ? (
            <LoadingSpinner
              size="large"
              message="Loading featured products..."
            />
          ) : (
            <>
              <ProductGrid
                products={featuredProducts}
                onProductClick={handleProductClick}
              />
              <div className="view-all-container">
                <a href="/products" className="view-all-link">
                  View All Products
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      <WhyChooseUs />

      <div>
        <Testimonials />
      </div>

      <div>
        <FooterBanner />
      </div>
    </div>
  );
};
