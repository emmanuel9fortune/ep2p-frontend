import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Wallet,
  BarChart3,
  LockKeyhole,
  Check,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b16] text-white">

      {/* ===================================================== */}
      {/* ANIMATED SPACE BACKGROUND                             */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Stars */}
        {Array.from({ length: 55 }).map((_, i) => (
          <span
            key={i}
            className="
              absolute
              h-[2px]
              w-[2px]
              rounded-full
              bg-white/50
              animate-twinkle
            "
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.15 + Math.random() * 0.5,
            }}
          />
        ))}

        {/* Glowing stars */}
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={`glow-${i}`}
            className="
              absolute
              h-[3px]
              w-[3px]
              rounded-full
              bg-indigo-200
              shadow-[0_0_10px_rgba(165,180,252,0.8)]
              animate-twinkle
            "
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}

      </div>


      {/* ===================================================== */}
      {/* BACKGROUND GLOWS                                     */}
      {/* ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-600/[0.10]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[20%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-purple-600/[0.08]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          left-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/[0.06]
          blur-[150px]
        "
      />


      {/* ===================================================== */}
      {/* NAVIGATION                                            */}
      {/* ===================================================== */}

      <nav className="relative z-20 mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-blue-400/10
              bg-blue-500/[0.08]
              text-indigo-200
              shadow-[0_0_35px_rgba(99,102,241,0.10)]
            "
          >
            <span className="text-sm font-semibold">
              L
            </span>
          </div>

          <span className="text-sm font-semibold tracking-tight">
            Logo
          </span>

        </Link>


        {/* Desktop navigation */}

        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#features"
            className="
              text-[12px]
              text-white/40
              transition
              hover:text-white
            "
          >
            Features
          </a>

          <a
            href="#security"
            className="
              text-[12px]
              text-white/40
              transition
              hover:text-white
            "
          >
            Security
          </a>

          <a
            href="#about"
            className="
              text-[12px]
              text-white/40
              transition
              hover:text-white
            "
          >
            About
          </a>

        </div>


        {/* Navigation buttons */}

        <div className="flex items-center gap-2">

          <Link
            to="/login"
            className="
              hidden
              rounded-xl
              px-4
              py-2.5
              text-[12px]
              font-medium
              text-white/60
              transition
              hover:bg-white/[0.04]
              hover:text-white
              sm:block
            "
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="
              rounded-xl
              bg-white/[0.07]
              px-4
              py-2.5
              text-[12px]
              font-medium
              text-white
              ring-1
              ring-white/[0.08]
              transition
              hover:bg-white/[0.10]
            "
          >
            Get started
          </Link>

        </div>

      </nav>


      {/* ===================================================== */}
      {/* HERO                                                   */}
      {/* ===================================================== */}

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20 lg:px-10 lg:pb-32 lg:pt-24">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Hero text */}

          <div className="max-w-xl">

            {/* Eyebrow */}

            <div className="mb-6 flex items-center gap-2">

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-indigo-400
                  shadow-[0_0_10px_rgba(129,140,248,0.9)]
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-indigo-300/60
                "
              >
                The smarter way forward
              </span>

            </div>


            {/* Heading */}

            <h1
              className="
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Your money.
              <br />

              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                Your control.
              </span>
            </h1>


            {/* Description */}

            <p
              className="
                mt-6
                max-w-lg
                text-sm
                leading-7
                text-white/40
                sm:text-[15px]
              "
            >
              A simple, secure and intelligent financial
              platform built to help you manage your
              money, move funds and stay in control.
            </p>


            {/* CTA */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/signup"
                className="
                  group
                  flex
                  h-12
                  items-center
                  justify-center
                  gap-2.5
                  rounded-[15px]
                  bg-gradient-to-r
                  from-[#5535ff]
                  via-[#7438ff]
                  to-[#a333ff]
                  px-6
                  text-[13px]
                  font-medium
                  shadow-[0_12px_35px_rgba(112,61,255,0.30)]
                  transition
                  duration-200
                  hover:scale-[1.01]
                  hover:shadow-[0_15px_45px_rgba(112,61,255,0.42)]
                  active:scale-[0.98]
                "
              >
                Create your account

                <ArrowRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform group-hover:translate-x-0.5"
                />

              </Link>


              <Link
                to="/login"
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-[15px]
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  px-6
                  text-[13px]
                  font-medium
                  text-white/60
                  transition
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                Login
              </Link>

            </div>


            {/* Trust */}

            <div className="mt-7 flex items-center gap-5">

              <div className="flex items-center gap-2">

                <ShieldCheck
                  size={15}
                  strokeWidth={1.5}
                  className="text-indigo-300/60"
                />

                <span className="text-[10px] text-white/25">
                  Secure platform
                </span>

              </div>

              <div className="h-3 w-px bg-white/[0.08]" />

              <div className="flex items-center gap-2">

                <LockKeyhole
                  size={14}
                  strokeWidth={1.5}
                  className="text-indigo-300/60"
                />

                <span className="text-[10px] text-white/25">
                  Protected access
                </span>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* WALLET PREVIEW                                     */}
          {/* ================================================= */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Outer glow */}

            <div
              className="
                pointer-events-none
                absolute
                h-[400px]
                w-[400px]
                rounded-full
                bg-indigo-600/[0.10]
                blur-[100px]
              "
            />


            {/* Card */}

            <div
              className="
                relative
                w-full
                max-w-[400px]
                rounded-[28px]
                border
                border-white/[0.09]
                bg-[#0b1020]/90
                p-6
                shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
              "
            >

              {/* Card top */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[10px] text-white/25">
                    Total balance
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                    $24,680.50
                  </h2>

                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-indigo-400/10
                    bg-indigo-500/[0.08]
                    text-indigo-200
                  "
                >
                  <Wallet
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>

              </div>


              {/* Growth */}

              <div className="mt-5 flex items-center gap-2">

                <span
                  className="
                    rounded-full
                    bg-emerald-400/[0.08]
                    px-2
                    py-1
                    text-[9px]
                    font-medium
                    text-emerald-300/80
                  "
                >
                  +12.84%
                </span>

                <span className="text-[9px] text-white/20">
                  this month
                </span>

              </div>


              {/* Chart */}

              <div className="mt-8 h-28">

                <svg
                  viewBox="0 0 400 110"
                  className="h-full w-full"
                  fill="none"
                  preserveAspectRatio="none"
                >

                  <defs>

                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >

                      <stop
                        offset="0%"
                        stopColor="#818cf8"
                        stopOpacity="0.25"
                      />

                      <stop
                        offset="100%"
                        stopColor="#818cf8"
                        stopOpacity="0"
                      />

                    </linearGradient>

                  </defs>

                  <path
                    d="M0 90 C35 84 45 73 70 78 C95 83 108 57 132 62 C156 67 163 45 190 50 C217 55 220 39 244 43 C268 47 280 29 304 35 C328 41 345 22 365 28 C382 32 390 18 400 15 V110 H0 Z"
                    fill="url(#chartGradient)"
                  />

                  <path
                    d="M0 90 C35 84 45 73 70 78 C95 83 108 57 132 62 C156 67 163 45 190 50 C217 55 220 39 244 43 C268 47 280 29 304 35 C328 41 345 22 365 28 C382 32 390 18 400 15"
                    stroke="#818cf8"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />

                </svg>

              </div>


              {/* Divider */}

              <div className="my-5 h-px bg-white/[0.06]" />


              {/* Wallet stats */}

              <div className="grid grid-cols-2 gap-3">

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    p-4
                  "
                >

                  <div className="flex items-center gap-2">

                    <BarChart3
                      size={14}
                      className="text-indigo-300/60"
                    />

                    <span className="text-[9px] text-white/25">
                      Portfolio
                    </span>

                  </div>

                  <p className="mt-2 text-sm font-medium">
                    +8.42%
                  </p>

                </div>


                <div
                  className="
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    p-4
                  "
                >

                  <div className="flex items-center gap-2">

                    <Zap
                      size={14}
                      className="text-indigo-300/60"
                    />

                    <span className="text-[9px] text-white/25">
                      Activity
                    </span>

                  </div>

                  <p className="mt-2 text-sm font-medium">
                    Active
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FEATURES                                              */}
      {/* ===================================================== */}

      <section
        id="features"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10"
      >

        <div className="mb-12 max-w-xl">

          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-indigo-300/50
            "
          >
            Everything in one place
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Built around your financial life.
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/35">
            Everything you need to manage your account
            without unnecessary complexity.
          </p>

        </div>


        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: Wallet,
              title: "Smart wallet",
              text: "Keep your funds organized and accessible from one secure place.",
            },
            {
              icon: Zap,
              title: "Fast transfers",
              text: "Move money quickly with a simple and streamlined experience.",
            },
            {
              icon: BarChart3,
              title: "Track activity",
              text: "Understand your transactions and monitor your financial activity.",
            },
            {
              icon: ShieldCheck,
              title: "Built for security",
              text: "Multiple layers of protection help keep your account secure.",
            },
          ].map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-[22px]
                  border
                  border-white/[0.07]
                  bg-white/[0.02]
                  p-6
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-indigo-400/20
                  hover:bg-white/[0.035]
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-indigo-400/10
                    bg-indigo-500/[0.07]
                    text-indigo-200/80
                  "
                >
                  <Icon
                    size={19}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-5 text-sm font-medium">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-white/30">
                  {feature.text}
                </p>

              </div>
            );
          })}

        </div>

      </section>


      {/* ===================================================== */}
      {/* SECURITY                                              */}
      {/* ===================================================== */}

      <section
        id="security"
        className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10"
      >

        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/[0.07]
            bg-white/[0.02]
            p-8
            sm:p-12
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-72
              w-72
              rounded-full
              bg-indigo-600/[0.10]
              blur-[100px]
            "
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">

            <div>

              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-indigo-300/50
                "
              >
                Security first
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Your account.
                <br />
                Protected by design.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/35">
                Security isn't something added at the end.
                It's built into every part of the experience.
              </p>

              <div className="mt-7 space-y-3">

                {[
                  "Secure authentication",
                  "Protected account sessions",
                  "Verification for sensitive actions",
                  "Transaction monitoring",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div
                      className="
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        bg-indigo-500/[0.10]
                        text-indigo-300
                      "
                    >
                      <Check
                        size={11}
                        strokeWidth={2}
                      />
                    </div>

                    <span className="text-[11px] text-white/40">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            <div className="flex justify-center lg:justify-end">

              <div
                className="
                  flex
                  h-48
                  w-48
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-indigo-400/10
                  bg-indigo-500/[0.03]
                  shadow-[0_0_80px_rgba(99,102,241,0.10)]
                "
              >

                <div
                  className="
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-indigo-400/15
                    bg-indigo-500/[0.06]
                  "
                >

                  <ShieldCheck
                    size={48}
                    strokeWidth={1.2}
                    className="text-indigo-200"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FINAL CTA                                             */}
      {/* ===================================================== */}

      <section
        id="about"
        className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center sm:px-8"
      >

        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-indigo-300/50
          "
        >
          Start today
        </p>

        <h2
          className="
            mt-4
            text-3xl
            font-semibold
            tracking-tight
            sm:text-4xl
          "
        >
          Take control of your money.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/30">
          Create your account and experience a simpler
          way to manage your finances.
        </p>

        <Link
          to="/signup"
          className="
            group
            mx-auto
            mt-8
            flex
            h-12
            w-fit
            items-center
            gap-2.5
            rounded-[15px]
            bg-gradient-to-r
            from-[#5535ff]
            via-[#7438ff]
            to-[#a333ff]
            px-7
            text-[13px]
            font-medium
            shadow-[0_12px_35px_rgba(112,61,255,0.30)]
            transition
            duration-200
            hover:scale-[1.01]
            hover:shadow-[0_15px_45px_rgba(112,61,255,0.42)]
            active:scale-[0.98]
          "
        >
          Get started

          <ArrowUpRight
            size={16}
            strokeWidth={1.7}
            className="transition-transform group-hover:translate-x-0.5"
          />

        </Link>

      </section>


      {/* ===================================================== */}
      {/* FOOTER                                                */}
      {/* ===================================================== */}

      <footer
        className="
          relative
          z-10
          border-t
          border-white/[0.05]
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-5
            px-5
            py-8
            sm:px-8
            md:flex-row
            md:items-center
            md:justify-between
            lg:px-10
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-blue-400/10
                bg-blue-500/[0.06]
                text-xs
                text-indigo-200
              "
            >
              L
            </div>

            <span className="text-[10px] text-white/25">
              © 2026 Logo. All rights reserved.
            </span>

          </div>


          <div className="flex gap-6">

            <a
              href="#"
              className="text-[10px] text-white/25 hover:text-white/60"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-white/25 hover:text-white/60"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-[10px] text-white/25 hover:text-white/60"
            >
              Contact
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}
