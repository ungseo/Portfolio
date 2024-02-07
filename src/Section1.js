import React, { forwardRef, useEffect, useState } from "react";
import style from "./styles/css/Section.module.css";
import { msgList } from "./utils/utils";
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
            <h1>안녕하세요!</h1>
            <div className={style.typing}>
              저는 <span>" {message}</span> " 입니다.
            </div>
            <p className={style.script}>
              안녕하세요, 저는 김웅서입니다. 😀 <br />
              새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백
              및 리뷰를 좋아합니다. <br />
              현재 프론트엔드 개발자로 구직중입니다. 맡은 일에 자부심을 갖고
              도전을 경험할 수 있는 회사에서 일하고 싶습니다.
            </p>

            <h1> </h1>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section1;
