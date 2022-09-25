import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Images from "../components/Images";
import About from "../components/About";
import Download from "../components/Download";

// Constants

const App = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support

  return (
    <div>
      <Head>
        <title>Game Page Example</title>
        <meta name="content" content="MY GAME INFO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div class="place-content-center">
          <Navbar />
        </div>
        <div class="w-full h-[70px]"></div>
        <div class="flex justify-center">
          <div class="bg-black rounded-md grid grid-cols-3 grid-rows-9 gap-2 max-w-5xl h-auto justify-items-center p-[15px]">
            <div class="box col-start-1 col-end-4">
              <Title />
            </div>
            <div class="box col-start-1 col-end-4">
              <Images />
            </div>
            <div class="box col-start-1 col-end-3">
              <About />
            </div>
            <div class="box col-start-3 col-end-4">
              <Download />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
