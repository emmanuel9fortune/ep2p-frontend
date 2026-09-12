import React, { useState } from "react";
import { submitUSDTDeposit } from "../services/depositService";

const TokenIcon = ({ type }) => {
  if (type === "usdt") {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12251f] text-sm font-bold text-[#26a17b]">
        ₮
      </div>
    );
  }

  if (type === "ngn") {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#172337] text-sm font-bold text-[#4b9cff]">
        ₦
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
  const [activeTab, setActiveTab] = useState("convert");
  const [network, setNetwork] = useState("TRC20");

  const [depositAmount, setDepositAmount] = useState("");
  const [txHash, setTxHash] = useState("");

  const [depositStatus, setDepositStatus] = useState(null);
  const [depositLoading, setDepositLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [buyAmount, setBuyAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  // Temporary address.
  // Later this should come from:
  // GET /api/wallet/deposit-address
  const depositAddress = "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

  const copyDepositAddress = async () => {
    try {
      await navigator.clipboard.writeText(depositAddress);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      setDepositStatus({
        type: "error",
        message: "Unable to copy the deposit address.",
      });
    }
  };

  const handleDepositSubmit = async (e) => {
    e.preventDefault();
    setDepositStatus(null);

    if (!depositAmount) {
      setDepositStatus({
        type: "error",
        message: "Please enter the deposit amount.",
      });
      return;
    }

    if (Number(depositAmount) <= 0) {
      setDepositStatus({
        type: "error",
        message: "Enter a valid deposit amount.",
      });
      return;
    }

    if (!txHash.trim()) {
      setDepositStatus({
        type: "error",
        message: "Please enter the transaction hash.",
      });
      return;
    }

    if (!depositAddress.trim()) {
      setDepositStatus({
        type: "error",
        message: "Deposit address is required.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await submitUSDTDeposit({
        amount: depositAmount,
        network,
        txHash: txHash.trim(),
        depositAddress: depositAddress.trim(),
        description: "USDT deposit",
      });

      setDepositStatus({
        type: "success",
        message:
          response?.message ||
          "Deposit submitted successfully and is pending verification.",
      });

      setDepositAmount("");
      setTxHash("");

    } catch (error) {
      console.error("Deposit submission error:", error);

      setDepositStatus({
        type: "error",
        message:
          error?.message ||
          "Unable to submit deposit. Please try again.",
      });

    } finally {
      setIsSubmitting(false);
    }
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
    setDepositStatus(null);
  };

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

          <button
            onClick={() => [scrollToBottom(), changeTab("convert")]}
            className={`flex-1 rounded-xl py-2 text-[10px] font-medium transition ${
              activeTab === "convert"
                ? "bg-white/[0.07] text-white"
                : "text-white/30"
            }`}
          >
            Buy USDT
          </button>

          <button
            onClick={() => [scrollToBottom(), changeTab("send")]}
            className={`flex-1 rounded-xl py-2 text-[10px] font-medium transition ${
              activeTab === "send"
                ? "bg-white/[0.07] text-white"
                : "text-white/30"
            }`}
          >
            Send
          </button>

          <button
            onClick={() => [scrollToBottom(), changeTab("receive")]}
            className={`flex-1 rounded-xl py-2 text-[10px] font-medium transition ${
              activeTab === "receive"
                ? "bg-white/[0.07] text-white"
                : "text-white/30"
            }`}
          >
            Deposit
          </button>

        </div>

        {/* ===================================================== */}
        {/* BUY USDT */}
        {/* ===================================================== */}

        {activeTab === "convert" && (
          <div className="mt-5">

            {/* Header */}
            <div className="mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12251f] text-base font-bold text-[#26a17b]">
                  ₮
                </div>

                <div>
                  <h2 className="text-[13px] font-medium text-white w-full text-left">
                    Buy USDT
                  </h2>

                  <p className="mt-0.2 text-[9px] text-white/30">
                    Buy USDT instantly with Nigerian Naira
                  </p>
                </div>
              </div>
            </div>

            {/* Amount input */}
            <div className="rounded-2xl border border-white/[0.055] bg-[#0d1422] p-4">

              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/35">
                  You pay
                </span>

                <span className="text-[9px] text-white/25">
                  NGN
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2">

                <span className="text-[24px] font-medium text-white/60">
                  ₦
                </span>

                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="0.00"
                  value={buyAmount}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9.]/g, "");
                    setBuyAmount(value);
                  }}
                  className="min-w-0 flex-1 bg-transparent text-[30px] font-medium tracking-[-1px] text-white outline-none placeholder:text-white/15"
                />

              </div>

              {/* Live conversion */}
              <div className="mt-3 border-t border-white/[0.05] pt-3">

                <div className="flex items-center justify-between">

                  <span className="text-[10px] text-white/30">
                    You receive
                  </span>

                  <span className="text-[13px] font-medium text-emerald-400">
                    ≈ {buyAmount
                      ? (Number(buyAmount.replace(/,/g, "")) / 1540).toFixed(2)
                      : "0.00"} USDT
                  </span>

                </div>

              </div>

            </div>

            {/* Balance */}
            <div className="mt-2 flex items-center justify-between px-1">
              <span className="text-[9px] text-white/25">
                Available balance
              </span>

              <span className="text-[9px] text-white/40">
                ₦250,000.00
              </span>
            </div>

            {/* Rate */}
            <div className="mt-4 rounded-2xl border border-white/[0.05] bg-white/[0.025] p-4">

              <div className="flex items-center justify-between">
                <span className="text-[9px] text-white/30">
                  Exchange rate
                </span>

                <span className="text-[9px] font-medium text-white/60">
                  1 USDT = ₦1,540
                </span>
              </div>

              <div className="mt-2.5 flex items-center justify-between">
                <span className="text-[9px] text-white/30">
                  Service fee
                </span>

                <span className="text-[9px] text-white/55">
                  ₦0.00
                </span>
              </div>

              <div className="mt-2.5 flex items-center justify-between">
                <span className="text-[9px] text-white/30">
                  Network fee
                </span>

                <span className="text-[9px] text-white/55">
                  ₦0.00
                </span>
              </div>

            </div>

            {/* Continue */}
            <button
              type="button"
              disabled={!buyAmount || Number(buyAmount) <= 0}
              className="group relative mt-5 h-14 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#6338ff] via-[#7b3cff] to-[#5b35ef] text-[12px] font-semibold text-white shadow-[0_15px_45px_rgba(100,60,255,0.25)] transition duration-200 hover:scale-[1.01] hover:shadow-[0_18px_55px_rgba(100,60,255,0.35)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            >
              <span className="relative z-10">
                Continue to payment
              </span>

              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
            </button>

            {/* Security */}
            <div className="mt-4 flex items-center justify-center gap-2">

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

              <span className="text-[8px] text-white/25">
                Secure purchase • USDT is credited after payment
              </span>

            </div>

          </div>
        )}

        {/* ===================================================== */}
        {/* SEND */}
        {/* ===================================================== */}

        {activeTab === "send" && (
          <div className="mt-5">
            {/* Header */}
            <div className="mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12251f] text-base font-bold text-[#26a17b]">
                  ₮
                </div>

                <div>
                  <h2 className="text-[13px] font-medium text-white w-full text-left">
                    Send USDT
                  </h2>

                  <p className="mt-0.2 text-[9px] text-white/30">
                    Send USDT to another wallet
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                rounded-2xl
                border border-white/[0.055]
                bg-[#0d1422]
                p-4
              "
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[10px] text-white/35">
                    Send
                  </p>

                  <p className="mt-1 text-[13px] font-medium text-white">
                    USDT
                  </p>
                </div>

                <TokenIcon type="usdt" />

              </div>

              {/* WARNING */}
              <div className="mt-3 flex gap-2.5 rounded-xl border border-yellow-400/10 bg-yellow-400/[0.035] p-3">

                <svg
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-400/70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 3 2.8 20h18.4L12 3Z" />
                  <path d="M12 9v5" />
                  <path d="M12 17.5h.01" />
                </svg>

                <p className="text-[9px] leading-4 text-yellow-100/45">
                  <span className="font-medium text-yellow-100/70">Important:</span> Make sure the recipient address is correct and supports <span className="font-medium text-yellow-100/70">USDT on the TRC20 network</span>. Transactions sent to an incorrect address or through an unsupported network may be <span className="font-medium text-yellow-100/70">irreversible and result in permanent loss of funds</span>.
                </p>


              </div>

              <div className="mt-5">

                <label className="text-[9px] text-white/35 flex text-left w-full">
                  Recipient address
                </label>

                <input
                  placeholder="Enter USDT wallet address"
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border border-white/[0.06]
                    bg-white/[0.025]
                    px-3
                    py-3
                    text-[11px]
                    text-white
                    outline-none
                    placeholder:text-white/20
                    focus:border-violet-400/30
                  "
                />

              </div>

              <div className="mt-4">

                <label className="text-[9px] text-white/35 flex text-left w-full">
                  Amount
                </label>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    rounded-xl
                    border border-white/[0.06]
                    bg-white/[0.025]
                    px-3
                  "
                >

                  <input
                    placeholder="0.00"
                    className="
                      w-full
                      bg-transparent
                      py-3
                      text-[14px]
                      text-white
                      outline-none
                      placeholder:text-white/20
                    "
                  />

                  <span className="text-[10px] font-medium text-[#26a17b]">
                    USDT
                  </span>

                </div>

              </div>

            </div>

            <button
              className="
                mt-5
                h-14
                w-full
                rounded-2xl
                bg-gradient-to-r
                from-[#6338ff]
                via-[#7b3cff]
                to-[#5b35ef]
                text-[12px]
                font-semibold
                shadow-[0_15px_45px_rgba(100,60,255,0.25)]
                transition
                hover:scale-[1.01]
                active:scale-[0.98]
              "
            >
              Send USDT
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
                Secure transaction
              </span>

            </div>

          </div>
        )}

        {/* ===================================================== */}
        {/* RECEIVE / DEPOSIT USDT */}
        {/* ===================================================== */}

        {activeTab === "receive" && (
          <div className="mt-5">
            {/* Header */}
            <div className="mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12251f] text-base font-bold text-[#26a17b]">
                  ₮
                </div>

                <div>
                  <h2 className="text-[13px] font-medium text-white w-full text-left">
                    Deposit USDT
                  </h2>

                  <p className="mt-0.2 text-[9px] text-white/30">
                    Deposit USDT to your wallet
                  </p>
                </div>
              </div>
            </div>

            {/* ASSET + NETWORK */}
            <div
              className="
                rounded-2xl
                border border-white/[0.055]
                bg-[#0d1422]
                p-2
              "
            >

              {/* NETWORK */}
              <div className="mt-1">

                <p className="text-[9px] text-white/35 w-full text-left">
                  Network
                </p>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border border-white/[0.06]
                    bg-white/[0.025]
                    px-3
                    py-3
                  "
                >

                  <div className="flex items-center gap-2.5">

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/10">

                      <svg
                        className="h-3.5 w-3.5 text-red-400"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2 4.5 6.3v8.4L12 19l7.5-4.3V6.3L12 2Zm0 2.3 5.5 3.2L12 10.7 6.5 7.5 12 4.3Zm-6 5.1 5 2.9v4.2l-5-2.9V9.4Zm7 7.1v-4.2l5-2.9v4.2l-5 2.9Z" />
                      </svg>

                    </div>

                    <div>
                      <p className="text-[11px] font-medium text-white w-full text-left">
                        TRON
                      </p>

                      <p className="text-[8px] text-white/30">
                        TRC20 network
                      </p>
                    </div>

                  </div>

                  <div className="flex-column">
                    <span className="rounded-full bg-[#12251f] px-2.5 py-1 text-[8px] font-medium text-[#26a17b]">
                      Supported
                    </span>
                    <br/>

                    <span className="text-[8px] text-white/30 w-full">
                      Only network
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* WARNING */}
            <div className="mt-3 flex gap-2.5 rounded-xl border border-yellow-400/10 bg-yellow-400/[0.035] p-3">

              <svg
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-400/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 3 2.8 20h18.4L12 3Z" />
                <path d="M12 9v5" />
                <path d="M12 17.5h.01" />
              </svg>

              <p className="text-[9px] leading-4 text-yellow-100/45">
                Only send <span className="font-medium text-yellow-100/70">USDT</span> using the <span className="font-medium text-yellow-100/70">TRC20</span> network. Sending through another network may result in permanent loss.
              </p>

            </div>

            {/* DEPOSIT ADDRESS */}
            <div className="mt-3">

              <div className="flex items-center justify-between">

                <p className="text-[9px] text-white/35">
                  Deposit address
                </p>

                <span className="text-[8px] text-white/20">
                  TRC20
                </span>

              </div>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border border-white/[0.06]
                  bg-[#0d1422]
                  p-2
                "
              >

                <div className="min-w-0 flex-1">

                  <p className="break-all px-1 text-[9px] leading-4 text-white/55">
                    {depositAddress}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={copyDepositAddress}
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border border-white/[0.06]
                    bg-white/[0.035]
                    transition
                    hover:bg-white/[0.07]
                    active:scale-95
                  "
                  aria-label="Copy deposit address"
                >

                  {copied ? (
                    <svg
                      className="h-4 w-4 text-emerald-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4 text-white/50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="10"
                        height="10"
                        rx="2"
                      />

                      <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}

                </button>

              </div>

              {copied && (
                <p className="mt-1.5 text-right text-[8px] text-emerald-400/70">
                  Address copied
                </p>
              )}

            </div>

            {/* DEPOSIT FORM */}
            <form onSubmit={handleDepositSubmit}>

              {/* AMOUNT */}
              <div className="mt-4">

                <div className="flex items-center justify-between">

                  <label className="text-[9px] text-white/35">
                    Amount sent
                  </label>

                  <span className="text-[8px] text-white/20">
                    USDT
                  </span>

                </div>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    rounded-xl
                    border border-white/[0.06]
                    bg-[#0d1422]
                    px-3
                  "
                >

                  <input
                    type="number"
                    min="0"
                    step="0.000001"
                    value={depositAmount}
                    onChange={(event) =>
                      setDepositAmount(event.target.value)
                    }
                    placeholder="0.00"
                    className="
                      w-full
                      bg-transparent
                      py-3
                      text-[13px]
                      text-white
                      outline-none
                      placeholder:text-white/20
                    "
                  />

                  <span className="text-[10px] font-medium text-[#26a17b]">
                    USDT
                  </span>

                </div>

              </div>

              {/* TX HASH */}
              <div className="mt-4">

                <div className="flex items-center justify-between">

                  <label className="text-[9px] text-white/35">
                    Transaction hash
                  </label>

                  <span className="text-[8px] text-white/20"></span>

                </div>

                <div
                  className="
                    mt-2
                    rounded-xl
                    border border-white/[0.06]
                    bg-[#0d1422]
                    px-3
                  "
                >

                  <input
                    type="text"
                    value={txHash}
                    onChange={(event) =>
                      setTxHash(event.target.value)
                    }
                    placeholder="Enter your TRON transaction hash"
                    className="
                      w-full
                      bg-transparent
                      py-3
                      text-[10px]
                      text-white
                      outline-none
                      placeholder:text-white/20
                    "
                  />

                </div>

              </div>

              {/* STATUS */}
              {depositStatus && (
                <div
                  className={`mt-3 rounded-xl border p-3 ${
                    depositStatus.type === "success"
                      ? "border-emerald-400/10 bg-emerald-400/[0.035]"
                      : "border-red-400/10 bg-red-400/[0.035]"
                  }`}
                >

                  <div className="flex gap-2.5">

                    {depositStatus.type === "success" ? (
                      <svg
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    ) : (
                      <svg
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    )}

                    <p
                      className={`text-[9px] leading-4 ${
                        depositStatus.type === "success"
                          ? "text-emerald-100/60"
                          : "text-red-100/60"
                      }`}
                    >
                      {depositStatus.message}
                    </p>

                  </div>

                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={depositLoading}
                className="
                  group
                  relative
                  mt-4
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
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >

                <span className="relative z-10">

                  {isSubmitting ? "Submitting..." : "Submit Deposit"}

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

            </form>

            {/* SECURITY */}
            <div className="mt-4 flex items-start justify-center gap-2 px-2">

              <svg
                className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400/60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>

              <span className="text-center text-[8px] leading-4 text-white/25">
                Deposits are reviewed before your USDT balance is credited.
              </span>

            </div>

          </div>
        )}


      </div>

    </section>
  );
}
