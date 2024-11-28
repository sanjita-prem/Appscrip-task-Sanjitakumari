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
        <a href="https://www.amazon.in/">Shop</a>
        <a href="https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers">
          Best Seller
        </a>
        <a href="https://www.amazon.in/deals">Today's Deal</a>
        <a href="https://www.amazon.in/gp/browse.html?node=6648217031&ref_=nav_cs_fashion">
          Fashion
        </a>
        <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help">
          Customer Service
        </a>
      </nav>
    </header>
  );
};

export default Header;
