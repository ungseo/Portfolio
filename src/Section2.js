import React, { forwardRef } from "react";
import style from "./styles/css/Section.module.css";
import Info3DCpnt from "./Info3DCpnt";

const Section2 = forwardRef((props, ref) => {
  return (
    <div id={style.section2} ref={ref}>
      <div className="s-content"></div>
    </div>
  );
});

export default Section2;
