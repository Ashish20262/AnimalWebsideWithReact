import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#services">
          <span className="brand-icon">🐾</span> Paws & Play
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={handleNavClick}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleNavClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={handleNavClick}>
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team" onClick={handleNavClick}>
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button className="btn btn-book rounded-pill px-4">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
