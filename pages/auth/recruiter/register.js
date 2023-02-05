import Head from "next/head";
import React from "react";
import LeftSideAuth from "@/components/molecules/LeftSideAuth";
import RightSideRegister from "@/components/molecules/rightSideRegister";

function register() {
  return (
    <>
      <Head>
        <title>Register | Hire Job</title>
      </Head>
      <main className="row">
        <LeftSideAuth />
        <RightSideRegister />
      </main>
    </>
  );
}

export default register;
