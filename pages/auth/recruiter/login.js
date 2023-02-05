import React from "react";
import LeftSideAuth from "@/components/molecules/leftSideAuth";
import RightSideLogin from "@/components/molecules/rightSideLogin";
import Head from "next/head";
import style from "../../../styles/pages/recruiter/loginRecruiterStyle.module.scss";

function login() {
  return (
    <>
      <Head>
        <title>Login | Hire Job</title>
      </Head>
      <main className={`row ${style.login}`}>
        <LeftSideAuth />
        <RightSideLogin />
      </main>
    </>
  );
}

export default login;
