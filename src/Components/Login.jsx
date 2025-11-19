import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem("userData");

    if (!storedUserData) {
      setMessage("❌ No registered user found. Please register first!");
      return;
    }

    const storedUser = JSON.parse(storedUserData);

    console.log("Stored User:", storedUser);
    console.log("Entered Email:", formData.email);
    console.log("Entered Password:", formData.password);

    // Compare with trimmed values to avoid space mismatch
    if (
      formData.email.trim() === storedUser.email.trim() &&
      formData.password.trim() === storedUser.password.trim()
    ) {
      localStorage.setItem("loggedIn", "true");
      setMessage(`✅ Login successful! Welcome, ${storedUser.firstname} ${storedUser.lastname}`);
      setTimeout(() => navigate("/home"), 500);
    } else {
      setMessage("❌ Invalid email or password. Please try again.");
    }
  };

  // Redirect if already logged in
  React.useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      setTimeout(() => navigate("/home", { replace: true }), 0);
    }
  }, [navigate]);

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-login">Login</button>
      </form>

      {message && <p className="message">{message}</p>}

      <div className="nav-links">
        <Link to="/register" className="btn-link">Register</Link>
      </div>
    </div>
  );
}

export default Login;
