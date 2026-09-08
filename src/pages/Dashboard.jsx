import React from "react";

const TokenIcon = ({ type }) => {
  if (type === "usdt") {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12251f] text-sm font-bold text-[#26a17b]">
        ₮
      </div>
    );
  }

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#172337] text-sm font-bold text-[#4b9cff]">
      $
    </div>
  );
};

const TokenSelector = ({ type, name, subtitle }) => (
  <button className="flex items-center gap-2.5">
    <TokenIcon type={type} />

    <div className="text-left">
      <p className="text-[13px] font-medium text-white">{name}</p>
      <p className="text-[10px] text-white/35">{subtitle}</p>
    </div>

    <svg
      className="ml-1 h-3 w-3 text-white/35"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
);

export default function Dashboard() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060b18] px-4 py-8 text-white sm:px-6">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      {/* UI */}
      <div className="relative mx-auto w-full max-w-[360px]">

        {/* HEADER */}
        <header className="flex items-center justify-between">

          <button
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              border border-white/[0.06]
              bg-white/[0.035]
            "
          >
            <div className="space-y-[4px]">
              <span className="block h-[1px] w-4 bg-white/70" />
              <span className="block h-[1px] w-3 bg-white/70" />
              <span className="block h-[1px] w-4 bg-white/70" />
            </div>
          </button>

          <div className="text-center">
            <p className="text-[10px] font-medium tracking-wide text-white/40">
              WALLET
            </p>
            <p className="mt-0.5 text-[12px] font-medium text-white">
              EverTether
            </p>
          </div>

          <button
            className="
              relative flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-white/[0.06]
              bg-white/[0.035]
            "
          >
            <svg
              className="h-[17px] w-[17px] text-white/70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
              <path d="M10 21h4" />
            </svg>

            <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-violet-400" />
          </button>

        </header>

        {/* BALANCE */}
        <div className="mt-10 text-center">

          <p className="text-[11px] text-white/35">
            Current Wallet Balance
          </p>

          <h1 className="mt-1 text-[34px] font-semibold tracking-[-1.5px]">
            $3,293.46
          </h1>

          <div className="mt-1.5 flex items-center justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

            <span className="text-[9px] text-white/30">
              Wallet Balance USD
            </span>
          </div>

        </div>

        {/* ACTION TABS */}
        <div className="mt-8 flex rounded-2xl border border-white/[0.05] bg-white/[0.025] p-1">
          <button className="flex-1 rounded-xl bg-white/[0.07] py-2 text-[10px] font-medium text-white">
            Convert
          </button>

          <button className="flex-1 rounded-xl py-2 text-[10px] text-white/30">
            Send
          </button>

          <button className="flex-1 rounded-xl py-2 text-[10px] text-white/30">
            Receive
          </button>
        </div>

        {/* CONVERSION */}
        <div className="mt-5">

          {/* FROM */}
          <div
            className="
              rounded-2xl
              border border-white/[0.055]
              bg-[#0d1422]
              p-4
            "
          >

            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/35">
                From
              </span>

              <span className="text-[9px] text-white/25">
                Balance 4,293.48
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">

              <TokenSelector
                type="usdt"
                name="USDT"
                subtitle="Tether"
              />

              <div className="text-right">
                <input
                  defaultValue="1,250.00"
                  className="
                    w-[115px]
                    bg-transparent
                    text-right
                    text-[18px]
                    font-medium
                    text-white
                    outline-none
                  "
                />

                <p className="mt-0.5 text-[9px] text-white/25">
                  ≈ $1,250.00
                </p>
              </div>

            </div>

          </div>

          {/* SWAP */}
          <div className="relative z-10 -my-4 flex justify-center">

            <button
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-white/[0.08]
                bg-[#151d2c]
                shadow-xl
              "
            >
              <svg
                className="h-4 w-4 text-violet-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M7 7h11l-3-3" />
                <path d="M17 17H6l3 3" />
              </svg>
            </button>

          </div>

          {/* TO */}
          <div
            className="
              rounded-2xl
              border border-white/[0.055]
              bg-[#0d1422]
              p-4
            "
          >

            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/35">
                To
              </span>

              <span className="text-[9px] text-white/25">
                Balance 4,293.48
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">

              <TokenSelector
                type="usdc"
                name="USDC"
                subtitle="USD Coin"
              />

              <div className="text-right">
                <p className="text-[18px] font-medium">
                  1,249.98
                </p>

                <p className="mt-0.5 text-[9px] text-white/25">
                  ≈ $1,249.98
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RATE */}
        <div className="mt-5 rounded-xl bg-white/[0.025] px-3.5 py-3">

          <div className="flex justify-between">
            <span className="text-[9px] text-white/30">
              Exchange rate
            </span>

            <span className="text-[9px] text-white/55">
              1 USDT = 0.99998 USDC
            </span>
          </div>

          <div className="mt-2 flex justify-between">
            <span className="text-[9px] text-white/30">
              Network fee
            </span>

            <span className="text-[9px] text-white/55">
              $0.02
            </span>
          </div>

        </div>

        {/* CONVERT BUTTON */}
        <button
          className="
            group
            relative
            mt-5
            h-14
            w-full
            overflow-hidden
            rounded-2xl
            bg-gradient-to-r
            from-[#6338ff]
            via-[#7b3cff]
            to-[#5b35ef]
            text-[12px]
            font-semibold
            shadow-[0_15px_45px_rgba(100,60,255,0.25)]
            transition
            duration-200
            hover:scale-[1.01]
            hover:shadow-[0_18px_55px_rgba(100,60,255,0.35)]
            active:scale-[0.98]
          "
        >

          <span className="relative z-10">
            Convert 1,250 USDT
          </span>

          <span
            className="
              absolute inset-0
              translate-x-[-100%]
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
              transition-transform
              duration-700
              group-hover:translate-x-[100%]
            "
          />

        </button>

        {/* SECURITY */}
        <div className="mt-5 flex items-center justify-center gap-2">

          <svg
            className="h-3 w-3 text-emerald-400/60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>

          <span className="text-[9px] text-white/25">
            Secure transaction • Estimated 10 seconds
          </span>

        </div>

      </div>
    </section>
  );
}