import React, { forwardRef } from "react";
import style from "./styles/css/Section.module.css";
import Info3DCpnt from "./components/Info3DCpnt";

const Section3 = forwardRef(({ endAnimation }, ref) => {
  return (
    <div id={style.section3} ref={ref}>
      <div className={`${endAnimation ? style.contentWrapper : style.none}`}>
        <h1>hi</h1>
        <Info3DCpnt />
      </div>
    </div>
  );
});

export default Section3;
