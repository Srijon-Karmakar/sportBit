// import React from 'react';
// import './Sidebar.css';

// function Sidebar() {
//   return (
//       <div className="side-options">
//         <span>Tournaments</span>
//         <span>Statistics</span>
//         <span>Trainer</span>
//       </div>
//   );
// }

// export default Sidebar;

// update 
import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
// import PlayerDash from '../pages/PlayerDash.jsx';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="side-options">
      <span onClick={() => navigate('/PlayerDash')}>Dashboard</span>
      <span onClick={() => navigate('/statistics')}>Statistics</span>
      <span onClick={() => navigate('/trainer')}>Trainer</span>
      {/* <PlayerDash /> */}
    </div>

    
  );
}

export default Sidebar;
