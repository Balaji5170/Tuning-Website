import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo"><span>TuneX</span> Global</div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="nav-right">
        <ul className={`nav-links-home ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/mission" onClick={() => setMenuOpen(false)}>Mission</Link></li>
          <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
