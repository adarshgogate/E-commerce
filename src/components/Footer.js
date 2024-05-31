import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          
          <div className="footer-section">
            <h4>About Shopify</h4>
            <p>One-stop online shop for all your shopping needs.</p>
          </div>
          
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Information</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: support@shopify.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shopify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
