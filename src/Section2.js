import React, { forwardRef, useState } from "react";
import style from "./styles/css/Section.module.css";
import Skill from "./components/Skill";
import Certification from "./components/Certification";
import { myList } from "./utils/utils";
import EduAndAward from "./components/EduAndAward";
import Buttons from "./components/Buttons";
import SkillList from "./components/SkillList";
import EduAndAwardList from "./components/EduAndAwardList";
const Section2 = forwardRef(({ endAnimation }, ref) => {
  const [clicked, setClicked] = useState("language");
  const Click = (str) => {
    setClicked(str);
    console.log(clicked);
  };

  return (
    <div id={style.section2} ref={ref}>
      <div className={`${endAnimation ? style.contentWrapper : style.none}`}>
        <div className={style.skillWrapper}>
          <h1 className={style.title}>
            SKILLS
            <div className={style.tabs}>
              <Buttons text={"Lang"} id={"language"} onClick={Click} />
              <Buttons text={"Front"} id={"front"} onClick={Click} />
              <Buttons text={"Back"} id={"back"} onClick={Click} />
              <Buttons text={"Others"} id={"others"} onClick={Click} />
            </div>
          </h1>
          <SkillList category={clicked} />
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
          <EduAndAwardList />
        </div>
      </div>
    </div>
  );
});

export default Section2;
