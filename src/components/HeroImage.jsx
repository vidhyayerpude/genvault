
// HeroImage.jsx

import React from "react";
import coinImage from "../assets/coin.png";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden">

      {/* ================= MAIN GLOW ================= */}
     
      <div
        className="
         
  w-[280px]
  md:w-[380px]
  lg:w-[500px]
  mx-auto"
      ></div>

      {/* ================= SECOND GLOW ================= */}
      <div
        className="
          absolute
          w-[250px]
          h-[250px]
          rounded-full
          border
          border-yellow-500/10
        "
      ></div>

      {/* ================= IMAGE ================= */}
      <img
        src={coinImage}
        alt="GENVAULT Coin"
        className="
          relative
          z-10
          coin-animation
          w-[280px]
          md:w-[380px]
          lg:w-[450px]
          xl:w-[520px]
          object-contain
          drop-shadow-[0_0_60px_rgba(255,215,0,0.35)]
        "
      />

      {/* ================= PRICE CARD ================= */}
      <div
        className="
          absolute
          bottom-6
          right-0
          glass
          rounded-2xl
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        <p className="text-sm text-gray-400">
          Token Price
        </p>

        <h3 className="text-2xl font-bold text-yellow-400">
          $0.0452
        </h3>

        <p className="text-sm text-green-400">
          +12.4%
        </p>
      </div>

      {/* ================= FLOATING BADGE ================= */}
      <div
        className="
          absolute
          top-10
          left-0
          glass
          rounded-full
          px-4
          py-2
          text-sm
          text-yellow-400
        "
      >
        Web3 Secured
      </div>
    </div>
  );
}

