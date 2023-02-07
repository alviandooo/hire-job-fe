import { useRouter } from "next/router";
import React from "react";
import { BsBell } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import style from "../../styles/components/navbarStyle.module.scss";
import Script from "next/script";
import { useSelector } from "react-redux";

function Navbar() {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (!auth?.auth) {
      router.replace("/auth/login");
    }
  }, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></Script>
      <nav
        className={`navbar col-lg-12 col-12 navbar-expand-lg ${style.navbarApp}`}
      >
        <div className="container">
          <button
            className="navbar-brand border-0 bg-transparent"
            onClick={() => router.replace("/recruiter/home")}
          >
            <img
              src="/images/logo-color-primary.png"
              className={style.logo}
              alt="logo-navbar"
            />
          </button>
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
              <div className="dropdown">
                <button
                  className="btn btn-transparent dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={auth?.photo_profile}
                    className={style.iconProfileNavbar}
                    alt="icon-profile-navbar"
                  />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        localStorage.clear();
                        router.replace("/auth/login");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
