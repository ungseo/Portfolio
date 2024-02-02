import React, { useEffect, useState } from "react";
import style from "../styles/css/CustomCursor.module.css";
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);
    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);
  return (
    <div
      className={style.cursor}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default CustomCursor;
