import React from "react";
import bgImage from "./assets/bg.jpg";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Presale from "./components/Presale";
import Features from "./components/Features";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="relative overflow-x-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url(" + bgImage + ")",
      }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10">
        <Navbar />

        <Hero />

        <Presale />

        <Features />

        <Tokenomics />

        <Roadmap />

        <Footer />
      </div>
    </div>
  );
}