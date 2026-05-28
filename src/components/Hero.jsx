import React from "react";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="container-custom grid items-center gap-10 py-24 lg:grid-cols-2">

      {/* LEFT */}
      <div>

        <p className="mb-4 text-lg text-yellow-500">
          Your Legacy || On-Chain || Forever
        </p>

        <h1 className="text-5xl md:text-6xl xl:text-7xl leading-tight">
          Protect What You Built —
          <span className="gold-text block">
            Across Generations.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
          GENVAULT is the world's first blockchain-powered digital vault.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="gold-btn rounded-xl px-8 py-4">
            PRESALE SOON
          </button>

          <button className="rounded-xl border border-yellow-500 px-8 py-4 hover:bg-yellow-500 hover:text-black transition">
            WHITEPAPER
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <HeroImage />

    </section>
  );
}