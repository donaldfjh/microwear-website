import React from "react";
import "./WhyChooseUs.css";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: "⚡",
      title: "Advanced Technology",
      description:
        "Cutting-edge sensors and processors deliver accurate health tracking and seamless performance.",
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description:
        "Crafted with high-quality materials and attention to detail for durability and style.",
    },
    {
      icon: "🔋",
      title: "Long Battery Life",
      description:
        "Extended battery performance keeps you connected throughout your day without frequent charging.",
    },
    {
      icon: "🎨",
      title: "Stylish Design",
      description:
        "Modern aesthetics that complement any outfit, from casual to professional.",
    },
    {
      icon: "💪",
      title: "Health & Fitness",
      description:
        "Comprehensive health monitoring including heart rate, sleep tracking, and activity metrics.",
    },
    {
      icon: "🌐",
      title: "Smart Connectivity",
      description:
        "Stay connected with notifications, calls, and app integrations right on your wrist.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-us-container">
        <h2 className="why-choose-us-title">Why Choose MicroWear?</h2>
        <p className="why-choose-us-subtitle">
          Experience the perfect blend of technology, style, and functionality
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
