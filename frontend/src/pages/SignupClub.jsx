import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const SignupClub = () => {
  const [formData, setFormData] = useState({
    club_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    establish_date: '',
    phone_number: '',
    description: '',
  });

  const location = useLocation();
  const navigate = useNavigate();

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
      const response = await axios.post('http://localhost:5000/club/signup', {
        club_name: formData.club_name,
        email: formData.email,
        password: formData.password,
        location: formData.location,
        establish_date: formData.establish_date,
        phone_number: formData.phone_number,
        description: formData.description,
      });
      alert(response.data.message);
       const redirectPath = location.state?.from || '/palyerDash';
      navigate(redirectPath);
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-popup">
      <h2>Signup as Club</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="club_name" placeholder="Club Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Re-type Password" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <input type="date" name="establish_date" placeholder="Establish Date" onChange={handleChange} />
        <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupClub;