import React, { useState } from "react";
import type { FormEvent } from "react";
import "./ContactForm.css";

interface ContactFormProps {
  initialSubject?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialSubject = "",
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: initialSubject,
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const accessKey = import.meta.env.VITE_WEB3FORMS_PUBLIC_KEY;

      // Debug: Log environment check (remove after testing)
      console.log("Environment check:", {
        hasAccessKey: !!accessKey,
        keyPrefix: accessKey ? accessKey.substring(0, 8) + "..." : "undefined",
      });

      // Debug: Check if access key is available
      if (!accessKey) {
        console.error("Web3Forms access key is not configured!");
        alert(
          "Contact form is not properly configured. Please contact the site administrator."
        );
        return;
      }

      try {
        // Send email using Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to: "donaldfang@njytech.com.cn",
          }),
        });

        const result = await response.json();

        if (result.success) {
          console.log("Form submitted successfully:", formData);
          setIsSubmitted(true);

          // Reset form after successful submission
          setTimeout(() => {
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
            setIsSubmitted(false);
          }, 3000);
        } else {
          console.error("Form submission failed:", result);
          alert(`Failed to send message: ${result.message || "Unknown error"}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="contact-form">
      {isSubmitted ? (
        <div className="success-message">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h3>Thank you for your message!</h3>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span className="error-message" id="name-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span className="error-message" id="email-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject">
              Subject <span className="required">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? "error" : ""}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            {errors.subject && (
              <span className="error-message" id="subject-error">
                {errors.subject}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={errors.message ? "error" : ""}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span className="error-message" id="message-error">
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};
