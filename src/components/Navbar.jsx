import React from "react";
import Logo from "./Logo";
import BuyNow from "./BuyNow";

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-yellow-500/10
        bg-black/50
        backdrop-blur-xl
      "
    >
      <div
        className="
          max-w-[1400px]
          mx-auto
          flex
          items-center
          justify-between
          px-6
          lg:px-14
          py-5
        "
      >
        {/* ================= LEFT ================= */}
        <Logo />

        {/* ================= CENTER MENU ================= */}
        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-12
            text-[15px]
            font-medium
          "
        >
          <a
            href="#"
            className="
              relative
              text-yellow-400
              after:absolute
              after:left-0
              after:-bottom-2
              after:h-[2px]
              after:w-full
              after:bg-yellow-400
            "
          >
            HOME
          </a>

          <a
            href="#"
            className="
              text-gray-300
              transition
              duration-300
              hover:text-yellow-400
            "
          >
            USECASE
          </a>

          <a
            href="#"
            className="
              text-gray-300
              transition
              duration-300
              hover:text-yellow-400
            "
          >
            TOKENOMICS
          </a>

          <a
            href="#"
            className="
              text-gray-300
              transition
              duration-300
              hover:text-yellow-400
            "
          >
            ROADMAP
          </a>

          <a
            href="#"
            className="
              text-gray-300
              transition
              duration-300
              hover:text-yellow-400
            "
          >
            PRESALE
          </a>
        </nav>

        {/* ================= RIGHT ================= */}
        <div className="flex items-center gap-4">

          {/* BUY BUTTON */}
          <button
            className="
              hidden
              sm:flex
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-yellow-500
              to-yellow-200
              px-8
              py-3
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              shadow-[0_0_35px_rgba(250,204,21,0.25)]
            "
          >
            BUY NOW
          </button>

          {/* MOBILE MENU */}
          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-yellow-500/20
              bg-black/40
              text-2xl
              text-yellow-400
              lg:hidden
            "
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}