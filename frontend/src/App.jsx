import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Login2 from './pages/Login2';
import PlayerDash from './pages/PlayerDash';
import ForgotPassword from './pages/ForgotPassword';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import LoginPlayer from './pages/LoginPlayer';
import LoginClub from './pages/LoginClub';
import LoginManager from './pages/LoginManager';
import LoginAdmin from './pages/LoginAdmin';
import SignupPlayer from './pages/SignupPlayer';
import SignupClub from './pages/SignupClub';
import SignupManager from './pages/SignupManager';
import SignupAdmin from './pages/SignupAdmin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/login/player" element={<Login role="player" />} /> */}
      {/* <Route path="/login/club" element={<Login role="club" />} /> */}
      {/* <Route path="/login/manager" element={<Login role="manager" />} /> */}
      {/* <Route path="/login/admin" element={<Login role="admin" />} /> */}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/playerDash" element={<PlayerDash />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/login/player" element={<LoginPlayer />} />
      <Route path="/login/club" element={<LoginClub />} />
      <Route path="/login/manager" element={<LoginManager />} />
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/signup/player" element={<SignupPlayer />} />
      <Route path="/signup/club" element={<SignupClub />} />
      <Route path="/signup/manager" element={<SignupManager />} />
      <Route path="/signup/admin" element={<SignupAdmin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
