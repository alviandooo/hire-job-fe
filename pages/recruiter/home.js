import Head from "next/head";
import React from "react";
import style from "../../styles/pages/recruiter/homeStyle.module.scss";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import SearchBox from "@/components/molecules/searchBoxRecruiter";
import CardListWorker from "@/components/molecules/cardListWorker";

function home() {
  const worker = [
    {
      picture: "https://randomuser.me/api/portraits/men/70.jpg",
      fullname: "Restu",
      position: "web Developer",
      location: "Palembang",
      skills: ["HTML", "PHP", "JAVASCRIPT", "LARAVEL", "REACT JS"],
    },
    {
      picture: "https://randomuser.me/api/portraits/men/71.jpg",
      fullname: "Fachri",
      position: "Back-end Developer",
      location: "Jakarta",
      skills: ["HTML", "REACT JS", "JAVASCRIPT", "LARAVEL"],
    },
    {
      picture: "https://randomuser.me/api/portraits/men/72.jpg",
      fullname: "Fiqri",
      position: "DevOps",
      location: "Jambi",
      skills: ["HTML", "GITHUB", "DOCKER", "LARAVEL"],
    },
    {
      picture: "https://randomuser.me/api/portraits/men/73.jpg",
      fullname: "Ali",
      position: "Front-end Developer",
      location: "Jakarta",
      skills: ["HTML", "CSS", "JAVASCRIPT", "LARAVEL"],
    },
    {
      picture: "https://randomuser.me/api/portraits/men/74.jpg",
      fullname: "Eko",
      position: "web Designer",
      location: "Palembang",
      skills: ["HTML", "FIGMA"],
    },
  ];

  // React.useEffect(() => {
  //   const auth = JSON.parse(localStorage.getItem("auth"));
  //   console.log(auth);
  // }, []);

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
              <CardListWorker data={worker} />
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default home;
