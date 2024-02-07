import React from "react";
import style from "../styles/css/Info3DCpnt.module.css";
import Projects from "./Projects";

const Info3DCpnt = () => {
  return (
    <div className={style.container}>
      <label className={style.tab} htmlFor={style.tabtop}>
        TOP
      </label>
      <label className={style.tab} htmlFor={style.tabfront}>
        FRONT
      </label>
      <label className={style.tab} htmlFor={style.tabbottom}>
        BOTTOM
      </label>
      <label className={style.tab} htmlFor={style.tablast}>
        LAST
      </label>
      <input type="radio" name="tabs" id={style.tabtop} defaultChecked />
      <input type="radio" name="tabs" id={style.tabfront} />
      <input type="radio" name="tabs" id={style.tabbottom} />
      <input type="radio" name="tabs" id={style.tablast} />
      <div className={style.cube}>
        <div className={style.content}>
          <Projects pjtNo="first" />
        </div>
        <div className={style.content}>
          <Projects pjtNo="second" />
        </div>
        <div className={style.content}>
          <Projects pjtNo="third" />
        </div>
        <div className={style.content}>
          <Projects pjtNo="fourth" />
        </div>
      </div>
    </div>
  );
};

export default Info3DCpnt;
