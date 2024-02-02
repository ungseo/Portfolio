import { useEffect, useState, useRef } from "react";
import "./css/App.css";
import style from "./styles/css/App.module.css";
import Background from "./components/Background";
import Background2 from "./components/Background2";
import Navbar from "./components/Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [endAnimation, setEndAnimation] = useState(false);
  const [sectionTops, setSectionTops] = useState([0, 0, 0, 0]);

  // Refs 생성
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();

  useEffect(() => {
    const updateOffsets = () => {
      // Refs로 참조한 DOM 요소의 offsetTop 사용
      const offsets = [
        section1Ref.current?.offsetTop || 0,
        section2Ref.current?.offsetTop || 0,
        section3Ref.current?.offsetTop || 0,
        section4Ref.current?.offsetTop || 0,
      ];

      setSectionTops((prev) => {
        // 배열 내용 비교
        if (prev.every((value, index) => value === offsets[index])) {
          return prev;
        } else {
          return offsets;
        }
      });
    };

    // 초기 렌더링 시에도 호출
    updateOffsets();

    // 창 크기가 변할 때마다 updateOffsets 호출
    window.addEventListener("resize", updateOffsets);

    // 컴포넌트가 unmount되면 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", updateOffsets);
    };
  }, [endAnimation]);

  return (
    <div className={style.App}>
      <CustomCursor />
      <Navbar
        endAnimation={endAnimation}
        setEndAnimations={setEndAnimation}
        sectionTops={sectionTops}
      />
      <Section1 ref={section1Ref} endAnimation={endAnimation} />
      <Section2 ref={section2Ref} endAnimation={endAnimation} />
      <Section3 ref={section3Ref} endAnimation={endAnimation} />
      <Section4 ref={section4Ref} endAnimation={endAnimation} />

      <Background2 endAnimation={endAnimation} />
      <Background
        endAnimation={endAnimation}
        setEndAnimation={setEndAnimation}
      />
    </div>
  );
}

export default App;
