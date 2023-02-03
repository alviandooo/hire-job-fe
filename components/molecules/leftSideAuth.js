import { useRouter } from "next/router";
import React from "react";
import style from "../../styles/components/leftSideAuthStyle.module.scss";

function leftSideAuth() {
  const router = useRouter();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== "") {
      router.replace("/recruiter/home");
    }
  }, []);

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
