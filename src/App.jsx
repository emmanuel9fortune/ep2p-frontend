import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./auth/Signin";
import Signup from "./auth/SignUp";
import ForgotPassword from "./auth/ForgotPAssword";
import PasswordReset from "./auth/PasswordReset";
import OTP from "./auth/OtpVerification";

function Placeholder({ title }) {
  return (
    <div className="rounded-3xl border border-[#e7e9ec] bg-white p-8">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2 text-sm text-[#858a92]">
        This section is coming next.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route>
        {/* <Route element={<OTP />}> */}

          <Route path="/" element={<Dashboard />} />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/otp-verification"
            element={<OTP />}
          />

          <Route
            path="/password-reset"
            element={<PasswordReset />}
          />

          <Route
            path="/settings"
            element={<Placeholder title="Settings" />}
          />

          <Route
            path="/security"
            element={<Placeholder title="Security" />}
          />


        </Route>

      </Routes>
    </BrowserRouter>
  );
}