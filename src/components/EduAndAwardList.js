import React from "react";
import style from "../styles/css/EduAndAward.module.css";
import { myList } from "../utils/utils";
import EduAndAward from "./EduAndAward";
const EduAndAwardList = () => {
  const list = myList["eduNawards"];
  return (
    <div className={style.container}>
      {list.map((val, idx) => (
        <div key={idx} className={style.contentWrapper}>
          {val[Object.keys(val)].map((data, idx) => (
            <EduAndAward
              key={idx}
              year={Object.keys(val)}
              date={data.Date}
              content={data.Content}
              first={idx === 0 ? true : false}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default EduAndAwardList;
