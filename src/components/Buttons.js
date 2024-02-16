import React from "react";
import style from "../styles/css/Buttons.module.css";

export const Buttons = ({ type = "default", text, id, onClick }) => {
  return (
    <button className={style[type]} onClick={onClick} id={id}>
      {text}
    </button>
  );
};

export default Buttons;
