// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@eshop.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 E-Shop St, Commerce City</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Shop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
