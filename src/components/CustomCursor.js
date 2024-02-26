import React, { useEffect, useState } from "react";
import style from "../styles/css/CustomCursor.module.css";
const CustomCursor = ({ clicked }) => {
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
      style={
        clicked
          ? {
              left: "50%",
              top: "-1.5rem",
              transform: "translateX(-50%)",
              transition: "top 0.3s ease, left 0.3s ease",
            }
          : {
              left: `calc(${position.x - 20}px - 20vw)`,
              top: `calc(${position.y - 20}px - 20vh )`,
            }
      }
    >
      <p
        className={style.noti}
        style={{ visibility: clicked ? "hidden" : "visible" }}
      >
        Click!
      </p>
    </div>
  );
};

export default CustomCursor;
