// BuyNow.jsx

import React from "react";

export default function BuyNow() {
  return (
    <section className="container-custom py-24">

      <div
        className="
          glass
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-yellow-500/10
          p-8
          lg:p-14
        "
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-yellow-500/10 blur-[100px]"></div>

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 blur-[100px]"></div>

        <div className="relative z-10 grid gap-12 lg:grid-cols-2">

          {/* ================= LEFT ================= */}
          <div>

            <p className="mb-4 text-sm uppercase tracking-[5px] text-yellow-500">
              BUY GENVAULT TOKEN
            </p>

            <h2 className="text-4xl md:text-5xl leading-tight">
              Secure Your Spot In The
              <span className="gold-text block">
                Future Of Digital Legacy
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-gray-400">
              Join the GENVAULT presale and become part of the next
              generation decentralized infrastructure built for secure
              digital inheritance and blockchain asset protection.
            </p>

            {/* Progress */}
            <div className="mt-10">

              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-gray-400">
                  Presale Progress
                </span>

                <span className="text-yellow-400">
                  72%
                </span>
              </div>

              <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-yellow-500 to-yellow-200"></div>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <span>Raised: $1.8M</span>
                <span>Goal: $2.5M</span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">

              <div className="glass rounded-2xl p-5 text-center">
                <h3 className="text-2xl font-bold text-yellow-400">
                  18K+
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Holders
                </p>
              </div>

              <div className="glass rounded-2xl p-5 text-center">
                <h3 className="text-2xl font-bold text-yellow-400">
                  250M
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Supply
                </p>
              </div>

              <div className="glass rounded-2xl p-5 text-center">
                <h3 className="text-2xl font-bold text-yellow-400">
                  4.9★
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Community
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className="
              glass
              rounded-3xl
              border
              border-yellow-500/10
              p-8
            "
          >
            <h3 className="text-3xl text-center">
              Buy With Crypto
            </h3>

            <p className="mt-3 text-center text-gray-400">
              Choose your preferred payment method
            </p>

            {/* Inputs */}
            <div className="mt-10 space-y-5">

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  You Pay
                </label>

                <div className="flex items-center justify-between rounded-2xl border border-yellow-500/10 bg-black/30 px-5 py-4">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="w-full bg-transparent outline-none"
                  />

                  <span className="text-yellow-400">
                    USDT
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  You Receive
                </label>

                <div className="flex items-center justify-between rounded-2xl border border-yellow-500/10 bg-black/30 px-5 py-4">
                  <input
                    type="text"
                    placeholder="0.00"
                    className="w-full bg-transparent outline-none"
                  />

                  <span className="text-yellow-400">
                    GENV
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-8 grid grid-cols-3 gap-4">

              <button className="glass rounded-2xl py-4 hover:border-yellow-500 transition">
                ETH
              </button>

              <button className="glass rounded-2xl py-4 hover:border-yellow-500 transition">
                BNB
              </button>

              <button className="glass rounded-2xl py-4 hover:border-yellow-500 transition">
                USDT
              </button>
            </div>

            {/* Button */}
            <button
              className="
                gold-btn
                mt-10
                flex
                w-full
                items-center
                justify-center
                rounded-2xl
                py-4
                text-lg
                font-semibold
              "
            >
              CONNECT WALLET
            </button>

            <p className="mt-5 text-center text-sm text-gray-500">
              Powered by secure decentralized smart contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}