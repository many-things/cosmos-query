import type { NextPage } from "next";
import { useEffect } from "react";
import { getNodeInfo } from "use-cosmos-query";

const Home: NextPage = () => {
  useEffect(() => {
    (async() => {
      const a = await getNodeInfo();
      console.log(a);
    })()
  }, [])
  return <></>;
};

export default Home;
