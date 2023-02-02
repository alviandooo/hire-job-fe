import React from "react";

function badgeSkill(props) {
  const { skills, isAll = false } = props;
  const length = skills.length;
  const dataSkill = [];

  if (!isAll) {
    return skills.map((item, key) => {
      return (
        <span key={key} class="badge bg-warning p-2 w-auto me-1 mb-2">
          {item}
        </span>
      );
    });
  } else {
    return skills.slice(0, 4).map((item, key) => {
      return key !== 3 ? (
        <span key={key} class="badge bg-warning p-2 w-auto me-1 mb-2">
          {item}
        </span>
      ) : (
        <span key={key} class="badge bg-warning p-2 w-auto me-1 mb-2">
          {`+${length - 3}`}
        </span>
      );
    });
  }
}

export default badgeSkill;
