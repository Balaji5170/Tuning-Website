import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import car from "./assets/car.jpg";

export default function Home() {
  const navigate = useNavigate();
  

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="home-page">
      <Navbar />
 {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Unleash the True Power of Your Engine ⚡</h1>
          <p>At TuneX Global, we specialize in precision ECU remapping...</p>
          <button
  className="explore-btn"
  onClick={() => {
    const audio = document.getElementById("exhaustAudio");
    audio.play();

    // Rev shake first
    document.body.classList.add("shake-engine");

    setTimeout(() => {
      document.body.classList.remove("shake-engine");
      document.body.classList.add("idle-vibe");

      // Remove idle effect after 4s
      setTimeout(() => {
        document.body.classList.remove("idle-vibe");
      }, 4000);

    }, 600); // shake duration
  }}
>
  🔥 Hear the Exhaust – Explore Tuning
</button>

        </div>

        {/* ✅ Exhaust Sound */}
        <audio id="exhaustAudio" preload="auto">
          <source src="/sounds/exhaust.mp3" type="audio/mpeg" />
        </audio>
      </section>
      {/* Mission */}
      <section id="mission" className="mission-section">
        <div className="mission-content">
          <img src={car} alt="car" className="mission-img" />
          <div>
            <h2>Our Mission & Goals</h2>
            <p>Providing cutting-edge ECU tuning solutions with global expertise.</p>
            <ul>
              <li>⚙️ Superior remapping technology</li>
              <li>🌍 Global tuner network</li>
              <li>🚗 Customer-first approach</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section id="blogs" className="blogs-section">
        <h2>Latest Reviews & Blog Updates</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <video src="/videos/review1.mp4" controls />
            <h3>Stage 1 Remap - BMW M3</h3>
          </div>

          <div className="blog-card">
            <img
              src="https://images.unsplash.com/photo-1600703125240-9c3a3b067a1f"
              alt="ECU"
            />
            <h3>ECU Tuning: Explained</h3>
          </div>

          <div className="blog-card">
            <video src="/videos/review2.mp4" controls />
            <h3>Audi S4 Review</h3>
          </div>
        </div>
      </section>

      {/* Network */}
      <section id="network" className="network-section">
        <h2>Our Global Network</h2>
        <div className="network-grid">
          <div className="network-card">
            <h3>🇮🇳 India</h3>
            <p>Rajahmundry, Hyderabad, Chennai</p>
          </div>
          <div className="network-card">
            <h3>🌎 Latin America</h3>
            <p>Managed by Marco</p>
          </div>
          <div className="network-card">
            <h3>🇪🇺 Europe</h3>
            <p>Managed by Alana</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-preview">
        <h2>Get in Touch</h2>
        <p>Have questions? Let's connect.</p>
        <button className="contact-btn" onClick={() => navigate("/contact")}>Contact Us</button>
      </section>

      <Footer />
    </div>
  );
}