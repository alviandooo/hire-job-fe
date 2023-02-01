import React from "react";
import style from "../../styles/components/searchBoxRecruiterStyle.module.scss";
import { BiSearch } from "react-icons/bi";

function searchBoxRecruiter() {
  return (
    <>
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
    </>
  );
}

export default searchBoxRecruiter;
