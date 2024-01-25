import React, { forwardRef } from "react";
import "./css/Section.css";

const Section3 = forwardRef((props, ref) => {
  return (
    <div id="section3" ref={ref}>
      <div className="s-content"></div>
    </div>
  );
});

export default Section3;
