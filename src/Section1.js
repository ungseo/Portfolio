import React, { forwardRef, useEffect, useState } from "react";
import style from "./styles/css/Section.module.css";

const Section1 = forwardRef((props, ref) => {
  const [endAnimation, setEndAnimation] = useState(false);
  useEffect(() => {
    setEndAnimation(props.endAnimation);
  }, [props.endAnimation]);
  console.log(endAnimation);
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
        <h1>Hi</h1>
        <div className={style.content}>
          <div
            className={`${endAnimation ? style.profile : style.none}`}
            style={{
              transform: `rotateX(${tilt.tiltY}deg) rotateY(${tilt.tiltX}deg)`,
            }}
          >
            <h1>hi</h1>
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
