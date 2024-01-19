import { useState, useEffect } from "react";
import "./css/Navbar.css";
import { goToSection } from "./uitls/utils";

const Navbar = ({ endAnimation, setEndAnimations, sectionTops }) => {
  const [topList, setTopList] = useState([]);
  useEffect(() => {
    if (sectionTops) {
      const validSectionTops = sectionTops.filter((top) => top !== undefined);
      setTopList((prev) => [...validSectionTops]);
    }
    console.log(topList);
  }, [sectionTops]);

  console.log(topList);
  return (
    <div id="navbar" style={{ display: `${endAnimation ? "block" : "none"}` }}>
      <div className="content">
        <a
          className="navbar-aTag"
          href="#"
          onClick={() => goToSection(topList[0])}
        >
          Home
        </a>
        <a
          className="navbar-aTag"
          href="#"
          onClick={() => goToSection(topList[1])}
        >
          About Me
        </a>
        <a
          className="navbar-aTag"
          href="#"
          onClick={() => goToSection(topList[2])}
        >
          Project
        </a>
        <a
          className="navbar-aTag"
          href="#"
          onClick={() => goToSection(topList[3])}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
