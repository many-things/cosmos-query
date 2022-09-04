import type { NextPage } from "next";
import { useEffect } from "react";
import { getCosmosQuery } from "use-cosmos-query";

const lcdList = {
  ["cosmoshub-4"]: "https://lcd-cosmoshub.blockapsis.com",
  ["osmosis-1"]: "https://lcd-osmosis.blockapsis.com",
  ["secret-4"]: "https://lcd-secret.blockapsis.com",
  ["akashnet-2"]: "https://lcd-akash.blockapsis.com",
  ["crypto-org-chain-mainnet-1"]: "https://lcd-crypto-org.blockapsis.com",
  ["iov-mainnet-ibc"]: "https://lcd-iov.blockapsis.com",
  ["sifchain-1"]: "https://lcd-sifchain.blockapsis.com",
  ["shentu-2.2"]: "https://lcd-certik.blockapsis.com",
  ["irishub-1"]: "https://lcd-iris.blockapsis.com",
  ["regen-1"]: "https://lcd-regen.blockapsis.com",
  ["juno-1"]: "https://lcd-juno.blockapsis.com",
  ["stargaze-1"]: "https://lcd-stargaze.blockapsis.com",
  ["core-1"]: "https://lcd-persistence.blockapsis.com",
  ["axelar-dojo-1"]: "https://lcd-axelar.blockapsis.com",
  ["sommelier-3"]: "https://lcd-sommelier.blockapsis.com",
  ["umee-1"]: "https://lcd-umee.blockapsis.com",
  ["agoric-3"]: "https://lcd-agoric.blockapsis.com",
  ["gravity-bridge-3"]: "https://lcd-gravity-bridge.blockapsis.com",
  ["sentinelhub-2"]: "https://lcd-sentinel.blockapsis.com",
  ["impacthub-3"]: "https://lcd-impacthub.blockapsis.com",
  ["emoney-3"]: "https://lcd-emoney.blockapsis.com",
};

const Home: NextPage = () => {
  const { getAccounts } = getCosmosQuery(lcdList["osmosis-1"]);

  useEffect(() => {
    (async () => {
      const a = await getAccounts({
        offset: 10,
        limit: 10,
      });
      console.log(a);
    })();
  }, []);

  return <></>;
};

export default Home;
