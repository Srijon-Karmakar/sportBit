// import React from 'react';
// import './Signup.css';

// const SignupAdmin = () => {
//   return (
//     <div className="signup-popup">
//       <h2>Signup as Admin</h2>
//       <form>
//         <input type="text" placeholder="Name" />
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default SignupAdmin;


// update 
import React, { useState } from 'react';
import './Signup.css';

const SignupAdmin = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Add signup logic here (e.g., API call)
    alert('Signup successful!');
  };

  const handleGoogleSignup = () => {
    // Add Google signup logic here
    alert('Signup with Google clicked!');
  };

  return (
    <div className="signup-popup">
      <h2>Signup as Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-type Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p>Or</p>
      <button className="google-signup-btn" onClick={handleGoogleSignup}>
        Signup with Google
      </button>
    </div>
  );
};

export default SignupAdmin;