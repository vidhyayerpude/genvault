import React from "react";

export default function Features() {
  return (
    <section className="container-custom pb-24">

      <div className="grid gap-8 md:grid-cols-3">

        {[
          "SMART TOOLS",
          "REAL ASSETS",
          "SUSTAINABLE REWARDS",
        ].map((item, index) => (
          <div
            key={index}
            className="feature-card glass rounded-3xl p-8"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-2xl text-yellow-400">
              ⚡
            </div>

            <h3 className="text-2xl font-semibold">
              {item}
            </h3>

            <p className="mt-4 text-gray-400">
              Next-generation blockchain technology with decentralized
              infrastructure and premium security.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}