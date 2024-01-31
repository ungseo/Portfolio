import React, { forwardRef } from "react";
import style from "./styles/css/Section.module.css";
const Section4 = forwardRef((props, ref) => {
  return (
    <div id={style.section4} ref={ref}>
      <div className={style.contentWrapper}>
        <div className={style.content}></div>
      </div>
    </div>
  );
});

export default Section4;
