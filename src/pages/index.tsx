import type { NextPage } from "next";
import Head from "next/head";
import MainContainer from "../containers/MainContainer";
// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>DAO Project</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <div className="h-full grid place-items-center">No DAO selected</div>
      </MainContainer>
    </>
  );
};

export default Home;
