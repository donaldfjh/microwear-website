import React from "react";
import "./Testimonials.css";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  logo: string;
  feedback: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Tech Innovators Inc.",
    logo: "/images/logos/company1.png",
    feedback:
      "The Watch 11 Pro has transformed how I track my fitness goals. The battery life is incredible and the health monitoring features are top-notch!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Fitness First",
    logo: "/images/logos/company2.png",
    feedback:
      "As a personal trainer, I recommend MicroWear watches to all my clients. The accuracy and reliability are unmatched in this price range.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "HealthTech Solutions",
    logo: "/images/logos/company3.png",
    feedback:
      "The Ultra 5 is perfect for my outdoor adventures. It's rugged, reliable, and the GPS tracking is incredibly accurate even in remote areas.",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  console.log(
    "Testimonials component rendering",
    duplicatedTestimonials.length
  );

  return (
    <section
      className="testimonials-section"
      style={{ minHeight: "400px", display: "block" }}
    >
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        <p className="testimonials-subtitle">
          Trusted by thousands of satisfied customers worldwide
        </p>

        <div className="testimonial-carousel">
          <div className="testimonial-track">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="testimonial-card"
              >
                <div className="testimonial-logo">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    onError={(e) => {
                      // Fallback to a placeholder if logo doesn't exist
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e0e0e0'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3ELogo%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>

                <p className="testimonial-feedback">"{testimonial.feedback}"</p>

                <div className="testimonial-author">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
