import React from "react";
import LeftSideAuth from "@/components/molecules/leftSideAuth";
import RightSideLogin from "@/components/molecules/rightSideLogin";
import Head from "next/head";

function login() {
  return (
    <>
      <Head>
        <title>Login | Hire Job</title>
      </Head>
      <main className={`row`}>
        <LeftSideAuth />
        <RightSideLogin />
      </main>
    </>
  );
}

export default login;
