import React from "react";

function badgeSkill(props) {
  const { skills } = props;
  const length = skills.length;
  const skill = skills.slice(0, 4).map((item, key) => {
    return key !== 3 ? (
      <span key={key} class="badge bg-warning p-2 w-auto me-1">
        {item}
      </span>
    ) : (
      <span key={key} class="badge bg-warning p-2 w-auto me-1">
        {`+${length - 3}`}
      </span>
    );
  });

  return skill;
}

export default badgeSkill;
