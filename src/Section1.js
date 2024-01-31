import React, { forwardRef, useState } from "react";
import style from "./styles/css/Section.module.css";

const Section1 = forwardRef(({ endAnimation }, ref) => {
  const [tilt, setTilt] = useState({ tiltX: 0, tiltY: 0 });

  const handleMouseMove = (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = -(e.clientY / window.innerHeight - 0.5);

    const newTiltX = mouseX * 35;
    const newTiltY = mouseY * 35;

    setTilt({ tiltX: newTiltX, tiltY: newTiltY });
  };
  return (
    <div id={style.section1} ref={ref} onMouseMove={handleMouseMove}>
      <div className={style.contentWrapper}>
        <div className={style.content}>
          <div
            className={`${endAnimation ? style.profile : style.none}`}
            style={{
              transform: `rotateX(${tilt.tiltY}deg) rotateY(${tilt.tiltX}deg)`,
            }}
          >
            <div>
              <h1>끊임없이 흡수하는, </h1>
              <h1>오늘보다 내일이 더 기대되는 개발자 김웅서 입니다.</h1>
            </div>
            <h1>안녕하세요</h1>
            <h1>안녕하세요</h1>
            <h1>안녕하세요</h1>
            <h1>안녕하세요</h1>
          </div>
          <div
            className={`${endAnimation ? style.photoWrapper : ""}`}
            style={{
              transform: `rotateX(${tilt.tiltY}deg) rotateY(${tilt.tiltX}deg)`,
            }}
          >
            <div className={style.icon}></div>
            <div className={style.photo}></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section1;
