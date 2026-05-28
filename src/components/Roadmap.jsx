import React from "react";

export default function Roadmap() {
  return (
    <section className="container-custom pb-24">

      <h2 className="mb-14 text-center text-5xl">
        ROADMAP
      </h2>

      <div className="space-y-8">

        {[
          "Launch Website",
          "Presale Starts",
          "DEX Listing",
          "Global Expansion",
        ].map((item, index) => (
          <div
            key={index}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl text-yellow-400">
              Phase {index + 1}
            </h3>

            <p className="mt-3 text-gray-400">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}