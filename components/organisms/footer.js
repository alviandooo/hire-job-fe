import React from "react";
import style from "../../styles/components/footerStyle.module.scss";

function footer() {
  return (
    <>
      <footer className={`col-lg-12 ${style.footer}`}>
        <div className="container">
          <img src="/images/logo-app.png" alt="" />
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <hr />

          <div className="row">
            <div className="col-lg-10">
              <p className={style.copyright}>
                2023 Pewworld. All right reserved
              </p>
            </div>
            <div className="col-lg-1">
              <p className={style.footerLink}>Telepon</p>
            </div>
            <div className="col-lg-1 text-end">
              <p className={style.footerLink}>Email</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
