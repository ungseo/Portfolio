import React, { forwardRef } from "react";
import style from "./styles/css/Section.module.css";
import Skill from "./components/Skill";
const Section2 = forwardRef((props, ref) => {
  return (
    <div id={style.section2} ref={ref}>
      <div className={style.contentWrapper}>
        <div className={style.skillWrapper}>
          <h1>SKILLS</h1>
          <div className={style.skills}>
            <Skill name="React" rating={5} discription="hi" />
            <Skill name="React" rating={5} discription="hi" />
            <Skill name="React" rating={5} discription="hi" />
            <Skill name="React" rating={5} discription="hi" />
          </div>
        </div>
        <div className={style.certificationsWrapper}>
          <h1>CERTIFICATIONS</h1>
        </div>
        <div className={style.awardsWrapper}>
          <h1>AWARDS</h1>
        </div>
      </div>
    </div>
  );
});

export default Section2;
