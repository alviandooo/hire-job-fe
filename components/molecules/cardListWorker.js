import React from "react";
import { CiLocationOn } from "react-icons/ci";
import BadgeSkill from "../atoms/badgeSkill";
import style from "../../styles/components/cardListWorkerStyle.module.scss";
import { useRouter } from "next/router";

function CardListWorker(props) {
  const route = useRouter();
  const { jobseekers, keyword } = props;
  if (jobseekers?.length > 0) {
    return jobseekers.map((item, key) => {
      return (
        <div key={key} className="row bg-white rounded pt-3 pb-3 mt-1">
          <div className="col-lg-1 pt-2 d-flex justify-content-center">
            <img
              src={item?.["user.photo_profile"]}
              width={"100px"}
              height={"100px"}
              alt="profile-worker"
              className="rounded-circle object-fit-cover"
            />
          </div>
          <div className="col-lg-9">
            <h5>{item?.["user.fullname"]}</h5>
            <p className="mb-1">{item?.job}</p>
            <p className="mb-2">
              <span className="me-1">
                <CiLocationOn />
              </span>
              {item?.domicile}
            </p>
            <div>
              <BadgeSkill skills={item?.skills} />
            </div>
          </div>
          <div className="col-lg-2 d-flex align-items-center">
            <button
              className={`btn btn-warning btn-detail text-white ${style.btnDetailWorker}`}
              onClick={() => {
                route.replace(`/recruiter/detail/${item.user_id}`);
              }}
            >
              Lihat Profile
            </button>
          </div>
        </div>
      );
    });
  } else {
    return (
      <>
        <div className="w-100 text-center p-2 rounded">
          <p>Searching for &quot;{keyword}&quot; is nothing! </p>
        </div>
        ;
      </>
    );
  }
}

export default CardListWorker;
