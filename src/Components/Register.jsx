import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    firstname: '',
    lastname: '',
    mobilenumber: '',
    email: '',
    password: ''
  });

  const { firstname, lastname, mobilenumber, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('✅ Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          placeholder="Enter First Name"
          onChange={handleChange}
          required
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          placeholder="Enter Last Name"
          onChange={handleChange}
          required
        />

        <label>Mobile Number:</label>
        <input
          type="number"
          name="mobilenumber"
          value={mobilenumber}
          placeholder="Enter Mobile Number"
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter Password"
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-register">Register</button>
      </form>

      <div className="nav-links">
        <Link to="/login" className="btn-link">Already have an account? Login</Link>
      </div>
    </div>
  );
}

export default Register;
