import React from "react";
import { Link } from "react-router-dom"; 
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">


 
    <div className="footer-brand">
          <h2>TuneX <span>Global</span></h2>
          <p>Driving purity & performance in every drop.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mission">Mission</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <ul>
            <li>📞 +91 62817 37661</li>
            <li>📧 balajipichika2497@gmail.com</li>
            <li>📍 Chennai, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Balaji. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
