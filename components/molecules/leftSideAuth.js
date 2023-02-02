import React from "react";
import style from "../../styles/components/leftSideAuthStyle.module.scss";

function leftSideAuth() {
  return (
    <>
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
    </>
  );
}

export default leftSideAuth;