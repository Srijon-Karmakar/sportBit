
import React from 'react';
import './Login.css';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Login = () => {
  // const [activeTab, setActiveTab] = useState('login');
  // const [role, setRole] = useState('player');
  const { role } = useParams();

  return (
    <div className="login-popup">
    <h2>Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
);
};
  

export default Login;


