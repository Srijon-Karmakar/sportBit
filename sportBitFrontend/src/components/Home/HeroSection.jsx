import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React from "react";
import bg from "../../assets/bg.jpg";             // Use your uploaded 'Ui circle bg.jpg'

export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <Sidebar />

      <div className="flex items-center justify-between px-20 py-10">
        {/* Left */}
        <div className="max-w-xl space-y-5 z-10 ml-15 mt-15">
          <h2 className="text-xl font-medium text-black">Welcome to</h2>
          <h1 className="text-5xl font-bold text-black">SportBit</h1>
          <p className="text-lg text-gray-700">
            A ERP Service for Players and Club/Managers
          </p>
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition">
              Login as Player
            </button>
            <button className="px-6 py-2 rounded-full bg-orange-200 hover:bg-orange-300 text-black font-semibold shadow-md transition">
              Login as Manager
            </button>
          </div>
        </div>
        </div>
    </section>
  );
}
