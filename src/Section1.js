import React, { forwardRef, useEffect, useState } from "react";
import style from "./styles/css/Section.module.css";
import { msgList } from "./utils/utils";
const Section1 = forwardRef(({ endAnimation }, ref) => {
  const [tilt, setTilt] = useState({ tiltX: 0, tiltY: 0 });
  const handleMouseMove = (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = -(e.clientY / window.innerHeight - 0.5);

    const newTiltX = mouseX * 30;
    const newTiltY = mouseY * 30;

    setTilt({ tiltX: newTiltX, tiltY: newTiltY });
  };
  const words = msgList;
  const [message, setMessage] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);
  const delay = 100;

  useEffect(() => {
    const typingAnimation = () => {
      for (let i = 0; i < words[msgIdx].length; i++) {
        setTimeout(() => setMessage(words[msgIdx][i]), (i + 1) * delay);
      }
      for (let i = words[msgIdx].length - 1; i >= 0; i--) {
        setTimeout(
          () => setMessage(words[msgIdx][i]),
          (2 * words[msgIdx].length - i) * delay
        );
      }
    };
    const playAnimation = async () => {
      typingAnimation();
      setTimeout(
        () => setMsgIdx((prev) => (prev >= words.length - 1 ? 0 : prev + 1)),
        delay * words[msgIdx].length * 2
      );
    };
    if (endAnimation) {
      playAnimation();
    }
  }, [msgIdx, endAnimation]);

  return (
    <div id={style.section1} ref={ref} onMouseMove={handleMouseMove}>
      <div className={style.contentWrapper}>
        <div className={style.content}>
          <div
            className={`${endAnimation ? style.photoWrapper : style.none}`}
            style={{
              transform: `rotateX(${tilt.tiltY}deg) rotateY(${tilt.tiltX}deg)`,
            }}
          >
            <div className={style.icon}></div>
            <div className={style.photo}></div>
          </div>
          <div
            className={`${endAnimation ? style.profile : style.none}`}
            style={{
              transform: `rotateX(${tilt.tiltY}deg) rotateY(${tilt.tiltX}deg)`,
            }}
          >
            <div>
              <h1>안녕하세요!</h1>
              <h1>끊임없이 흡수하는, </h1>
              <h1>오늘보다 내일이 더 기대되는 개발자 김웅서 입니다.</h1>
            </div>
            <div className={style.typing}>
              저는 <span>" {message}</span> " 입니다.
            </div>

            <h1> </h1>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section1;