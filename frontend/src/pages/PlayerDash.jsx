// import './PlayerDash.css';

// const PlayerDash = () => {
//   return (
//     <div classNameName="dashboard">
//       <aside>
//         <h2>SportBit</h2>
//         <nav>
//           <a href="#">Dashboard</a>
//           <a href="#">Statistics</a>
//           <a href="#">Club Offers</a>
//           <a href="#">Applications</a>
//           <a href="#">My Profile</a>
//         </nav>
//       </aside>

//       <main>
//         <h1>Player Dashboard</h1>
//         <div classNameName="main-content">
//           <div classNameName="left">
//             <div classNameName="profile-card">
//               <img src="/avatar.png" alt="avatar" />
//               <h3>user.name</h3>
//               <div classNameName="stats">
//                 <p>381K</p>
//                 <p>13K</p>
//                 <p>134K</p>
//               </div>
//             </div>
//           </div>
//           <div classNameName="right">
//             <h3>Next Match</h3>
//             <p>East Bengal vs Mohun Bagan</p>
//             <p>7:30 PM, Kolkata</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PlayerDash;


// updte
// import React from "react";
// import "./PlayerDash.css";

// const Dashboard = () => {
//   return (
//     <div classNameName="dashboard-container">
//       <header classNameName="dashboard-header">
//         <h1>Player Dashboard</h1>
//         <p>Welcome back, John Doe</p>
//       </header>

//       <main classNameName="dashboard-main">
//         <div classNameName="stat-grid">
//           <div classNameName="stat-card">
//             <h2>20</h2>
//             <p>Games Played</p>
//           </div>
//           <div classNameName="stat-card">
//             <h2>15</h2>
//             <p>Goals Scored</p>
//           </div>
//           <div classNameName="stat-card">
//             <h2>10</h2>
//             <p>Assists</p>
//           </div>
//           <div classNameName="stat-card">
//             <h2>3</h2>
//             <p>Yellow Cards</p>
//           </div>
//         </div>

//         <section classNameName="performance-section">
//           <h3>Performance Summary</h3>
//           <p>Keep improving your stats by following the training schedule and match feedback.</p>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;



// update
// import React from 'react';
// import '../style.css';

import React, { useState } from 'react';
import './PlayerDash.css';
import { Link } from 'react-router-dom';

const PlayerDash = () => {
  return (
    <>
      
      <div className="dashboard-container">
        <aside className="sidebar">
            <div className="sidebar-header">
                <i className="fas fa-shield-alt logo-icon"></i>
                <h2>SportSync Hub</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li className="active"><a href="#dashboard-overview"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
                    <li><a href="#profile"><i className="fas fa-user-circle"></i> My Profile</a></li>
                    <li><a href="#analysis"><i className="fas fa-chart-line"></i> Performance Analysis</a></li>
                    <li><a href="#schedule"><i className="fas fa-calendar-alt"></i> Next Matches</a></li>
                    <li><a href="#apply-clubs"><i className="fas fa-file-signature"></i> Apply to Clubs</a></li>
                    <li><a href="#kpi"><i className="fas fa-bullseye"></i> KPI Tracking</a></li>
                    <li><a href="#videos"><i className="fas fa-video"></i> Upload Videos</a></li>
                    <li><a href="index.html" id="logout"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                </ul>
            </nav>
        </aside>
        <main className="main-content">
            <header className="main-header">
                <h1>Welcome, Player!</h1>
                <div className="user-info">
                    <span>Srijon Karmakar</span>
                    <img src="https://placehold.co/40x40/0A2463/FFF?text=JD" alt="User Avatar" className="avatar" />
                </div>
            </header>
            <section id="dashboard-overview" className="content-section active-section">
                <h2>Dashboard Overview</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <i className="fas fa-running stat-icon"></i>
                        <h3>Matches Played</h3>
                        <p>25</p>
                    </div>
                    <div className="stat-card">
                        <i className="fas fa-bullseye stat-icon"></i>
                        <h3>Goals Scored</h3>
                        <p>12</p>
                    </div>
                    <div className="stat-card">
                        <i className="fas fa-handshake stat-icon"></i>
                        <h3>Applications Sent</h3>
                        <p>3</p>
                    </div>
                     <div className="stat-card">
                        <i className="fas fa-clipboard-list stat-icon"></i>
                        <h3>Next Match</h3>
                        <p>2025-05-20 vs Team B</p>
                    </div>
                </div>
                </section>
            <section id="profile" className="content-section">
                <h2>My Profile</h2>
                <form className="profile-form">
                    <div className="form-row">
                        <div className="input-group">
                            <label for="playerName">Full Name</label>
                            <input type="text" id="playerName" value="John Doe" />
                        </div>
                        <div className="input-group">
                            <label for="playerAge">Age</label>
                            <input type="number" id="playerAge" value="23" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="playerPosition">Position</label>
                            <input type="text" id="playerPosition" value="Forward"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="playerTeam">Current Team (if any)</label>
                            <input type="text" id="playerTeam" value="N/A"/>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="playerBio">Biography</label>
                        <textarea id="playerBio" rows="4">Dynamic forward with a keen eye for goal...</textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Save Profile</button>
                </form>
            </section>
            <section id="analysis" className="content-section">
                <h2>Performance Analysis</h2>
                <p>Detailed performance charts and statistics will be displayed here. (e.g., heat maps, shot accuracy, pass completion rate).</p>
                <img src="https://placehold.co/600x300/EFEFEF/333?text=Performance+Chart+Placeholder" alt="Performance Chart" style="width:100%;max-width:600px; margin-top:20px;" />
            </section>
            <section id="schedule" className="content-section">
                <h2>Next Match Schedules</h2>
                <ul>
                    <li>2025-05-20: vs Team Alpha @ Home Stadium - 7:00 PM</li>
                    <li>2025-05-27: vs Team Beta @ Away Ground - 3:00 PM</li>
                    <li>2025-06-05: vs Gamma FC @ Neutral Venue - 5:00 PM</li>
                </ul>
            </section>
            <section id="apply-clubs" className="content-section">
                <h2>Apply to Different Clubs</h2>
                <div className="club-listing">
                    <div className="club-card">
                        <h3>Elite FC</h3>
                        <p>Looking for talented strikers.</p>
                        <button className="btn btn-secondary">Apply Now</button>
                    </div>
                    <div className="club-card">
                        <h3>City Rovers</h3>
                        <p>Midfield positions open.</p>
                        <button className="btn btn-secondary">Apply Now</button>
                    </div>
                </div>
            </section>
            <section id="kpi" className="content-section">
                <h2>Key Performance Indicators (KPI)</h2>
                <p>Track your progress against set targets. (e.g., Sprints per game, successful tackles, assists).</p>
                 <ul className="kpi-list">
                    <li><strong>Speed:</strong> 8/10 <div className="kpi-bar"><div style="width: 80%;"></div></div></li>
                    <li><strong>Stamina:</strong> 7/10 <div className="kpi-bar"><div style="width: 70%;"></div></div></li>
                    <li><strong>Shooting Accuracy:</strong> 85% <div className="kpi-bar"><div style="width: 85%;"></div></div></li>
                </ul>
            </section>
            <section id="videos" className="content-section">
                <h2>Upload Videos</h2>
                <p>Showcase your skills by uploading match highlights or training clips.</p>
                <input type="file" id="videoUpload" accept="video/*" />
                <button className="btn btn-primary" style="margin-top:10px;">Upload Video</button>
                <div className="video-gallery" style="margin-top:20px;">
                    <p>Your uploaded videos will appear here.</p>
                    </div>
                    <Link to="/PlayerDash"></Link>
            </section>
        </main>
    </div>


      
    </>
  );
};

export default PlayerDash;
