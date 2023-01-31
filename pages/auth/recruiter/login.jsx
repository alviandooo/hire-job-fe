import React from "react";
import style from "../../../styles/pages/loginStyle.module.scss";

function login() {
  return (
    <>
      <div className={`row ${style.home}`}>
        <div className={`col-lg-6 col-12 ${style.leftSide}`}>
          <div className={`${style.overlayBackground}`}>
            <img
              src="/images/logo-app.png"
              alt="logo-app"
              className={style.logo}
            />
            <h1 className={style.title}>
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </h1>
          </div>
        </div>

        <div className={`col-lg-6 col-12 ${style.rightSide}`}>
          <div className="p-5">
            <div className="mb-5">
              <h1>Halo Pewpeople</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
            </div>

            <div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan alamat email"
                />
              </div>

              <div className="form-group mt-4">
                <label htmlFor="">Kata Sandi</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan kata sandi"
                />
              </div>
            </div>

            <div className="text-center">
              <button className={`btn w-100 mt-5 ${style.btnMasuk}`}>
                Masuk
              </button>

              <p className="mt-3">
                Anda belum punya akun?{" "}
                <a href="#" className={style.linkRegister}>
                  Daftar disini
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
