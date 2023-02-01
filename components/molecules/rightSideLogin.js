import React from "react";
import style from "../../styles/components/rightSideLoginStyle.module.scss";
import Link from "next/link";

function rightSideLogin() {
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
            <button className={`btn w-100 mt-5 ${style.btnLogin}`}>
              Masuk
            </button>

            <p className="mt-3">
              Anda belum punya akun?
              <Link
                href="/auth/recruiter/register"
                className={style.noUnderline}
              >
                <span className={style.linkRegister}> Daftar disini</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default rightSideLogin;
