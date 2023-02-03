import React from "react";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import Head from "next/head";
import axios from "axios";
import style from "../../../styles/pages/recruiter/hireStyle.module.scss";
import BadgeSkill from "@/components/atoms/badgeSkill";
import { CiLocationOn } from "react-icons/ci";
import { useRouter } from "next/router";

function hire(props) {
  const { data } = props.data;
  const router = useRouter();
  const [isHire, setIsHire] = React.useState(false);

  const handleHire = () => {
    setIsHire(true);
    setTimeout(() => {
      router.replace("/recruiter/home");
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Hire Jobseeker | Hire Job</title>
      </Head>
      <main className={style.hire}>
        <Navbar />
        <div className={style.content}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 mb-5">
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

                  <div className="mt-4 mb-3">
                    <h5>Skill</h5>
                  </div>

                  <div>
                    <BadgeSkill
                      skills={["PHP", "Javascript", "Ruby", "postgres"]}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-9 ps-lg-5">
                <div className="col-lg-7 ps-lg-5">
                  <div>
                    <h3>Hubungi {data?.[0]?.user?.fullname.toUpperCase()}</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In euismod ipsum et dui rhoncus auctor.
                    </p>
                  </div>

                  {isHire ? (
                    <div className={`alert alert-success`} role="alert">
                      Successfully hire the jobseeker!
                    </div>
                  ) : (
                    ""
                  )}

                  <div className={style.form}>
                    <div className="form-group mt-2">
                      <label>Tujuan tentang pesan ini</label>
                      <select name="" className="form-control" id="">
                        <option value="">Projek</option>
                      </select>
                    </div>

                    <div className="form-group mt-2">
                      <label htmlFor="">Nama Lengkap</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukan nama lengkap"
                      />
                    </div>

                    <div className="form-group mt-2">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukan email"
                      />
                    </div>

                    <div className="form-group mt-2">
                      <label htmlFor="">No Handphone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukan No Handphone"
                      />
                    </div>

                    <div className="form-group mt-2">
                      <label htmlFor="">Deskripsi</label>
                      <textarea
                        name=""
                        id=""
                        className="form-control"
                        cols="30"
                        rows="8"
                        placeholder="Deskripsikan/jelaskan lebih detail "
                      ></textarea>
                    </div>

                    <div>
                      <button
                        className="btn btn-warning btn-lg text-white w-100 mt-4"
                        onClick={() => handleHire()}
                      >
                        Hire
                      </button>
                    </div>
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

export default hire;
