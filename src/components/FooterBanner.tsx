import React from "react";
import "./FooterBanner.css";

export const FooterBanner: React.FC = () => {
  return (
    <section className="footer-banner-section">
      <div className="footer-banner-container">
        {/* Left Side - Company Location */}
        <div className="company-location">
          <h3 className="location-title">Visit Our Showroom</h3>
          <div className="location-details">
            <div className="location-item">
              <span className="location-icon">📍</span>
              <div className="location-text">
                <p className="location-label">Address</p>
                <p className="location-value">
                  123 Innovation Drive, Tech Valley
                  <br />
                  Silicon City, CA 94025
                </p>
              </div>
            </div>
            <div className="location-item">
              <span className="location-icon">📞</span>
              <div className="location-text">
                <p className="location-label">Phone</p>
                <p className="location-value">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="location-item">
              <span className="location-icon">✉️</span>
              <div className="location-text">
                <p className="location-label">Email</p>
                <p className="location-value">info@microwear.com</p>
              </div>
            </div>
            <div className="location-item">
              <span className="location-icon">🕒</span>
              <div className="location-text">
                <p className="location-label">Business Hours</p>
                <p className="location-value">
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Banner */}
        <div className="promo-banner">
          <div className="banner-content">
            <span className="banner-badge">Limited Time Offer</span>
            <h2 className="banner-title">Get Started with MicroWear</h2>
            <p className="banner-description">
              Experience the future of wearable technology. Contact us today for
              exclusive deals and personalized recommendations.
            </p>
            <button
              className="banner-cta"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
