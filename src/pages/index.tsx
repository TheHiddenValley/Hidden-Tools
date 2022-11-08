import Footer from "components/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div  className=" flex flex-col h-screen justify-between">
      <Head>
        <title>Hidden Tools</title>
        <meta
          name="description"
          content="Hidden tools to help you in Solana degening"
        />
      </Head>
      <HomeView />
      <Footer/>
    </div>
  );
};

export default Home;
