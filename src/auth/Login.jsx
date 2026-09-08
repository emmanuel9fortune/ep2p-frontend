import { useState } from "react";
import {
  Mail,
  KeyRound,
  Eye,
  EyeOff,
  LogIn,
  Check,
  Grid2X2,
} from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050a18] text-white w-full">

      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div className="pointer-events-none absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-32 top-[25%] h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-200px] left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[160px]" />


      {/* =========================================================
          DECORATIVE BACKGROUND WAVES
      ========================================================= */}

      <div className="pointer-events-none absolute right-[-120px] top-[180px] opacity-30 w-full">

        <svg
          width="420"
          height="400"
          viewBox="0 0 420 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-30 100C100 20 220 40 450 210"
            stroke="url(#wave1)"
            strokeWidth="1"
          />

          <path
            d="M-20 140C120 40 250 80 450 240"
            stroke="url(#wave2)"
            strokeWidth="1"
          />

          <path
            d="M0 180C140 80 270 120 450 280"
            stroke="url(#wave3)"
            strokeWidth="1"
          />

          <defs>
            <linearGradient
              id="wave1"
              x1="0"
              y1="0"
              x2="420"
              y2="300"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563eb" stopOpacity="0" />
              <stop offset=".5" stopColor="#6366f1" />
              <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="wave2"
              x1="0"
              y1="0"
              x2="420"
              y2="300"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563eb" stopOpacity="0" />
              <stop offset=".5" stopColor="#4f46e5" />
              <stop offset="1" stopColor="#9333ea" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="wave3"
              x1="0"
              y1="0"
              x2="420"
              y2="300"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563eb" stopOpacity="0" />
              <stop offset=".5" stopColor="#6366f1" />
              <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

      </div>


      {/* =========================================================
          LOGIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 w-full">

        <div
          className="
            relative
            w-full
            max-w-[430px]
            overflow-hidden
            rounded-[32px]
            border
            border-indigo-500/40
            bg-[#070d20]/90
            shadow-[0_0_80px_rgba(37,99,235,0.20)]
            backdrop-blur-2xl
            sm:rounded-[38px]
          "
        >

          {/* Inner glow */}
          <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />


          <div className="relative px-6 py-7 sm:px-9 sm:py-9">


            {/* =====================================================
                HEADER
            ===================================================== */}

            <header className="flex items-center justify-between">

              {/* LOGO SPACE */}

              <div className="flex items-center gap-2.5">

                {/* Replace this div with your actual logo */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-500
                    to-violet-600
                    shadow-[0_0_20px_rgba(99,102,241,0.35)]
                  "
                >
                  <div className="h-4 w-4 rotate-45 rounded-[3px] bg-white/90" />
                </div>

                <div>
                  <p className="text-[12px] font-semibold tracking-tight">
                    Your Logo
                  </p>

                  <p className="text-[7px] uppercase tracking-[0.2em] text-white/30">
                    Trading
                  </p>
                </div>

              </div>


              {/* HEADER ICON */}

              <button
                type="button"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-white/[0.04]
                  text-white/60
                  transition
                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                <Grid2X2 size={14} strokeWidth={1.6} />
              </button>

            </header>


            {/* =====================================================
                LOGIN INTRO
            ===================================================== */}

            <div className="mt-12 sm:mt-14">

              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.45em]
                  text-indigo-300/80
                "
              >
                Welcome back
              </p>

              <h1
                className="
                  mt-2
                  text-[42px]
                  font-semibold
                  leading-none
                  tracking-[-1.8px]
                  text-white
                  sm:text-[48px]
                "
              >
                Login
              </h1>

              <p
                className="
                  mt-4
                  w-full
                  text-[13px]
                  leading-5
                  text-white/40
                  text-center
                "
              >
                Access your account and continue
                to your trading journey.
              </p>

            </div>


            {/* =====================================================
                FORM
            ===================================================== */}

            <form className="mt-9">


              {/* =================================================
                  EMAIL
              ================================================= */}

              <div
                className="
                  group
                  relative
                  rounded-[20px]
                  border
                  border-indigo-400/30
                  bg-[#0b1429]/80
                  p-3.5
                  transition
                  duration-200
                  focus-within:border-indigo-400/70
                  focus-within:bg-[#0e1831]
                  focus-within:shadow-[0_0_30px_rgba(79,70,229,0.10)]
                "
              >

                <div className="flex items-center gap-3">

                  {/* Mail icon */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-400/10
                      bg-blue-500/[0.08]
                      text-indigo-200
                    "
                  >
                    <Mail size={20} strokeWidth={1.6} />
                  </div>


                  <div className="min-w-0 flex-1">

                    <label
                      htmlFor="email"
                      className="block text-[11px] font-medium text-indigo-200/90 w-full text-left"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      autoComplete="email"
                      className="
                        mt-1
                        block
                        w-full
                        border-none
                        bg-transparent
                        p-0
                        text-[13px]
                        text-white
                        outline-none
                        placeholder:text-white/25
                      "
                    />

                  </div>

                </div>

              </div>


              {/* =================================================
                  PASSWORD
              ================================================= */}

              <div
                className="
                  group
                  relative
                  mt-4
                  rounded-[20px]
                  border
                  border-indigo-400/30
                  bg-[#0b1429]/80
                  p-3.5
                  transition
                  duration-200
                  focus-within:border-indigo-400/70
                  focus-within:bg-[#0e1831]
                  focus-within:shadow-[0_0_30px_rgba(79,70,229,0.10)]
                "
              >

                <div className="flex items-start gap-3">

                  {/* Key icon */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-400/10
                      bg-blue-500/[0.08]
                      text-indigo-200
                    "
                  >
                    <KeyRound size={20} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0 flex-1">

                    <label
                      htmlFor="password"
                      className="block text-[11px] font-medium text-indigo-200/90 w-full text-left"
                    >
                      Password
                    </label>

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="
                        mt-1
                        block
                        w-full
                        border-none
                        bg-transparent
                        p-0
                        pr-8
                        text-[13px]
                        text-white
                        outline-none
                        placeholder:text-white/25
                      "
                    />

                  </div>

                  {/* Show password */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-white/30
                      transition
                      hover:text-white/70
                    "
                  >
                    {showPassword ? (
                      <EyeOff size={17} strokeWidth={1.5} />
                    ) : (
                      <Eye size={17} strokeWidth={1.5} />
                    )}
                  </button>

                </div>

              </div>


              {/* =================================================
                  REMEMBER / FORGOT
              ================================================= */}

              <div className="mt-5 flex items-center justify-between">

                <button
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className="flex items-center gap-2.5"
                >

                  <span
                    className={`
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-md
                      border
                      transition
                      ${
                        rememberMe
                          ? "border-violet-500 bg-gradient-to-br from-violet-500 to-purple-600"
                          : "border-white/20 bg-white/[0.03]"
                      }
                    `}
                  >
                    {rememberMe && (
                      <Check size={12} strokeWidth={3} />
                    )}
                  </span>

                  <span className="text-[11px] text-white/55">
                    Remember me
                  </span>

                </button>


                <button
                  type="button"
                  className="
                    text-[11px]
                    text-violet-400
                    transition
                    hover:text-violet-300
                  "
                >
                  Forgot password?
                </button>

              </div>


              {/* =================================================
                  LOGIN BUTTON
              ================================================= */}

              <button
                type="submit"
                className="
                  group
                  relative
                  mt-7
                  flex
                  h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  overflow-hidden
                  rounded-[17px]
                  bg-gradient-to-r
                  from-[#5535ff]
                  via-[#7438ff]
                  to-[#a333ff]
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

                {/* Shine animation */}

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/15
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <LogIn
                  size={18}
                  strokeWidth={1.8}
                  className="relative"
                />

                <span className="relative">
                  Login
                </span>

              </button>


              {/* =================================================
                  OR DIVIDER
              ================================================= */}

              <div className="my-7 flex items-center gap-4">

                <div className="h-px flex-1 bg-white/[0.08]" />

                <span className="text-[11px] text-white/35">
                  OR
                </span>

                <div className="h-px flex-1 bg-white/[0.08]" />

              </div>


              {/* =================================================
                  GOOGLE
              ================================================= */}

              <button
                type="button"
                className="
                  flex
                  h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[17px]
                  border
                  border-indigo-400/20
                  bg-white/[0.025]
                  text-[12px]
                  font-medium
                  text-white
                  transition
                  hover:border-indigo-400/40
                  hover:bg-white/[0.05]
                "
              >

                {/* Google icon */}

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">

                  <span className="text-[15px] font-bold text-[#4285F4]">
                    G
                  </span>

                </div>

                Continue with Google

              </button>


              {/* =================================================
                  SIGN UP
              ================================================= */}

              <div className="mt-8 pb-2 text-center">

                <span className="text-[11px] text-white/35">
                  Don't have an account?
                </span>

                <button
                  type="button"
                  className="
                    ml-2
                    text-[12px]
                    font-medium
                    text-violet-400
                    transition
                    hover:text-violet-300
                  "
                  onClick={() => window.location.href = "/signup"}
                >
                  Sign Up
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}