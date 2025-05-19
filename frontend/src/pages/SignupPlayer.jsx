import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const SignupPlayer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
    position: '',
    height: '',
    weight: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/player/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone_number: formData.phone_number,
        position: formData.position,
        height: formData.height,
        weight: formData.weight,
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-popup">
      <h2>Signup as Player</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Re-type Password" onChange={handleChange} required />
        <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange} />
        <input type="text" name="position" placeholder="Position" onChange={handleChange} />
        <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} />
        <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPlayer;