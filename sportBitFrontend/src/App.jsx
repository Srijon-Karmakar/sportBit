import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/Home/HeroSection";
import Dashboard from "./components/Dashboard/Dashboard"; 
import Statistics from "./components/Statistics/Statistics";
import Trainer from "./components/Trainer/Trainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HeroSection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/trainer" element={<Trainer />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;