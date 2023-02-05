import React from "react";
import style from "../../../styles/pages/recruiter/detailJobseeker.module.scss";
import Navbar from "../../../components/organisms/navbar";
import Footer from "../../../components/organisms/footer";
import Head from "next/head";
import BadgeSkill from "../../../components/atoms/badgeSkill";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { SiInstagram } from "react-icons/si";
import { FiGithub, FiGitlab } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/router";

function Jobseeker(props) {
  const { data } = props.data;
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

  const router = useRouter();

  const [tab, setTab] = React.useState(1);

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
              <div className="col-lg-3 mb-3">
                <div className="rounded bg-white p-4">
                  <div className="d-flex justify-content-center">
                    <img
                      src={data?.[0]?.user?.photo_profile}
                      width={"100px"}
                      alt=""
                      className="rounded-circle object-fit-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <h5>{data?.[0]?.user?.fullname.toUpperCase()}</h5>
                    <p>{data?.[0]?.job}</p>
                    <p className="mt-0">
                      <span className="me-1">
                        <CiLocationOn />
                      </span>
                      {data?.[0]?.domicile}
                    </p>
                    <p className="text-secondary">Freelancer</p>
                    <p className="text-secondary">{data?.[0]?.description}</p>
                  </div>
                  <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={() =>
                      router.replace(`/recruiter/hire/${data?.[0].user_id}`)
                    }
                  >
                    Hire
                  </button>

                  <div className="mt-5 mb-3">
                    <h5>Skill</h5>
                  </div>

                  <div>
                    <BadgeSkill
                      skills={["PHP", "Javascript", "Ruby", "postgres"]}
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
                    <button
                      className={`btn bg-transparent rounded-0 ${
                        tab ? "border-4 border-bottom" : ""
                      }`}
                      onClick={() => {
                        setTab(1);
                      }}
                    >
                      Portofolio
                    </button>
                    <button
                      className={`btn bg-transparent rounded-0 ${
                        !tab ? "border-4 border-bottom" : ""
                      }`}
                      onClick={() => setTab(0)}
                    >
                      Pengalaman Kerja
                    </button>
                  </div>

                  <div
                    className={`portfolio mt-5 ${tab ? "d-block" : "d-none"}`}
                  >
                    <div className="row">
                      {portfolio.map((item, key) => {
                        return (
                          <div key={key} className="col-lg-4 text-center mb-4">
                            <img
                              src={item.img}
                              className="w-100 "
                              alt="portfolio-image"
                              height={"200px"}
                            />
                            <p className="mt-2">{item.app}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div
                    className={`experience mt-5 ${tab ? "d-none" : "d-block"}`}
                  >
                    {experiences.map((item, key) => {
                      return (
                        <div key={key} className="row mb-2">
                          <div className="col-lg-2">
                            <img
                              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/36c1015e.png"
                              alt="company-logo"
                              className="object-fit-cover"
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

export async function getServerSideProps({ req, res, query }) {
  const { jobseekerId } = query;
  const connect = await axios.get(
    `${process.env.NEXT_PUBLIC_WEBSITE}/api/recruiter/detailJobseeker?id=${jobseekerId}`
  );
  const data = connect?.data;

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Jobseeker;
