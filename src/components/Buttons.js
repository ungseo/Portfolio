import React from "react";
import style from "../styles/css/Buttons.module.css";

export const Buttons = ({ type = "default", text, id, onClick }) => {
  const click = () => {
    onClick(id);
  };

  return (
    <button className={style[type]} onClick={click}>
      {text}
    </button>
  );
};

export default Buttons;
