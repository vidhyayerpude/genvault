import React from "react";

export default function Tokenomics() {
  return (
    <section className="container-custom pb-24">

      <div className="glass rounded-3xl p-10">

        <h2 className="mb-10 text-center text-5xl">
          TOKENOMICS
        </h2>

        <div className="grid gap-6 md:grid-cols-4">

          {[
            "Liquidity",
            "Marketing",
            "Rewards",
            "Development",
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-yellow-500/10 bg-black/30 p-8 text-center"
            >
              <h3 className="text-2xl text-yellow-400">
                25%
              </h3>

              <p className="mt-3 text-gray-400">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}