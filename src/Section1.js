import React, { forwardRef } from "react";
import style from "./styles/css/Section.module.css";
import Info3DCpnt from "./Info3DCpnt";

const Section1 = forwardRef((props, ref) => {
  return (
    <div id={style.section1} ref={ref}>
      <div className={style.content}>
        <div className={style.profile}>
          <Info3DCpnt />
        </div>
        <div className={style.photoWrapper}></div>
      </div>
    </div>
  );
});

export default Section1;
