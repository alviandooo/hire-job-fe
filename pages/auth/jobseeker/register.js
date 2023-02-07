import Head from "next/head";
import React from "react";
import LeftSideAuth from "../../../components/molecules/leftSideAuth";
import RightSideRegister from "../../../components/molecules/jobseeker/rightSideRegister";

function register() {
  return (
    <>
      <Head>
        <title>Register Jobseeker | Hire Job</title>
      </Head>
      <main className={`row`}>
        <LeftSideAuth />
        <RightSideRegister />
      </main>
    </>
  );
}

export default register;
