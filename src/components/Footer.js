import React, { useEffect, useState } from "react";
import style from "../styles/css/Footer.module.css";

const Footer = ({ endAnimation }) => {
  const [time, setTime] = useState(0);

  //   useEffect(() => {
  //     let timer;

  //     const handleTimer = () => {
  //       if (!endAnimation) return;

  //       if (time < 950) {
  //         setTime((prev) => prev + 1);
  //       }
  //     };

  //     if (endAnimation) {
  //       timer = setInterval(handleTimer, 6000);
  //     }

  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, [time, endAnimation]);

  const handleClick = () => {
    setTime(0);
  };

  return (
    <div
      className={`${endAnimation ? style.footer : style.none}`}
      style={{ height: `${3 + 0.1 * time}%` }}
    >
      <div className={style.snow}>
        {[...Array(5)].map((_, index) => (
          <div key={index} onClick={handleClick}></div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
