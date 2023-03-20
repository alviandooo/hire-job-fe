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
import { useSelector } from "react-redux";
import { RiDeleteBin2Line } from "react-icons/ri";

function Jobseeker(props) {
  const { data } = props.data;
  const skills = JSON.parse(data?.[0]?.skills);
  const portfolio = data?.[0]?.portfolios;
  const experiences = data?.[0]?.work_experiences;
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  // console.log(auth?.isRecruiter);
  const [isEdit, setIsEdit] = React.useState(false);
  const [tab, setTab] = React.useState(1);
  const [newSkills, setNewSkills] = React.useState([]);
  const [skillValue, setSkillValue] = React.useState("");

  React.useEffect(() => {
    if (skills.length !== 0) {
      setNewSkills(skills);
    }
  }, []);

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

                  {auth?.isRecruiter ? (
                    <button
                      className={`btn btn-primary w-100 mt-3 ${style.btnPrimary}`}
                      onClick={() =>
                        router.push(`/recruiter/hire/${data?.[0].id}`)
                      }
                    >
                      Hire
                    </button>
                  ) : (
                    <></>
                  )}

                  {data?.[0]?.id === auth?.auth?.user_id ? (
                    <>
                      <button
                        className={`btn btn-warning w-100 mt-3 ${
                          isEdit ? "d-none" : "d-block"
                        }`}
                        onClick={() => setIsEdit(true)}
                      >
                        Edit
                      </button>
                    </>
                  ) : (
                    <></>
                  )}

                  <div className="mt-5 mb-3">
                    <h5>Skill</h5>
                  </div>

                  <div>
                    {skills.length > 0 ? (
                      <BadgeSkill skills={skills} />
                    ) : (
                      "Add your skill"
                    )}
                  </div>

                  {!isEdit ? (
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
                  ) : (
                    <>
                      <button
                        className={`btn btn-warning w-100 mt-5 ${style.btnPrimary}`}
                        onClick={() => setIsEdit(false)}
                      >
                        Simpan Perubahan
                      </button>
                      <button
                        className={`btn btn-warning w-100 mt-3 ${style.btnSecondary}`}
                        onClick={() => setIsEdit(false)}
                      >
                        Batal
                      </button>
                    </>
                  )}
                </div>
              </div>

              {!isEdit ? (
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
                                className="w-100 bg-secondary rounded "
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
                      className={`experience mt-5 ${
                        tab ? "d-none" : "d-block"
                      }`}
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
              ) : (
                <div className="col-lg-9">
                  <div className="card bg-white rounded">
                    <div className="card-header d-flex align-items-center pt-4 pb-3">
                      <h5>Data Diri</h5>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Nama Lengkap</label>
                        <input
                          className="form-control"
                          placeholder="Masukan nama lengkap"
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Job desk</label>
                        <input
                          className="form-control"
                          placeholder="Masukan job desk"
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Domisili</label>
                        <input
                          className="form-control"
                          placeholder="Masukan domisili"
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Tempat kerja</label>
                        <input
                          className="form-control"
                          placeholder="Masukan tempat kerja"
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Deskripsi singkat</label>
                        <textarea
                          className="form-control"
                          rows={"4"}
                          placeholder="Deskripsi singkat"
                        />
                      </div>
                    </div>
                  </div>

                  {/* // input skill */}
                  <div className="card bg-white rounded mt-4">
                    <div className="card-header d-flex align-items-center pt-4 pb-3">
                      <h5>Skill</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-10 col-12">
                          <input
                            className="form-control"
                            placeholder="Type your skill..."
                            value={skillValue}
                            onChange={(e) => {
                              setSkillValue(e.target.value);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                setNewSkills((state) => [...state, skillValue]);
                                setSkillValue("");
                              }
                            }}
                          />
                          <small>*press enter for new skill</small>

                          <div className="mt-2">
                            {newSkills.length > 0 &&
                              newSkills.map((skill, _key) => {
                                return (
                                  <>
                                    <span
                                      key={_key}
                                      className="badge bg-warning text-black me-1 p-2 mb-2"
                                    >
                                      {skill}

                                      <button
                                        type="button"
                                        class="btn-close btn-close-black ms-1"
                                        aria-label="Close"
                                        onClick={() => {
                                          console.log(newSkills[_key]);
                                          newSkills.splice(_key, 1);
                                          setNewSkills(newSkills);
                                        }}
                                      ></button>
                                    </span>
                                  </>
                                );
                              })}
                          </div>
                        </div>
                        <div className="col-lg-2 col-12">
                          <button className="btn btn-warning w-100">
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-white rounded mt-4">
                    <div className="card-header d-flex align-items-center pt-4 pb-3">
                      <h5>Pengalaman Kerja</h5>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Posisi</label>
                        <input
                          className="form-control"
                          placeholder="Web Developer"
                        />
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-6 col-12 mb-2">
                          <label>Nama Perusahaan</label>
                          <input
                            className="form-control"
                            placeholder="PT Harus bisa"
                          />
                        </div>
                        <div className="col-lg-6 col-12">
                          <label>Bulan/tahun</label>
                          <input
                            className="form-control"
                            type={"month"}
                            placeholder="2023-02"
                          />
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <label>Deskripsi singkat</label>
                        <textarea
                          className="form-control"
                          rows={"4"}
                          placeholder="Deskripsikan pekerjaan anda"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
