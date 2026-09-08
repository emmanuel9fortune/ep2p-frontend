import { Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  WalletCards,
  ArrowLeftRight,
  ReceiptText,
  ArrowDownToLine,
  ArrowUpFromLine,
  Settings,
  ShieldCheck,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    label: "Wallets",
    icon: WalletCards,
    path: "/wallets",
  },
  {
    label: "Buy / Sell",
    icon: ArrowLeftRight,
    path: "/trade",
  },
  {
    label: "Transactions",
    icon: ReceiptText,
    path: "/transactions",
  },
  {
    label: "Deposit",
    icon: ArrowDownToLine,
    path: "/deposit",
  },
  {
    label: "Withdraw",
    icon: ArrowUpFromLine,
    path: "/withdraw",
  },
];

const secondaryNavigation = [
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
  {
    label: "Security",
    icon: ShieldCheck,
    path: "/security",
  },
];

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#17191c]">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-[250px] shrink-0 border-r border-[#e7e9ec] bg-white lg:flex lg:flex-col">

          {/* Logo */}
          <div className="flex h-[76px] items-center px-7 border-b border-[#e7e9ec]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#17191c] text-white font-bold">
                C
              </div>

              <span className="text-[17px] font-semibold tracking-[-0.02em]">
                Crypto
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-4 py-6">

            <p className="px-3 mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#92979f]">
              Overview
            </p>

            <nav className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.path}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium text-[#6b7078] transition hover:bg-[#f4f5f7] hover:text-[#17191c]"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="text-[#858a92] group-hover:text-[#17191c]"
                    />

                    {item.label}
                  </a>
                );
              })}
            </nav>

            <p className="px-3 mb-3 mt-8 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#92979f]">
              Account
            </p>

            <nav className="space-y-1">
              {secondaryNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.path}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium text-[#6b7078] transition hover:bg-[#f4f5f7] hover:text-[#17191c]"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                    />

                    {item.label}
                  </a>
                );
              })}
            </nav>

          </div>

          {/* Security status */}
          <div className="p-4">
            <div className="rounded-2xl border border-[#e7e9ec] bg-[#fafbfc] p-4">

              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eaf7ef]">
                  <ShieldCheck
                    size={15}
                    className="text-[#21874b]"
                  />
                </div>

                <span className="text-[12px] font-semibold">
                  Account secured
                </span>
              </div>

              <p className="mt-2 text-[11px] leading-5 text-[#858a92]">
                Your account security is up to date.
              </p>

            </div>
          </div>

        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">

          {/* Top bar */}
          <header className="flex h-[76px] items-center justify-between border-b border-[#e7e9ec] bg-white px-5 sm:px-8">

            <div>
              <p className="text-[13px] text-[#858a92]">
                Welcome back
              </p>

              <p className="text-[15px] font-semibold">
                Emmanuel
              </p>
            </div>

            <div className="flex items-center gap-3">

              <button className="hidden rounded-xl border border-[#e1e4e8] px-4 py-2 text-[13px] font-medium transition hover:bg-[#f7f8fa] sm:block">
                Help
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17191c] text-[12px] font-semibold text-white">
                EM
              </button>

            </div>

          </header>

          {/* Page */}
          <div className="p-5 sm:p-8">
            <Outlet />
          </div>

        </main>

      </div>
    </div>
  );
}