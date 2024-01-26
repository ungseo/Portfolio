import React, { forwardRef } from "react";
import style from "./styles/css/Section.module.css";
const Section4 = forwardRef((props, ref) => {
  return (
    <div id={style.section4} ref={ref}>
      <div className={style.content}>
        <div className={style.top}>
          <h1>Contact</h1>
        </div>
        <div className={style.bottom}></div>
      </div>
    </div>
  );
});

export default Section4;
