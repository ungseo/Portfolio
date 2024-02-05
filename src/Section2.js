import React, { forwardRef } from "react";
import style from "./styles/css/Section.module.css";
import Skill from "./components/Skill";
import Certification from "./components/Certification";
import { myList } from "./utils/utils";
import EduAndAward from "./components/EduAndAward";
const Section2 = forwardRef(({ endAnimation }, ref) => {
  return (
    <div id={style.section2} ref={ref}>
      <div className={`${endAnimation ? style.contentWrapper : style.none}`}>
        <div className={style.skillWrapper}>
          <h1>SKILLS</h1>
          <div className={style.skills}>
            <Skill name="React" rating={5} discription="hi" />
            <Skill name="React" rating={5} discription="hi" />
            <Skill
              name="React"
              rating={5}
              discription="hihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihihi"
            />
            <Skill name="React" rating={5} discription="hi" />
          </div>
        </div>
        <div className={style.certificationsWrapper}>
          <h1>CERTIFICATIONS</h1>
          <div className={style.certifications}>
            {myList.certifications.map((ctfc, index) => (
              <Certification
                key={index}
                name={ctfc.Name}
                date={ctfc.Date}
                number={ctfc.Number}
                organization={ctfc.Organization}
                img={ctfc.Img}
              />
            ))}
          </div>
        </div>
        <div className={style.eduNawardWrapper}>
          <h1>EDUCATIONS & AWARDS</h1>
          <div className={style.list2023}>
            {myList["eduNawards"][2023].map((val, idx) => (
              <EduAndAward
                key={idx}
                year={idx == 0 ? "2023" : ""}
                date={val.Date}
                content={val.Content}
                style={{}}
              />
            ))}
          </div>
          <div className={style.list2024}></div>
        </div>
      </div>
    </div>
  );
});

export default Section2;
