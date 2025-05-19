import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginClub = () => {
  const navigate = useNavigate();

  return (
    <div className="login-popup">
      <h2>Login as Club</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        <span className="forgot-password-link" onClick={() => navigate('/forgot-password')}>
          Forgot Password?
        </span>
      </p>
      <p>
        Don't have an account?{' '}
        <span className="signup-link" onClick={() => navigate('/signup/club')}>
          Signup
        </span>
      </p>
    </div>
  );
};

export default LoginClub;