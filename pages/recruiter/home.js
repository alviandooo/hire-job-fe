import Head from "next/head";
import React from "react";
import style from "../../styles/pages/recruiter/homeStyle.module.scss";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import SearchBox from "@/components/molecules/searchBoxRecruiter";
import CardListWorker from "@/components/molecules/cardListWorker";
import axios from "axios";

function home(props) {
  const { worker } = props;
  return (
    <>
      <Head>
        <title>Home | Hire Job</title>
      </Head>
      <main className={style.home}>
        <Navbar />
        <div className={style.content}>
          <section id="head-title" className={style.headTitle}>
            <div className="container">
              <h4>Top Jobs</h4>
            </div>
          </section>

          <section id="search-box" className="mt-5 mb-4">
            <div className="container">
              <SearchBox />
            </div>
          </section>

          <section id="card-worker" className="mb-5">
            <div className="container">
              <CardListWorker jobseekers={worker.rows} />
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const connect = await axios.get(
    `${process.env.NEXT_PUBLIC_WEBSITE}/api/recruiter/getListWorker`
  );
  const data = connect?.data;

  return {
    props: {
      worker: data,
    },
  };
}

export default home;
