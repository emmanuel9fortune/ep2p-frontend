import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./auth/login";
import Signup from "./auth/signuo";
import ForgotPassword from "./auth/ForgotPAssword";
import PasswordReset from "./auth/PasswordReset";

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

        <Route element={<PasswordReset />}>

          <Route path="/" element={<PasswordReset />} />

          <Route
            path="/wallets"
            element={<Placeholder title="Wallets" />}
          />

          <Route
            path="/trade"
            element={<Placeholder title="Buy / Sell" />}
          />

          <Route
            path="/transactions"
            element={<Placeholder title="Transactions" />}
          />

          <Route
            path="/deposit"
            element={<Placeholder title="Deposit" />}
          />

          <Route
            path="/withdraw"
            element={<Placeholder title="Withdraw" />}
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