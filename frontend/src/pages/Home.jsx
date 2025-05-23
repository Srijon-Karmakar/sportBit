

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home.css';
import Sidebar from '../components/Sidebar';
import watermarkImage from '../assets/Watermark.png';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="home">

      <div className="watermark">
        <img id='homeplayer-watermark' src="/Homeplayer.png" alt="player" />
        <img id='text-watermark' src={watermarkImage} alt="Watermark" />
      </div>
      <header className="home-header">
        {/* <div className="logo"> Sport <span>Bit</span></div> */}
        <div className="logo">
          <img id="logo" src="/Sportbit_ logo.png" alt="Logo" />
          <span>SportBit</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <div className="login-dropdown">
            <button className="login-button">Login</button>
            <div className="dropdown-menu">
              <button
                onClick={() => navigate('/login/player', { state: { from: location.pathname } })}
              >
                Login as Player
              </button>
              <button onClick={() => navigate('/login/club', { state: { from: location.pathname } })}>Login as Club</button>
              <button onClick={() => navigate('/login/manager', { state: { from: location.pathname } })}>Login as Manager</button>
              <button onClick={() => navigate('/login/admin', { state: { from: location.pathname } })}>Login as Admin</button>
            </div>
          </div>
        </nav>
      </header>

      <div className="home-body">
        <Sidebar />
        <div className="text-content">
          <h1>Welcome to <br /> <span>SportBit</span></h1>
          <p>A ERP Service for Players and Club/Managers</p>
          <div className="buttons">
            <button onClick={() => navigate('/login')}>Try Sportbit</button>
            <button onClick={() => navigate('/log')}>Watch Tutorials</button>
          </div>
          <p className="subtext">Analyse and view daily reports, Dashboards and stand out from others.</p>
        </div>

        <div className="image-box">
          <img id='homeplayer' src="/Homeplayer.png" alt="player" />
        </div>
      </div>
    </div>
  );
};

export default Home;