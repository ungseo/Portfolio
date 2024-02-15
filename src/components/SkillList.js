import { useEffect, useState } from "react";
import style from "../styles/css/SkillList.module.css";
import { myList } from "../utils/utils";
import Skill from "./Skill";

const SkillList = ({ category, images }) => {
  const [lst, setLst] = useState(myList[category]);
  useEffect(() => {
    setLst(myList[category]);
  }, [category]);
  return (
    <div className={style.container}>
      <h3>{category.toUpperCase()}</h3>
      <div className={style.wrapper}>
        {lst.map((skill, idx) => (
          <Skill
            key={idx}
            name={skill.Name}
            rating={skill.Rating}
            discription={skill.Discription}
            img={skill.Img}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
