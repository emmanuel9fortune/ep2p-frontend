import { useEffect, useState } from "react";

import {
    ArrowLeft,
    Check,
    Mail,
} from "lucide-react";

import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";

import { verifyEmailOTP, resendEmailOTP } from "../services/authService";
import { useAuth } from "./authContext";

export default function OtpVerification() {
    const navigate = useNavigate();
    const location = useLocation();

    const { login } = useAuth();

    const email =
        location.state?.email || "";

    const [otp, setOtp] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    useEffect(() => {
        if (!email) {
            navigate("/signup", {
                replace: true,
            });
        }
    }, [email, navigate]);

    const handleChange = (event) => {
        const value =
            event.target.value
                .replace(/\D/g, "")
                .slice(0, 6);

        setOtp(value);
        setError("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (otp.length !== 6) {
            setError(
                "Please enter the 6-digit verification code."
            );

            return;
        }

        setLoading(true);
        setError("");

        try {
            const data =
                await verifyEmailOTP({
                    email,
                    otp,
                });

            console.log("OTP response:", data);
            console.log("Token:", data?.token);
            console.log("User:", data?.user);
            console.log("Navigating to dashboard...");
            console.log(typeof data.token);

            sessionStorage.setItem(
                "accessToken",
                data.token
            );

            console.log(
                "Token immediately after saving:",
                sessionStorage.getItem("accessToken")
            );

            if (data?.user) {
                login({
                    user: data.user,
                    accessToken: data.token,
                });
            }

            navigate("/dashboard", {
                replace: true,
            });
        } catch (error) {
            setError(
                error.message ||
                "Invalid verification code."
            );
        } finally {
            setLoading(false);
        }
    };

    const [resending, setResending] =
        useState(false);

    const [resendMessage, setResendMessage] =
        useState("");

    const [resendError, setResendError] =
        useState("");

    const handleResendOTP = async () => {
        if (!email || resending) {
            return;
        }

        setResending(true);
        setResendMessage("");
        setResendError("");

        try {
            const data = await resendEmailOTP({
                email
            });

            setOtp("");

            setResendMessage(
                data.message ||
                "A new verification code has been sent."
            );

        } catch (error) {
            console.error(
                "Resend OTP error:",
                error
            );

            setResendError(
                error.message ||
                "Unable to resend verification code."
            );

        } finally {
            setResending(false);
        }
    };

    return (
        <main
            className="
                min-h-screen
                bg-[#070b16]
                px-5
                py-10
                text-white
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    min-h-[90vh]
                    w-full
                    max-w-md
                    items-center
                    justify-center
                "
            >
                <div className="w-full">

                    <div className="mb-8 text-center">

                        <div
                            className="
                                mx-auto
                                mb-6
                                flex
                                h-14
                                w-14
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
                                size={22}
                                strokeWidth={1.5}
                            />
                        </div>

                        <p
                            className="
                                mb-2
                                text-[10px]
                                uppercase
                                tracking-[0.25em]
                                text-indigo-300/45
                            "
                        >
                            Verify your email
                        </p>

                        <h1
                            className="
                                text-2xl
                                font-semibold
                            "
                        >
                            Check your inbox
                        </h1>

                        <p
                            className="
                                mx-auto
                                mt-3
                                text-cnter
                                text-[12px]
                                leading-5
                                text-white/35
                            "
                        >
                            We sent a 6-digit
                            verification code to
                        </p>

                        <p
                            className="
                                mt-1
                                break-all
                                text-[12px]
                                text-indigo-300/80
                            "
                        >
                            {email}
                        </p>
                    </div>

                    {resendMessage && ( 
                        <p className="mt-3 text-center text-sm text-green-400"> {resendMessage} </p>
                    )} 
                    {resendError && ( 
                        <p className="mt-3 text-center text-sm text-red-400"> {resendError} </p> 
                    )}

                    {error && (
                        <div
                            className="
                                mb-5
                                rounded-xl
                                border
                                border-red-400/20
                                bg-red-500/[0.06]
                                px-4
                                py-3
                                text-[11px]
                                text-red-300
                            "
                        >
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                    >
                        <label
                            htmlFor="otp"
                            className="
                                block
                                text-[11px]
                                font-medium
                                text-indigo-200/90
                            "
                        >
                            Verification code
                        </label>

                        <input
                            id="otp"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            value={otp}
                            onChange={handleChange}
                            autoFocus
                            placeholder="000000"
                            className="
                                mt-3
                                h-14
                                w-full
                                rounded-xl
                                border
                                border-white/[0.08]
                                bg-white/[0.025]
                                text-center
                                text-xl
                                tracking-[0.45em]
                                text-white
                                outline-none
                                transition
                                focus:border-indigo-400/40
                                focus:bg-indigo-500/[0.04]
                                placeholder:text-white/15
                            "
                        />

                        <div className="mt-5 flex items-center justify-between">
                            <div></div>
                            <button
                                type="button"
                                onClick={handleResendOTP}
                                disabled={resending}
                                className="text-sm text-white/70 hover:text-white disabled:opacity-50"
                            >
                                {resending
                                    ? "Sending..."
                                    : "Resend code"}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={
                                loading ||
                                otp.length !== 6
                            }
                            className="
                                mt-6
                                flex
                                h-[52px]
                                w-full
                                items-center
                                justify-center
                                gap-2.5
                                rounded-[17px]
                                bg-gradient-to-r
                                from-[#5535ff]
                                via-[#7438ff]
                                to-[#a333ff]
                                text-[13px]
                                font-medium
                                shadow-[0_12px_35px_rgba(112,61,255,0.30)]
                                transition
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                        >

                      
                            
                          {loading ? (
                                  <>
                                      <span
                                          className="
                                              h-4
                                              w-4
                                              animate-spin
                                              rounded-full
                                              border-2
                                              border-white/30
                                              border-t-white
                                          "
                                      />

                                      Verifying...
                                  </>
                            ) : (
                                <>
                                    Verify email
                                    <Check
                                        size={16}
                                    />
                                </>
                            )
                          }
                        </button>
                    </form>

                    <div className="mt-7 text-center">
                        <Link
                            to="/signup"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                text-[11px]
                                text-white/35
                                transition
                                hover:text-white
                            "
                        >
                            <ArrowLeft size={14} />
                            Back to signup
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
