import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Contact.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: `Thank you, ${formData.name || "Guest"}!`,
      text: "Your message has been received. We'll get back to you soon. 📞🚀",
      icon: "success",
      background: "linear-gradient(to bottom right, #0d0d0d, #1a1a1a)",
      color: "#fff",
      confirmButtonColor: "#c9af2c",
      confirmButtonText: "Great!",
      backdrop: `
        rgba(0,0,0,0.6)
        url("https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif")
        center top
        no-repeat
      `
    });

    setFormData({
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      message: ""
    });
  };

  return (
    <div>
      <Navbar/>
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you — let’s build something powerful together.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions, collaborations, or business inquiries? Reach out below.</p>
          <ul>
            <li><strong>Email:</strong> balajipichika2497.com</li>
            <li><strong>Phone:</strong> +91 62817 37661</li>
            <li><strong>Address:</strong> Rajahmundry, Andhra Pradesh, India</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* 🔹 Country Code + Phone Input */}
          <div className="form-group phone-input">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+91">🇮🇳 India (+91)</option>
              <option value="+1">🇺🇸 United States (+1)</option>
              <option value="+44">🇬🇧 United Kingdom (+44)</option>
              <option value="+61">🇦🇺 Australia (+61)</option>
              <option value="+971">🇦🇪 United Arab Emirates (+971)</option>
              <option value="+81">🇯🇵 Japan (+81)</option>
              <option value="+49">🇩🇪 Germany (+49)</option>
              <option value="+33">🇫🇷 France (+33)</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="cta-btn">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
    </div>
  );
}
