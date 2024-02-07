import React, { forwardRef } from "react";
import style from "./styles/css/Section.module.css";
const Section4 = forwardRef(({ endAnimation }, ref) => {
  return (
    <div id={style.section4} ref={ref}>
      <div className={`${endAnimation ? style.contentWrapper : style.none}`}>
        <h1>CONTACT</h1>
        <div className={style.content}>
          <a href="https://github.com/ungseo">Git hub</a>
          <br />
          <a href="">Notion</a>
          <br />
          <a href="">Blog</a>
          <br />
          email: ungseo@gmail.com
          <br />
          phone number: +82-010-9402-3393
          <br />
        </div>
      </div>
    </div>
  );
});

export default Section4;
