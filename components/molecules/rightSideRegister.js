import React from "react";
import style from "../../styles/components/rightSideRegisterStyle.module.scss";
import Link from "next/link";

function rightSideRegister() {
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

          <div>
            <div className="form-group">
              <label htmlFor="">Nama</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama lengkap"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan alamat email"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Perusahaan</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama perusahaan"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Jabatan</label>
              <input
                type="text"
                className="form-control"
                placeholder="Posisi di perusahaan anda"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">No Handphone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan no handphone"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Kata Sandi</label>
              <input
                type="password"
                className="form-control"
                placeholder="Masukkan kata sandi"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="">Konfirmasi Kata Sandi</label>
              <input
                type="password"
                className="form-control"
                placeholder="Masukkan konfirmasi kata sandi"
              />
            </div>
          </div>

          <div className="text-center">
            <button className={`btn w-100 mt-5 ${style.btnRegister}`}>
              Daftar
            </button>

            <p className="mt-3">
              Anda sudah punya akun?
              <Link href="/auth/recruiter/login" className={style.noUnderline}>
                <span className={style.linkLogin}> Masuk disini</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default rightSideRegister;
