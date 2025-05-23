import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import './Login.css';

const LoginPlayer = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/player/login', {
        email: formData.email,
        password: formData.password,
      });
      alert(response.data.message);
      localStorage.setItem('token', response.data.token); // Save the token for authentication
       const redirectPath = location.state?.from || '/';
      navigate(redirectPath);
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-popup">
      <h2>Login as Player</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span className="signup-link" onClick={() => navigate('/signup/player')}>
          Signup
        </span>
      </p>
    </div>
  );
};

export default LoginPlayer;