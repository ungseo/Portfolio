import React from "react";
import style from "../styles/css/Info3DCpnt.module.css";

const Info3DCpnt = () => {
  return (
    <div className={style.container}>
      <div className={style.ip}>
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
      </div>
      <div className={style.cube}>
        <div className={style.content}>
          <h1>TOP CONTENT</h1>
          <p>THIS IS TOP</p>
        </div>
        <div className={style.content}>
          <h1>FRONT CONTENT</h1>
          <p>THIS IS COOL</p>
        </div>
        <div className={style.content}>
          <h1>BOTTOM CONTENT</h1>
          <p>THIS IS SWEET</p>
        </div>
        <div className={style.content}>
          <h1>LAST CONTENT</h1>
          <p>THIS IS FUCK</p>
        </div>
      </div>
    </div>
  );
};

export default Info3DCpnt;
