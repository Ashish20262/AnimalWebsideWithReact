import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="container">
          <div className="row g-4">
            {/* Column 1: Brand & Social */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-section">
                <h5 className="footer-title mb-3">
                  <span className="footer-icon">🐾</span> Paws & Play
                </h5>
                <p className="footer-description">
                  Professional pet grooming and care services dedicated to keeping your furry friends happy and healthy.
                </p>
                <div className="social-icons mt-4">
                  <a href="#facebook" className="social-link" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="#instagram" className="social-link" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#twitter" className="social-link" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-section">
                <h5 className="footer-title mb-3">Services</h5>
                <ul className="footer-links">
                  <li><a href="#services">Full Grooming</a></li>
                  <li><a href="#services">Bath & Brush</a></li>
                  <li><a href="#services">Daycare</a></li>
                  <li><a href="#services">Boarding</a></li>
                  <li><a href="#services">Nail Trim</a></li>
                  <li><a href="#services">Puppy Package</a></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Company */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-section">
                <h5 className="footer-title mb-3">Company</h5>
                <ul className="footer-links">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>

            {/* Column 4: Contact Info */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-section">
                <h5 className="footer-title mb-3">Contact Info</h5>
                <div className="contact-item mb-3">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>123 Pet Street, Grooming City, PC 12345</span>
                </div>
                <div className="contact-item mb-3">
                  <FaPhone className="contact-icon" />
                  <a href="tel:+1234567890">(123) 456-7890</a>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:info@pawsandplay.com">info@pawsandplay.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="copyright-text">
                © {currentYear} Paws & Play. All rights reserved. | Crafted with <span className="heart">❤️</span> for pet lovers
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
