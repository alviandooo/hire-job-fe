import React from "react";
import { BsBell } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import style from "../../styles/components/navbarStyle.module.scss";

function navbar() {
  const [auth, setAuth] = React.useState("");

  React.useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
      <nav
        className={`navbar col-lg-12 col-12 navbar-expand-lg ${style.navbarApp}`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/images/logo-color-primary.png"
              className={style.logo}
              alt="logo-navbar"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-recruiter"
            aria-controls="navbar-recruiter"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-recruiter">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div
              className={`w-100 d-flex justify-content-end align-items-center gap-4 ${style.navlinkGroup}`}
            >
              <BsBell className={` ${style.navlinkIcon}`} />
              <HiOutlineMail className={style.navlinkIcon} />
              <img
                src={auth.photo_profile}
                className={style.iconProfileNavbar}
                alt="icon-profile-navbar"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
