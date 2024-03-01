import React from "react";
import style from "../styles/css/EduAndAward.module.css";
const EduAndAward = ({ date, content, year, first, award }) => {
  return (
    <div className={style.contentRow}>
      <p className={style.year} style={{ opacity: `${first ? 1 : 0}` }}>
        {year}
      </p>
      <p className={style.date}>{date}</p>
      <p className={style.content}>
        {content}
        <br />
        <br />
        {award}
      </p>
    </div>
  );
};

export default EduAndAward;
