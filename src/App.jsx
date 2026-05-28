import React from "react";
import bgImage from "./assets/bg.jpg";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="
       relative
    min-h-screen
    w-full
    overflow-x-hidden
    bg-cover
    bg-center
    bg-no-repeat
    text-white
      "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75 z-0"></div>

      {/* GOLD GLOW */}
      <div className="absolute top-0 left-[-200px] w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] z-0"></div>
<div className="absolute inset-0 bg-black/70 z-0"></div>
<div className="absolute bottom-0 right-[-200px] w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] z-0"></div>

      {/* WEBSITE */}
      <div className="relative z-10">

        <Navbar />

        <HomePage />

        <Footer />

      </div>
    </div>
  );
}