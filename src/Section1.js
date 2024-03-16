import React, { forwardRef, useEffect, useState } from "react";
import style from "./styles/css/Section.module.css";
import { CycleEmoji, msglist } from "./utils/utils";
import CustomCursor from "./components/CustomCursor";
const Section1 = forwardRef(({ endAnimation }, ref) => {
  const [tilt, setTilt] = useState({ tiltX: 0, tiltY: 0 });
  const handleMouseMove = (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = -(e.clientY / window.innerHeight - 0.5);

    const newTiltX = mouseX * 30;
    const newTiltY = mouseY * 30;

    setTilt({ tiltX: newTiltX, tiltY: newTiltY });
  };
  const words = msglist;
  const [message, setMessage] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);
  const delay = 100;

  useEffect(() => {
    const typingAnimation = () => {
      for (let i = 0; i < words[msgIdx].length; i++) {
        setTimeout(
          () => setMessage((prev) => (prev += words[msgIdx][i])),
          (i + 1) * delay
        );
      }
      setTimeout(() => {}, 500);
      for (let i = words[msgIdx].length - 1; i >= 0; i--) {
        setTimeout(
          () => setMessage((prev) => prev.slice(0, i, -1)),
          (2 * words[msgIdx].length - i) * delay + 500
        );
      }
    };
    const playAnimation = async () => {
      typingAnimation();
      setTimeout(
        () => setMsgIdx((prev) => (prev >= words.length - 1 ? 0 : prev + 1)),
        delay * words[msgIdx].length * 2 + 500
      );
    };
    if (endAnimation) {
      playAnimation();
    }
  }, [msgIdx, endAnimation]);
  const [clicked, setClicked] = useState(false);
  const click = () => {
    setClicked((prev) => !prev);
  };
  return (
    <div id={style.section1} ref={ref} onMouseMove={handleMouseMove}>
      <div className={style.contentWrapper}>
        <div className={style.content}>
          <div
            className={`${endAnimation ? style.photoWrapper : style.none}`}
            style={{
              transform: `rotateX(${tilt.tiltY}deg) rotateY(${tilt.tiltX}deg)`,
              overflow: `${clicked ? "" : "hidden"}`,
              cursor: `${clicked ? "pointer" : "none"}`,
            }}
            onClick={click}
          >
            <div className={style.icon}></div>
            <div
              className={style.photo}
              style={{ transform: `${clicked ? "scale(1)" : ""}` }}
            ></div>
            <CustomCursor clicked={clicked} />
          </div>
          <div
            className={`${endAnimation ? style.profile : style.none}`}
            style={{
              transform: `rotateX(${tilt.tiltY}deg) rotateY(${tilt.tiltX}deg)`,
            }}
          >
            <div>
              <CycleEmoji />
              <h3>HI! HOW ARE YOU?</h3>
              <h1 className={style.typing}>
                I'M <span>{message}</span>
              </h1>
              <p className={style.script}>
                안녕하세요, 저는 김웅서입니다. 😀 <br />
                새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호
                피드백 및 리뷰를 좋아합니다. <br />
                현재 프론트엔드 개발자로 구직중입니다.
                <br /> 맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서
                일하고 싶습니다.
              </p>
            </div>
            <div className={style.infoWrapper}>
              <CycleEmoji />
              <h2>PERSONAL INFO</h2>
              <div className={style.info}>
                <span>Name: 김웅서</span>
                <span>Birth: 1994.4.7</span>
                <span>Phone: 010-9402-3393</span>
                <span>Address: 광주광역시 광산구</span>
                <span>Email: ungseo@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section1;
