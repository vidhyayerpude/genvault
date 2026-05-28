
// Logo.jsx

import React from "react";
import LOGO_IMAGE from "../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      
      {/* LOGO IMAGE */}
      <div
        className="
          relative
          flex items-center justify-center
          w-14 h-14
          rounded-full
          overflow-hidden
          border-2 border-yellow-500
          bg-black/40
          backdrop-blur-xl
          shadow-[0_0_35px_rgba(250,204,21,0.25)]
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-yellow-500/10 blur-md"></div>

        {/* Image */}
        <img
          src={LOGO_IMAGE}
          alt="GENVAULT Logo"
          className="relative z-10 w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="leading-none">
        
        <h1
          className="
            text-2xl
            lg:text-3xl
            font-bold
            tracking-[2px]
            text-white
          "
        >
          GENVAULT
        </h1>

        <p
          className="
            mt-1
            text-[10px]
            tracking-[6px]
            text-yellow-500
            uppercase
          "
        >
          GENX
        </p>
      </div>
    </div>
  );
}

