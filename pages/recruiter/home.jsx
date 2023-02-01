import Head from "next/head";
import React from "react";
import style from "../../styles/pages/recruiter/homeStyle.module.scss";
import { BsBell } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

function home() {
  return (
    <>
      <Head>
        <title>Home | Hire Job</title>
      </Head>
      <main className={style.home}>
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
                  src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                  className={style.iconProfileNavbar}
                  alt="icon-profile-navbar"
                />
              </div>
            </div>
          </div>
        </nav>

        <div className={style.content}>
          <section id="head-title" className={style.headTitle}>
            <div className="container">
              <h4>Top Jobs</h4>
            </div>
          </section>

          <section id="search-box" className="mt-4 mb-4">
            <div className="container">
              <div className="row bg-white rounded p-1">
                <div className="col-lg-9 p-0 border-end d-flex ">
                  <div class="input-group border-0">
                    <input
                      type="text"
                      class="form-control border-0"
                      placeholder="Search for any skill"
                    />
                    <span class="input-group-text border-0 bg-transparent">
                      <BiSearch />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 p-0 text-center">
                  <button
                    className="dropdown-toggle w-100 h-100 border-0 bg-transparent"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort By
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className={`col-lg-1 pt-2 pb-2 text-center text-white rounded ${style.btnSearch}`}
                >
                  Search
                </div>
              </div>
            </div>
          </section>

          <section id="card-worker">
            <div className="container p-0">
              <div className="card">
                <div className="card-body"></div>
              </div>
            </div>
          </section>
        </div>

        <footer className={`col-lg-12 ${style.footer}`}>
          <div className="container">
            <img src="/images/logo-app.png" alt="" />
            <p className={style.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
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
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default home;
