
// Footer.jsx

import React from "react";
import {
  FaTelegramPlane,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";

import { SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/10 bg-black/40 px-6 py-14 backdrop-blur-xl lg:px-14">
      
      <div className="grid gap-10 lg:grid-cols-4">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-light leading-snug">
            GENVAULT —
            <span className="text-yellow-400">
              {" "}
              Infrastructure for the Next Generation.
            </span>
          </h2>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Blockchain infrastructure for secure decentralized asset
            ownership, inheritance, and digital vault protection.
          </p>
        </div>

        {/* PLATFORM */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-yellow-400">
            Platform
          </h3>

          <div className="space-y-3 text-gray-400">
            <p className="cursor-pointer hover:text-yellow-400 transition">
              About
            </p>

            <p className="cursor-pointer hover:text-yellow-400 transition">
              Roadmap
            </p>

            <p className="cursor-pointer hover:text-yellow-400 transition">
              Presale
            </p>

            <p className="cursor-pointer hover:text-yellow-400 transition">
              Whitepaper
            </p>
          </div>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-yellow-400">
            Resources
          </h3>

          <div className="space-y-3 text-gray-400">
            <p className="cursor-pointer hover:text-yellow-400 transition">
              Documentation
            </p>

            <p className="cursor-pointer hover:text-yellow-400 transition">
              Support
            </p>

            <p className="cursor-pointer hover:text-yellow-400 transition">
              Audit
            </p>

            <p className="cursor-pointer hover:text-yellow-400 transition">
              Tokenomics
            </p>
          </div>
        </div>

        {/* COMMUNITY */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-yellow-400">
            Community
          </h3>

          <div className="flex gap-4">
            
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-zinc-900 text-xl text-yellow-400 transition hover:bg-yellow-500 hover:text-black">
              <SiX />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-zinc-900 text-xl text-yellow-400 transition hover:bg-yellow-500 hover:text-black">
              <FaTelegramPlane />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-zinc-900 text-xl text-yellow-400 transition hover:bg-yellow-500 hover:text-black">
              <FaGithub />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-zinc-900 text-xl text-yellow-400 transition hover:bg-yellow-500 hover:text-black">
              <FaDiscord />
            </button>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-14 border-t border-yellow-500/10 pt-6 text-center text-sm text-gray-500">
        © 2026 GENVAULT. All Rights Reserved.
      </div>
    </footer>
  );
}

