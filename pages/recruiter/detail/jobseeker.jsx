import React from "react";
import style from "../../../styles/pages/recruiter/detailJobseeker.module.scss";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import Head from "next/head";
import BadgeSkill from "@/components/atoms/badgeSkill";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { SiInstagram } from "react-icons/si";
import { FiGithub, FiGitlab } from "react-icons/fi";

function jobseeker() {
  const portfolio = [
    {
      img: "/images/portfolio/remainder.jpg",
      app: "Remainder App",
    },
    {
      img: "/images/portfolio/social-media.jpg",
      app: "Social Media App",
    },
    {
      img: "/images/portfolio/management.jpg",
      app: "Project Management Web",
    },
    {
      img: "/images/portfolio/remainder-2.jpg",
      app: "Remainder App",
    },
    {
      img: "/images/portfolio/social-media-2.jpg",
      app: "Social Media App",
    },
    {
      img: "/images/portfolio/management-2.jpg",
      app: "Project Management Web",
    },
  ];

  const experiences = [
    {
      position: "Engineer",
      company: "Tokopedia",
      start: "July 2019",
      end: "January 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
    },
    {
      position: "Web Developer",
      company: "Tokopedia",
      start: "July 2019",
      end: "January 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
    },
  ];

  return (
    <>
      <Head>
        <title>Profile Jobseeker | Hire Job</title>
      </Head>
      <main className={style.detailJobseeker}>
        <Navbar />
        <div className={style.content}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="rounded bg-white p-4">
                  <div className="d-flex justify-content-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                      width={"100px"}
                      alt=""
                      className="rounded-circle"
                    />
                  </div>
                  <div className="mt-3">
                    <h5>Louis Tomlinson</h5>
                    <p>Web Developer</p>
                    <p className="mt-0">
                      <span className="me-1">
                        <CiLocationOn />
                      </span>
                      Palembang, Sumatera Selatan
                    </p>
                    <p>Freelancer</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum erat orci, mollis nec gravida sed, ornare quis
                      urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </p>
                  </div>
                  <button className="btn btn-primary w-100 mt-3">Hire</button>

                  <div className="mt-5 mb-3">
                    <h5>Skill</h5>
                  </div>

                  <div>
                    <BadgeSkill
                      skills={["PHP", "AWS", "JAVASCRIPT", "CSS", "HTML"]}
                    />
                  </div>

                  <div className="mt-5">
                    <p className="d-flex align-items-center">
                      <HiOutlineMail size={"16pt"} className="me-3" />
                      <span>Louistommo@gmail.com</span>
                    </p>
                    <p className="d-flex align-items-center">
                      <SiInstagram size={"14pt"} className="me-3" />
                      <span>@Louist91</span>
                    </p>
                    <p className="d-flex align-items-center">
                      <FiGithub size={"15pt"} className="me-3" />
                      <span>@Louistommo</span>
                    </p>
                    <p className="d-flex align-items-center">
                      <FiGitlab size={"15pt"} className="me-3" />
                      <span>@Louistommo91</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="bg-white rounded p-4">
                  <div className="menu-profile">
                    <button className="btn bg-transparent">Portofolio</button>
                    <button className="btn bg-transparent">
                      Pengalaman Kerja
                    </button>
                  </div>

                  <div className="portfolio mt-5">
                    <div className="row">
                      {portfolio.map((item, key) => {
                        return (
                          <div key={key} className="col-lg-4 text-center mb-4">
                            <img
                              src={item.img}
                              className="w-100"
                              alt="portfolio-image"
                              height={"200px"}
                            />
                            <p className="mt-2">{item.app}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="experience mt-5">
                    {experiences.map((item, key) => {
                      return (
                        <div key={key} className="row mb-2">
                          <div className="col-lg-2">
                            <img
                              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/36c1015e.png"
                              alt="company-logo"
                              className="w-100"
                              height={"170px"}
                            />
                          </div>
                          <div className="col-lg-10">
                            <h5>Engineer</h5>
                            <h6>Tokopedia</h6>

                            <p>July 2019 - January 2020</p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vestibulum erat orci, mollis nec gravida
                              sed, ornare quis urna. Curabitur eu lacus
                              fringilla, vestibulum risus at.
                            </p>
                            <hr />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default jobseeker;
