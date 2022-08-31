import axios from "axios";

const lcdList = {
  ["cosmoshub-4"]: "https://lcd-cosmoshub.keplr.app",
  ["osmosis-1"]: "https://lcd-osmosis.keplr.app",
  ["secret-4"]: "https://lcd-secret.keplr.app",
  ["akashnet-2"]: "https://lcd-akash.keplr.app",
  ["crypto-org-chain-mainnet-1"]: "https://lcd-crypto-org.keplr.app",
  ["iov-mainnet-ibc"]: "https://lcd-iov.keplr.app",
  ["sifchain-1"]: "https://lcd-sifchain.keplr.app",
  ["shentu-2.2"]: "https://lcd-certik.keplr.app",
  ["irishub-1"]: "https://lcd-iris.keplr.app",
  ["regen-1"]: "https://lcd-regen.keplr.app",
  ["juno-1"]: "https://lcd-juno.keplr.app",
  ["stargaze-1"]: "https://lcd-stargaze.keplr.app",
  ["core-1"]: "https://lcd-persistence.keplr.app",
  ["axelar-dojo-1"]: "https://lcd-axelar.keplr.app",
};

const instance = axios.create({
  baseURL: "https://lcd-osmosis.blockapsis.com",
});

export { instance };
