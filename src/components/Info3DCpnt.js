import React, { useEffect, useState } from "react";
import style from "../styles/css/Info3DCpnt.module.css";
import Projects from "./Projects";

const Info3DCpnt = () => {
  const [selectedTab, setSelectedTab] = useState("tabtop");
  const [vh, setVh] = useState(0);
  const getCubeClass = () => {
    switch (selectedTab) {
      case "tabtop":
        return `${style.cube} ${style.rotateTop}`;
      case "tabfront":
        return `${style.cube} ${style.rotateFront}`;
      case "tabbottom":
        return `${style.cube} ${style.rotateBottom}`;
      case "tablast":
        return `${style.cube} ${style.rotateLast}`;
      default:
        return style.cube;
    }
  };
  useEffect(() => {
    const updateVh = () => {
      setVh(window.innerHeight * 0.287);
    };
    updateVh();

    window.addEventListener("resize", updateVh);

    return () => window.removeEventListener("resize", updateVh);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={getCubeClass()}>
          <div className={style.content}>
            <Projects pjtNo="first" />
          </div>
          <div
            className={style.content}
            style={{ transform: `translateZ(${vh}px)` }}
          >
            <Projects pjtNo="second" />
          </div>
          <div className={style.content}>
            <Projects pjtNo="third" />
          </div>
          <div
            className={style.content}
            style={{
              transform: `rotateX(180deg) translateZ(${vh}px) translateY(100%)`,
            }}
          >
            <Projects pjtNo="fourth" />
          </div>
        </div>
      </div>
      <div className={style.right}>
        <label
          className={style.tab}
          htmlFor={style.tabtop}
          onClick={() => setSelectedTab("tabtop")}
        >
          미리뷰
        </label>
        <label
          className={style.tab}
          htmlFor={style.tabfront}
          onClick={() => setSelectedTab("tabfront")}
        >
          한푼두푼
        </label>
        <label
          className={style.tab}
          htmlFor={style.tabbottom}
          onClick={() => setSelectedTab("tabbottom")}
        >
          Make It Louder!
        </label>
        <label
          className={style.tab}
          htmlFor={style.tablast}
          onClick={() => setSelectedTab("tablast")}
        >
          포트폴리오
        </label>
      </div>
    </div>
  );
};

export default Info3DCpnt;
