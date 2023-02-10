import React from "react";
import style from "../../styles/components/searchBoxRecruiterStyle.module.scss";
import { BiSearch } from "react-icons/bi";

function SearchBoxRecruiter() {
  const [keyword, setKeyword] = React.useState("");

  const handlerSearch = () => {
    localStorage.setItem("keyword", keyword);
  };

  return (
    <>
      {/* <div className="row bg-white rounded p-1">
        <div className="col-lg-9 p-0 border-end d-flex">
          <div class="input-group border-0">
            <input
              type="text"
              class="form-control border-0"
              placeholder="Search for any skill"
              onChange={(event) => {
                setKeyword(event.target.value);
              }}
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
          <button
            className="bg-transparent text-white border-0"
            onClick={() => handlerSearch()}
          >
            Search
          </button>
        </div>
      </div> */}
      <section id="search-box" className="mt-5 mb-4 ms-1 me-1">
        <div className="container">
          {/* <SearchBox /> */}
          <div className="row bg-white rounded p-1">
            {/* <h3>{sort}</h3> */}
            <div className="col-lg-9 p-0 border-end d-flex">
              <div className="input-group border-0">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search for any skill"
                  onChange={(event) => {
                    setKeyword(event.target.value);
                  }}
                />
                <span className="input-group-text border-0 bg-transparent">
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
                Sort by {`${sort[0]} ${sort[1].toLowerCase()}`}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      setSort((state) => ["id", "DESC"]);
                      handlerSearch();
                    }}
                  >
                    Sort by (default)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item "
                    onClick={() => {
                      setSort((state) => ["skill", "ASC"]);
                      handlerSearch();
                    }}
                  >
                    Skill (a-z)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      setSort((state) => ["skill", "DESC"]);
                      handlerSearch();
                    }}
                  >
                    Skill (z-a)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      setSort((state) => ["id", "ASC"]);
                      handlerSearch();
                    }}
                  >
                    Oldest
                  </button>
                </li>
              </ul>
            </div>
            <div
              className={`col-lg-1 pt-2 pb-2 text-center text-white rounded ${styleSearch.btnSearch}`}
            >
              <button
                className="bg-transparent text-white border-0"
                onClick={() => handlerSearch()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBoxRecruiter;
