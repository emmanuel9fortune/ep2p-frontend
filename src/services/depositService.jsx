import { apiRequest } from "./api";

export const submitUSDTDeposit = async ({
  amount,
  network,
  txHash,
  depositAddress,
  description,
}) => {
  return apiRequest("/api/deposits/usdt", {
    method: "POST",
    body: {
      amount,
      network,
      txHash,
      depositAddress,
      description,
    },
  });
};

export const getUserDeposits = async () => {
  return apiRequest("/api/deposits");
};