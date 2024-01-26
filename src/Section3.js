import React, { forwardRef } from "react";
import "./css/Section.css";
import Info3DCpnt from "./Info3DCpnt";

const Section3 = forwardRef((props, ref) => {
  return (
    <div id="section3" ref={ref}>
      <div className="s-content">
        <Info3DCpnt />
      </div>
    </div>
  );
});

export default Section3;
