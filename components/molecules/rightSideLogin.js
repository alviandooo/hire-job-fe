import React from "react";
import style from "../../styles/components/rightSideLoginStyle.module.scss";
import * as authReducer from "@/store/auth/authSlice";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

function RightSideLogin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const submitLogin = async () => {
    setIsLoading(true);
    try {
      setIsError(false);
      const connect = await axios.post("/api/recruiter/auth/login", {
        email,
        password,
      });

      // const auth = JSON.stringify(connect?.data?.data);
      // const token = connect?.data?.token;
      const isRecruiter = connect?.data?.data?.recruiter_id !== 0;
      dispatch(authReducer.setAuth(connect?.data?.data));
      dispatch(authReducer.setToken(connect?.data?.token));
      dispatch(authReducer.setIsRecruiter(isRecruiter));
      // localStorage.setItem("auth", auth);
      // localStorage.setItem("token", token);
      setIsSuccess(true);

      if (isRecruiter) {
        router.replace("/recruiter/home");
      } else {
        router.replace(`/jobseeker/detail/${connect?.data?.data?.user_id}`);
      }
    } catch (error) {
      console.log(error);
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
          <div className="mb-5">
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
              {isError ? errorMsg : isSuccess ? "Login is successfully!" : null}
            </div>
          ) : (
            ""
          )}

          <div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan alamat email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="">Kata Sandi</label>
              <input
                type="password"
                className="form-control"
                placeholder="Masukkan kata sandi"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>

          <div className="text-center">
            <button
              className={`btn w-100 mt-5 ${style.btnLogin}`}
              onClick={() => submitLogin()}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Loading..." : "Masuk"}
            </button>

            <p className="mt-3">
              Anda belum punya akun?
              <Link href="/" className={style.noUnderline}>
                <span className={style.linkRegister}> Daftar disini</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSideLogin;
