import { useState } from "react";
import {
  Mail,
  Phone,
  UserRound,
  CalendarDays,
  ArrowRight,
  ArrowLeft,
  Check,
  KeyRound,
  EyeOff,
  Eye,
  LockKeyhole,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    dob: "",
    username: "",
    password: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Send formData to your backend here
  };

  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#070b16]
        text-white
      "
    >
      {/* Animated space background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Stars */}
        {Array.from({ length: 45 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/50 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.2 + Math.random() * 0.5,
            }}
          />
        ))}

        {/* Larger glowing stars */}
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={`glow-${i}`}
            className="
              absolute
              h-[3px]
              w-[3px]
              rounded-full
              bg-indigo-200
              shadow-[0_0_8px_rgba(165,180,252,0.8)]
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

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-indigo-600/[0.08]
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-96
          w-96
          rounded-full
          bg-blue-500/[0.06]
          blur-[120px]
        "
      />

      {/* Subtle center glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/[0.025]
          blur-[100px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-md
          items-center
          justify-center
          px-5
          py-10
        "
      >

        <div className="w-full">

          {/* Logo */}
          <div className="mb-8 flex justify-center">

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-blue-400/10
                bg-blue-500/[0.08]
                text-indigo-200
                shadow-[0_0_35px_rgba(99,102,241,0.08)]
              "
            >
              {/* Replace with your actual logo */}
              <span className="text-lg font-semibold">
                L
              </span>
            </div>

          </div>

          {/* Header */}
          <div className="mb-8 text-center">

            <p
              className="
                mb-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-indigo-300/45
              "
            >
              Create account
            </p>

            <h1
              className="
                text-2xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              Let's get started
            </h1>

            <p
              className="
                mx-auto
                mt-2
                w-full
                text-[12px]
                leading-5
                text-white/35
                text-center
              "
            >
              Create your account in just a few simple steps.
            </p>

          </div>

          {/* Progress */}
          <div className="mb-7">

            <div className="mb-2 flex items-center justify-between">

              <span className="text-[10px] text-white/30">
                Step {step} of 4
              </span>

              <span className="text-[10px] text-indigo-300/50">
                {step === 1 && "Your email"}
                {step === 2 && "Your phone"}
                {step === 3 && "About you"}
                {step === 4 && "Username"}
              </span>

            </div>

            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06]">

              <div
                className="
                  h-full
                  rounded-full
                  bg-indigo-400
                  transition-all
                  duration-500
                  ease-out
                "
                style={{
                  width: `${step * 25}%`,
                }}
              />

            </div>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>

            {/* ================= STEP 1 ================= */}

            {step === 1 && (
              <div className="transition-all duration-300">

                <div className="mb-3">

                  <label
                    htmlFor="email"
                    className="
                      block
                      text-[11px]
                      font-medium
                      text-indigo-200/90
                      text-left
                    "
                  >
                    Email address
                  </label>

                </div>

                <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 transition-all duration-200 focus-within:border-indigo-400/30 focus-within:bg-indigo-500/[0.04] py-2">

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
                    <Mail
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      updateField("email", e.target.value)
                    }
                    placeholder="Enter your email"
                    autoComplete="email"
                    autoFocus
                    className="
                      h-11
                      min-w-0
                      flex-1
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
            )}

            {/* ================= STEP 2 ================= */}

            {step === 2 && (
              <div className="transition-all duration-300">

                <div className="mb-3">

                  <label
                    htmlFor="phone"
                    className="
                      block
                      text-[11px]
                      font-medium
                      text-indigo-200/90
                      text-left
                    "
                  >
                    Phone number
                  </label>

                </div>

                <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 transition-all duration-200 focus-within:border-indigo-400/30 focus-within:bg-indigo-500/[0.04] py-2">

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
                    <Phone
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>

                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      updateField("phone", e.target.value)
                    }
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    autoFocus
                    className="
                      h-11
                      min-w-0
                      flex-1
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
            )}

            {/* ================= STEP 3 ================= */}

            {step === 3 && (
              <div className="transition-all duration-300">

                <div className="mb-5">

                  <label
                    className="
                      block
                      text-[11px]
                      font-medium
                      text-indigo-200/90
                    "
                  >
                    Personal details
                  </label>

                  <p className="mt-1 text-[10px] text-white/25">
                    Tell us a little about yourself.
                  </p>

                </div>

                {/* First name */}

                <div className="mb-5">

                  <label
                    htmlFor="firstName"
                    className="
                      mb-2
                      block
                      text-[11px]
                      font-medium
                      text-indigo-200/80
                      text-left
                    "
                  >
                    First name
                  </label>

                  <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 transition-all duration-200 focus-within:border-indigo-400/30 focus-within:bg-indigo-500/[0.04] py-2">

                    <UserRound
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-indigo-200/60"
                    />

                    <input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        updateField(
                          "firstName",
                          e.target.value
                        )
                      }
                      placeholder="Enter your first name"
                      autoFocus
                      className="
                        h-9
                        min-w-0
                        flex-1
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

                {/* Last name */}

                <div className="mb-5">

                  <label
                    htmlFor="lastName"
                    className="
                      mb-2
                      block
                      text-[11px]
                      font-medium
                      text-indigo-200/80
                      text-left
                    "
                  >
                    Last name
                  </label>

                  <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 transition-all duration-200 focus-within:border-indigo-400/30 focus-within:bg-indigo-500/[0.04] py-2">

                    <UserRound
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-indigo-200/60"
                    />

                    <input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        updateField(
                          "lastName",
                          e.target.value
                        )
                      }
                      placeholder="Enter your last name"
                      className="
                        h-9
                        min-w-0
                        flex-1
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

                {/* Date of birth */}

                <div>

                  <label
                    htmlFor="dob"
                    className="
                      mb-2
                      block
                      text-[11px]
                      font-medium
                      text-indigo-200/80
                      text-left
                    "
                  >
                    Date of birth
                  </label>

                  <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 transition-all duration-200 focus-within:border-indigo-400/30 focus-within:bg-indigo-500/[0.04] py-2">

                    <CalendarDays
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-indigo-200/60"
                    />

                    <input
                      id="dob"
                      type="date"
                      value={formData.dob}
                      onChange={(e) =>
                        updateField(
                          "dob",
                          e.target.value
                        )
                      }
                      className="
                        h-9
                        min-w-0
                        flex-1
                        border-none
                        bg-transparent
                        p-0
                        text-[13px]
                        text-white
                        outline-none
                      "
                    />

                  </div>

                </div>

              </div>
            )}

            {/* ================= STEP 4 ================= */}


              {/* =================================================
                  PASSWORD
              ================================================= */}
            {
              step === 4 && (
              <div className="transition-all duration-300">
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


              {/* // /* =================================================
              //     CONFIRM PASSWORD
              // ================================================= */}

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
                    <LockKeyhole size={20} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0 flex-1">

                    <label
                      htmlFor="password"
                      className="block text-[11px] font-medium text-indigo-200/90 w-full text-left"
                    >
                      Confirm Password
                    </label>

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm password"
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
            </div>
            )}

            {/* ================= NAVIGATION ================= */}

            <div className="mt-8 flex items-center gap-3">

              {step > 1 && (
                <button
                  type="button"
                  onClick={previousStep}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    text-white/45
                    transition
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  <ArrowLeft
                    size={17}
                    strokeWidth={1.6}
                  />
                </button>
              )}

              <button
                type={step === 4 ? "submit" : "button"}
                onClick={step === 4 ? undefined : nextStep}
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

                {step === 4 ? (
                  <>
                    Create account
                    <Check
                      size={16}
                      strokeWidth={1.8}
                    />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight
                      size={16}
                      strokeWidth={1.8}
                    />
                  </>
                )}

              </button>

            </div>

          </form>

          {/* Login */}

          <p
            className="
              mt-15
              text-center
              text-[11px]
              text-white/30
            "
          >
            Already have an account?{" "}

            <Link to={'/login'}
              type="button"
              className="
                text-indigo-300
                transition
                hover:text-indigo-200
              "
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </main>
  );
}
