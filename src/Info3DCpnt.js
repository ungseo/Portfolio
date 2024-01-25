import React from "react";
import style from "./styles/css/Info3DCpnt.module.css";

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
      <input type="radio" name="tabs" id={style.tabtop} />
      <input type="radio" name="tabs" id={style.tabfront} />
      <input type="radio" name="tabs" id={style.tabbottom} />
      <div className={style.cube}>
        <div className={style.content}>
          <h1>TOP CONTENT</h1>
          <p>THIS IS AWESOME</p>
        </div>
        <div className={style.content}>
          <h1>FRONT CONTENT</h1>
          <p>THIS IS COOL</p>
        </div>
        <div className={style.content}>
          <h1>BOTTOM CONTENT</h1>
          <p>THIS IS SWEET</p>
        </div>
      </div>
    </div>
  );
};

export default Info3DCpnt;
