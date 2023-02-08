import Head from "next/head";
import React from "react";
import style from "../../styles/pages/recruiter/homeStyle.module.scss";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import SearchBox from "../../components/molecules/searchBoxRecruiter";
import CardListWorker from "../../components/molecules/cardListWorker";
import axios from "axios";
import styleSearch from "../../styles/components/searchBoxRecruiterStyle.module.scss";
import { BiSearch } from "react-icons/bi";

function Home(props) {
  let { worker } = props;
  const [keyword, setKeyword] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [isLoading, setIsLoading] = React.useState(false);
  const [totalPage, setTotalPage] = React.useState(
    Math.ceil(worker.count / limit) ?? worker.count / limit
  );
  const [sort, setSort] = React.useState(["id", "DESC"]);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `/api/recruiter/search?limit=${limit}&page=${currentPage}&keyword=${keyword}&order=${sort[1]}&sortBy=${sort[0]}`
      )
      .then(({ data }) => {
        setIsLoading(false);
        worker.rows = data?.rows;

        setTotalPage(Math.ceil(data?.count / data?.limit));
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [sort, currentPage]);

  // const fetchPaginationRecipes = (positionPage) => {
  //   setIsLoading(true);
  //   axios
  //     .get(
  //       `/api/recruiter/search?limit=${limit}&page=${positionPage}&keyword=${keyword}&order=${sort[1]}&sortBy=${sort[0]}`
  //     )
  //     .then(({ data }) => {
  //       setIsLoading(false);
  //       worker.rows = data?.rows;

  //       setTotalPage(Math.ceil(data?.count / data?.limit));
  //       setCurrentPage(positionPage);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //     });
  // };

  const handlerSearch = () => {
    setIsLoading(true);
    try {
      axios
        .get(
          `/api/recruiter/search?limit=${limit}&page=${currentPage}&keyword=${keyword}&order=${sort[1]}&sortBy=${sort[0]}`
        )
        .then((res) => {
          setIsLoading(false);
          worker.rows = res?.data?.rows;
        })
        .catch((err) => {
          setIsLoading(false);
          console.log("error : ", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Home | Hire Job</title>
      </Head>
      <main className={style.home}>
        <Navbar />
        <div className={style.content}>
          <section id="head-title" className={style.headTitle}>
            <div className="container">
              <h4>Top Jobs</h4>
            </div>
          </section>

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

          <section id="card-worker" className="mb-5 ms-1 me-1">
            <div className="container">
              {isLoading ? (
                <div className="text-center">
                  <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <CardListWorker jobseekers={worker?.rows} keyword={keyword} />
              )}

              {worker?.count > 0 ? (
                <>
                  <div className="container d-flex justify-content-center">
                    <nav aria-label="Page navigation example" className="mt-4">
                      <ul className="pagination gap-2">
                        <li
                          className={`${style.pageItem} page-item ${
                            currentPage === 1 ? "disabled" : ""
                          }`}
                        >
                          <a
                            className="page-link"
                            onClick={() => {
                              setCurrentPage(currentPage - 1);
                              // fetchPaginationRecipes(currentPage - 1);
                            }}
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>

                        {[...new Array(parseInt(totalPage))].map(
                          (item, page) => {
                            page++;
                            return (
                              <li
                                key={page}
                                className={`${style.pageItem} page-item`}
                              >
                                <div
                                  className={`page-link text-black ${
                                    currentPage === page
                                      ? `${style.activePage}`
                                      : null
                                  }`}
                                  onClick={() => {
                                    if (currentPage !== page) {
                                      setCurrentPage(page);
                                      // fetchPaginationRecipes(page);
                                    }
                                  }}
                                >
                                  {page}
                                </div>
                              </li>
                            );
                          }
                        )}
                        <li
                          className={`${style.pageItem} page-item ${
                            currentPage === totalPage ? "disabled" : ""
                          }`}
                        >
                          <div
                            className="page-link"
                            onClick={() => {
                              setCurrentPage(currentPage + 1);
                              // fetchPaginationRecipes(currentPage + 1);
                            }}
                            aria-label="Next"
                          >
                            <span aria-hidden="true">&raquo;</span>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const connect = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=1&order=DESC&sortBy=id`
  );
  const data = connect?.data?.data;
  return {
    props: {
      worker: data,
    },
  };
}

export default Home;
