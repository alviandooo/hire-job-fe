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
  console.log(data);
  const portfolio = data?.[0]?.portfolios;
  const experiences = data?.[0]?.work_experiences;
  console.log(experiences);
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
                      {portfolio?.map((item, key) => {
                        return (
                          <div
                            key={item?.id}
                            className="col-lg-4 text-center mb-4"
                          >
                            <img
                              src={item?.photo}
                              className="w-100 "
                              alt="portfolio-image"
                              height={"200px"}
                            />
                            <p className="mt-2">{item?.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div
                    className={`experience mt-5 ${tab ? "d-none" : "d-block"}`}
                  >
                    {experiences?.map((item, key) => {
                      return (
                        <div key={item?.id} className="row mb-2">
                          <div className="col-lg-2">
                            <img
                              src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/36c1015e.png"
                              alt="company-logo"
                              className="object-fit-cover"
                              height={"170px"}
                            />
                          </div>
                          <div className="col-lg-10">
                            <h5>{item?.position}</h5>
                            <h6>{item?.company}</h6>

                            <p>{item?.date}</p>
                            <p>{item?.description}</p>
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
    `${process.env.NEXT_PUBLIC_API_URL}/v1/user/detail/${jobseekerId}`
  );
  const data = connect?.data;

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Jobseeker;
