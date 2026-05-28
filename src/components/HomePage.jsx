// HomePage.jsx

import React from "react";

import Hero from "./Hero";
import Presale from "./Presale";
import Features from "./Features";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";

export default function HomePage() {
  return (
    <main className="relative z-10">

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= PRESALE ================= */}
      <Presale />

      {/* ================= FEATURES ================= */}
      <Features />

      {/* ================= TOKENOMICS ================= */}
      <Tokenomics />

      {/* ================= ROADMAP ================= */}
      <Roadmap />

    </main>
  );
}