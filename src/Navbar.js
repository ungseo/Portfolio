import { useState, useEffect } from "react";
import style from "./styles/css/Navbar.module.css";
import { goToSection } from "./uitls/utils";

const Navbar = ({ endAnimation, setEndAnimations, sectionTops }) => {
  const [topList, setTopList] = useState([]);
  const onClick = (idx) => goToSection(idx);
  useEffect(() => {
    if (sectionTops) {
      const validSectionTops = sectionTops.filter((top) => top !== undefined);
      setTopList((prev) => [...validSectionTops]);
    }
    console.log(topList);
  }, [sectionTops]);

  console.log(topList);
  return (
    <div
      id={style.navbar}
      style={{ display: `${endAnimation ? "block" : "none"}` }}
    >
      <div className={style.content}>
        <a href="#" onClick={() => goToSection(topList[0])}>
          Home
        </a>
        <a href="#" onClick={() => goToSection(topList[1])}>
          About Me
        </a>
        <a href="#" onClick={() => goToSection(topList[2])}>
          Project
        </a>
        <a href="#" onClick={() => goToSection(topList[3])}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
