import React from "react";
import style from "../styles/css/EduAndAward.module.css";
const EduAndAward = ({ date, content, year, first }) => {
  return (
    <div className={style.contentRow}>
      <p className={style.year} style={{ opacity: `${first ? 1 : 0}` }}>
        {year}
      </p>
      <p className={style.date}>{date}</p>
      <p className={style.content}>{content}</p>
    </div>
  );
};

export default EduAndAward;
