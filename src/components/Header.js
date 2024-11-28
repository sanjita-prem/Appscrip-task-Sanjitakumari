import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">LOGO</div>
        <div className="icons">
          <span className="icon">🔍 Search</span>
          <span className="icon">❤️ Wishlist</span>
          <span className="icon">📞 Contact Us</span>
          <span className="icon">🌐 Language</span>
        </div>
      </div>
      <nav className="nav-bar">
        <a href="#">Shop</a>
        <a href="#">Best Seller</a>
        <a href="#">Today's Deal</a>
        <a href="#">Fashion</a>
        <a href="#">Customer Service</a>
      </nav>
    </header>
  );
};

export default Header;
