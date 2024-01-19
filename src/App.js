import { useEffect, useState } from "react";
import "./css/App.css";
import Background from "./Background";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { getOffsetTop } from "./uitls/utils";

function App() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const [endAnimation, setEndAnimation] = useState(false);
  const [sectionTops, setSectionTops] = useState([0, 0, 0, 0]);

  console.log(`화면의 너비: ${screenWidth}px`);
  console.log(`화면의 높이: ${screenHeight}px`);

  useEffect(() => {
    const offsets = getOffsetTop();
    setSectionTops(offsets);
  }, []);
  console.log(sectionTops);
  return (
    <div className="App">
      <Navbar
        endAnimation={endAnimation}
        setEndAnimations={setEndAnimation}
        sectionTops={sectionTops}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <Background
        endAnimation={endAnimation}
        setEndAnimation={setEndAnimation}
      />
    </div>
  );
}

export default App;
