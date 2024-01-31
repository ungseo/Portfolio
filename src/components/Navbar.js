import { useState, useEffect } from "react";
import style from "../styles/css/Navbar.module.css";
import { goToSection } from "../uitls/utils";

const Navbar = ({ endAnimation, setEndAnimations, sectionTops }) => {
  const [currentTab, setCurrentTab] = useState(["", "", "", ""]);
  useEffect(() => {
    console.log("hi");
    const handleScroll = () => {
      for (let i = 0; i < 4; i++) {
        console.log(sectionTops[i], sectionTops[i + 1], window.scrollY);

        setCurrentTab((prev) => {
          const newTabs = [...prev]; // 새로운 배열을 생성
          if (
            sectionTops[i] <= window.scrollY &&
            sectionTops[i + 1] > window.scrollY &&
            i <= 2
          ) {
            newTabs[i] = style.cur;
          } else if (i === 3 && window.scrollY >= sectionTops[3]) {
            newTabs[i] = style.cur;
          } else {
            newTabs[i] = "";
          }
          return newTabs;
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);
  console.log("tab", currentTab);
  return (
    <div
      id={style.navbar}
      style={{ display: `${endAnimation ? "block" : "none"}` }}
    >
      <div className={style.content}>
        <a
          href="#"
          onClick={() => goToSection(sectionTops[0])}
          className={`${currentTab[0]}`}
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => goToSection(sectionTops[1])}
          className={`${currentTab[1]}`}
        >
          About Me
        </a>
        <a
          href="#"
          onClick={() => goToSection(sectionTops[2])}
          className={`${currentTab[2]}`}
        >
          Project
        </a>
        <a
          href="#"
          onClick={() => goToSection(sectionTops[3])}
          className={`${currentTab[3]}`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
