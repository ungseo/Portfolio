import React from "react";
import style from "../styles/css/EduAndAward.module.css";
const EduAndAward = ({ date, content, year }) => {
  return (
    <>
      <p className={style.year}>{year}</p>
      <p className={style.date}>{date}</p>
      <p className={style.content}>{content}</p>
    </>
  );
};

export default EduAndAward;
