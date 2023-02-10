import React from "react";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import Head from "next/head";
import axios from "axios";
import style from "../../../styles/pages/recruiter/hireStyle.module.scss";
import BadgeSkill from "@/components/atoms/badgeSkill";
import { CiLocationOn } from "react-icons/ci";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Hire(props) {
  const { data } = props.data;
  const auth = useSelector((state) => state?.auth);
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [purpose, setPurpose] = React.useState("Projek");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  // const recruiterId = auth?.auth?.id;
  const userId = data?.[0]?.id;
  const token = auth?.token;

  const HandleHire = async () => {
    setIsError(false);
    setIsSuccess(false);
    setIsLoading(true);
    try {
      const data = {
        user_id: userId,
        purpose,
        fullname: name,
        email,
        phone_number: phone,
        description,
        token,
      };
      const hire = await axios.post("/api/recruiter/hire", data);
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(true);
      router.replace("/recruiter/home");
    } catch (error) {
      setIsSuccess(false);
      setIsError(true);
      setErrorMsg(error?.response?.data);
      setIsLoading(false);
    }
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
                <div className="col-lg-10 ps-lg-5">
                  <div>
                    <h3>Hubungi {data?.[0]?.user?.fullname.toUpperCase()}</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In euismod ipsum et dui rhoncus auctor.
                    </p>
                  </div>

                  {isError || isSuccess ? (
                    <div
                      className={`alert ${
                        isError
                          ? "alert-danger"
                          : isSuccess
                          ? "alert-success"
                          : ""
                      }`}
                      role="alert"
                    >
                      {isError
                        ? errorMsg
                        : isSuccess
                        ? "Hiring is successfully!"
                        : null}
                    </div>
                  ) : (
                    ""
                  )}

                  <div className={style.form}>
                    <div className="form-group mt-2">
                      <label>Tujuan tentang pesan ini</label>
                      <select
                        name=""
                        className="form-control"
                        id=""
                        onChange={(event) => setPurpose(event.target.value)}
                      >
                        <option value="Projek">Projek</option>
                      </select>
                    </div>

                    <div className="form-group mt-2">
                      <label htmlFor="">Nama Lengkap</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukan nama lengkap"
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>

                    <div className="form-group mt-2">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukan email"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>

                    <div className="form-group mt-2">
                      <label htmlFor="">No Handphone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukan No Handphone"
                        onChange={(event) => setPhone(event.target.value)}
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
                        onChange={(event) => setDescription(event.target.value)}
                      ></textarea>
                    </div>

                    <div>
                      <button
                        disabled={isLoading ? true : false}
                        className="btn btn-warning btn-lg text-white w-100 mt-4"
                        onClick={() => HandleHire()}
                      >
                        {isLoading ? "Loading..." : "Hire"}
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
    `${process.env.NEXT_PUBLIC_API_URL}/v1/user/detail/${jobseekerId}`
  );
  const data = connect?.data;

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Hire;
