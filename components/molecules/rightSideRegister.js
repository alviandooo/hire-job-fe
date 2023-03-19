import React from "react";
import style from "../../styles/components/rightSideRegisterStyle.module.scss";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

function RightSideRegister() {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const router = useRouter();

  const regist = async () => {
    setIsLoading(true);
    try {
      setIsError(false);
      const validationPassword = confirmPassword === password;
      if (validationPassword) {
        setIsError(false);
        const data = {
          fullname,
          email,
          company,
          position,
          phone_number: phone,
          password,
        };
        const registerUser = await axios.post(
          "/api/recruiter/auth/register",
          data
        );
        setIsSuccess(true);
        router.replace("/auth/login");
      } else {
        setIsSuccess(false);
        setIsError(true);
        setErrorMsg("Password doesn't match, please try again");
      }
      setIsLoading(false);
    } catch (error) {
      setIsSuccess(false);
      setIsError(true);
      setErrorMsg(error?.response?.data);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className={`col-lg-6 col-12 ${style.rightSide}`}>
        <div className="p-5">
          <div className="mb-4">
            <h1>Halo Pewpeople</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>

          {isError || isSuccess ? (
            <div
              className={`alert ${
                isError ? "alert-danger" : isSuccess ? "alert-success" : ""
              }`}
              role="alert"
            >
              {isError
                ? errorMsg
                : isSuccess
                ? "Register is successfully!"
                : null}
            </div>
          ) : (
            ""
          )}

          <div>
            <div className="form-group">
              <label htmlFor="">Nama</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama lengkap"
                onChange={(event) => setFullname(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan alamat email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Perusahaan</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama perusahaan"
                onChange={(event) => setCompany(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Jabatan</label>
              <input
                type="text"
                className="form-control"
                placeholder="Posisi di perusahaan anda"
                onChange={(event) => setPosition(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">No Handphone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan no handphone"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Kata Sandi</label>
              <input
                type="password"
                className="form-control"
                placeholder="Masukkan kata sandi"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Konfirmasi Kata Sandi</label>
              <input
                type="password"
                className="form-control"
                placeholder="Masukkan konfirmasi kata sandi"
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
          </div>

          <div className="text-center">
            <button
              disabled={isLoading ? true : false}
              className={`btn w-100 mt-5 ${style.btnRegister}`}
              onClick={() => regist()}
            >
              {isLoading ? "Loading..." : "Daftar"}
            </button>

            <p className="mt-3">
              Anda sudah punya akun?
              <Link href="/auth/login" className={style.noUnderline}>
                <span className={style.linkLogin}> Masuk disini</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSideRegister;
