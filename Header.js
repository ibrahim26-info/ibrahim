import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/">
          <img src="/img/logo - enactus fsbm.png" alt="Enactus FSBM Logo" className="logo" />
        </Link>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/objectives">Our Objectives</Link>
          <Link to="/achievements">News and Events</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/form">Get Involved</Link>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
