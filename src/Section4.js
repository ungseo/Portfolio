import React, { forwardRef } from "react";
import "./css/Section.css";

const Section4 = forwardRef((props, ref) => {
  return (
    <div id="section4" ref={ref}>
      <div className="s-content"></div>
    </div>
  );
});

export default Section4;
