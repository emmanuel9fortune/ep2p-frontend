import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isVerifying, setIsVerifying] = useState(false);

  const inputRefs = useRef([]);

  // Countdown
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Focus first input on page load
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];

    // Only keep the last character
    newOtp[index] = value.slice(-1);

    setOtp(newOtp);

    // Move to next box
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move backwards on backspace
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    // Move left
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // Move right
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle pasting a complete OTP
  const handlePaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pastedData) return;

    const newOtp = ["", "", "", "", "", ""];

    pastedData.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    const nextIndex = Math.min(pastedData.length, 5);

    inputRefs.current[nextIndex]?.focus();
  };

  const resendOTP = () => {
    if (timeLeft > 0) return;

    // Reset OTP
    setOtp(["", "", "", "", "", ""]);

    // Restart timer
    setTimeLeft(60);

    // Focus first input
    inputRefs.current[0]?.focus();

    // Send new OTP to backend here
    console.log("Resending OTP...");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const code = otp.join("");

    if (code.length !== 6) {
      return;
    }

    setIsVerifying(true);

    console.log("OTP:", code);

    // Verify OTP with your backend here
    //
    // Example:
    //
    // const response = await fetch("/api/verify-otp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     otp: code,
    //   }),
    // });

    setTimeout(() => {
      setIsVerifying(false);
    }, 1500);
  };

  const isComplete = otp.every((digit) => digit !== "");

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
      {/* ================================================= */}
      {/* ANIMATED SPACE BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Small stars */}
        {Array.from({ length: 45 }).map((_, i) => (
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
              opacity: 0.2 + Math.random() * 0.5,
            }}
          />
        ))}

        {/* Glowing stars */}
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

      {/* ================================================= */}
      {/* BACKGROUND GLOWS */}
      {/* ================================================= */}

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

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

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

          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

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
              <span className="text-lg font-semibold">
                L
              </span>
            </div>

          </div>

          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

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
              Verification
            </p>

            <h1
              className="
                text-2xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              Verify your account
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
              Enter the 6-digit verification code
              we sent to your email.
            </p>

          </div>

          {/* ================================================= */}
          {/* VERIFICATION ICON */}
          {/* ================================================= */}

          <div className="mb-7 flex justify-center">

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-indigo-400/10
                bg-indigo-500/[0.07]
                text-indigo-200
                shadow-[0_0_35px_rgba(99,102,241,0.08)]
              "
            >
              <ShieldCheck
                size={30}
                strokeWidth={1.3}
              />
            </div>

          </div>

          {/* ================================================= */}
          {/* OTP FORM */}
          {/* ================================================= */}

          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label
                className="
                  block
                  text-[11px]
                  font-medium
                  text-indigo-200/90
                  text-left
                "
              >
                Verification code
              </label>

            </div>

            {/* OTP BOXES */}

            <div
              className="
                mt-3
                flex
                w-full
                justify-between
                gap-2
              "
            >

              {otp.map((digit, index) => (

                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) =>
                    handleChange(
                      index,
                      e.target.value
                    )
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(index, e)
                  }
                  onPaste={handlePaste}
                  className="
                    h-[54px]
                    w-full
                    rounded-xl
                    border
                    border-white/[0.09]
                    bg-white/[0.025]
                    text-center
                    text-lg
                    font-medium
                    text-white
                    outline-none
                    transition-all
                    duration-200
                    focus:border-indigo-400/40
                    focus:bg-indigo-500/[0.05]
                    focus:shadow-[0_0_20px_rgba(99,102,241,0.08)]
                  "
                />

              ))}

            </div>

            {/* ================================================= */}
            {/* TIMER */}
            {/* ================================================= */}

            <div className="mt-5 flex items-center justify-between">

              <p
                className="
                  text-[10px]
                  text-white/25
                "
              >
                Didn't receive the code?
              </p>

              {timeLeft > 0 ? (

                <span
                  className="
                    text-[10px]
                    font-medium
                    text-indigo-300/60
                  "
                >
                  Resend in {timeLeft}s
                </span>

              ) : (

                <button
                  type="button"
                  onClick={resendOTP}
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-[10px]
                    font-medium
                    text-indigo-300
                    transition
                    hover:text-indigo-200
                  "
                >
                  <RefreshCw
                    size={12}
                    strokeWidth={1.7}
                  />

                  Resend code
                </button>

              )}

            </div>

            {/* ================================================= */}
            {/* VERIFY BUTTON */}
            {/* ================================================= */}

            <button
              type="submit"
              disabled={!isComplete || isVerifying}
              className={`
                group
                relative
                mt-8
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
                ${
                  !isComplete || isVerifying
                    ? "cursor-not-allowed opacity-40"
                    : "hover:scale-[1.01] hover:shadow-[0_15px_45px_rgba(112,61,255,0.42)] active:scale-[0.98]"
                }
              `}
            >

              {isVerifying ? (
                <>
                  <RefreshCw
                    size={16}
                    strokeWidth={1.8}
                    className="animate-spin"
                  />

                  Verifying...
                </>
              ) : (
                <>
                  Verify account

                  <ArrowRight
                    size={16}
                    strokeWidth={1.8}
                  />
                </>
              )}

            </button>

          </form>

          {/* ================================================= */}
          {/* BACK */}
          {/* ================================================= */}

          <div className="mt-7 text-center">

            <button
              type="button"
              className="
                inline-flex
                items-center
                gap-2
                text-[11px]
                text-white/30
                transition
                hover:text-white/70
              "
            >

              <ArrowLeft
                size={14}
                strokeWidth={1.6}
              />

              Back to sign up

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}
