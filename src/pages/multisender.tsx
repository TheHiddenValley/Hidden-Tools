import type { NextPage } from "next";
import Head from "next/head";
import { MultiSenderView } from "../views";
import Footer from "components/Footer";

const Home: NextPage = (props) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      <Head>
        <title>Hidden Tools</title>
        <meta name="description" content="Hidden tools to help you in Solana degening" />
      </Head>
      <MultiSenderView />
      <Footer/>
    </div>
  );
};

export default Home;
