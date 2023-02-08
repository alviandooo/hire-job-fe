import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import style from "../../styles/components/leftSideAuthStyle.module.scss";

function LeftSideAuth() {
  const router = useRouter();
  const auth = useSelector((state) => state?.auth);

  React.useEffect(() => {
    if (auth?.auth) {
      const role = auth?.auth?.recruiter_id !== 0 ? "recruiter" : "jobseeker";
      router.replace(`/${role}/home`);
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

          <div className="d-flex h-100 justifiy-content-center align-items-center">
            <div className="col-lg-9 ps-5 pe-2">
              <h1 className={style.title}>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSideAuth;
