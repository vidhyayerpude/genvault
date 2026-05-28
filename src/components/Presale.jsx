import React from "react";

export default function Presale() {
  return (
    <section className="container-custom pb-24">

      <div className="glass rounded-3xl p-10">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[5px] text-yellow-500">
            PRESALE STARTING SOON
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            {["18", "10", "22", "45"].map((item, index) => (
              <div
                key={index}
                className="glass flex h-28 w-28 flex-col items-center justify-center rounded-2xl"
              >
                <h2 className="text-4xl font-bold text-yellow-400">
                  {item}
                </h2>

                <p className="mt-2 text-xs text-gray-500">
                  {index === 0
                    ? "DAYS"
                    : index === 1
                    ? "HOURS"
                    : index === 2
                    ? "MINUTES"
                    : "SECONDS"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}