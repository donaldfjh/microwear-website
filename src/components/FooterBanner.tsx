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
                  JiaDa R&D Building, North Hi-Tech Park, Nanshan District
                  <br />
                  Shenzhen 518057, China
                </p>
              </div>
            </div>
            <div className="location-item">
              <span className="location-icon">📞</span>
              <div className="location-text">
                <p className="location-label">WhatsApp</p>
                <p className="location-value">+852 6733 7121</p>
              </div>
            </div>
            <div className="location-item">
              <span className="location-icon">✉️</span>
              <div className="location-text">
                <p className="location-label">Email</p>
                <p className="location-value">donaldfang@njytech.com.cn</p>
              </div>
            </div>
            <div className="location-item">
              <span className="location-icon">🕒</span>
              <div className="location-text">
                <p className="location-label">Business Hours</p>
                <p className="location-value">
                  Mon - Fri: 9:30 AM - 6:30 PM
                  <br />
                  Sat: 9:30 AM - 6:00 PM
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
