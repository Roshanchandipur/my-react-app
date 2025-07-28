// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css'; // Assuming you have a CSS file for styling
const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      {/* Logo/icon */}
      <img src="/logo192.png" alt="Techispot logo" className="logo-icon" />
      <span className="brand">TECHISPOT</span>
    </div>
    <div className="navbar-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/tech-news" className="nav-link">Tech news</Link>
      <Link to="/tech-memes" className="nav-link">Tech memes</Link>
      <Link to="/projects" className="nav-link">Tech Projects</Link>
      <Link to="/sign-in" className="nav-link signin-btn">Sign in</Link>
    </div>
  </nav>
);

export default Navbar;
