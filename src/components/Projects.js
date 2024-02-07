import React from "react";
import style from "../styles/css/Projects.module.css";

const Projects = ({ pjtNo }) => {
  if (pjtNo == "first") {
    const handleButtonClick = () => {
      window.open("https://www.youtube.com/watch?v=CWNNi3J2pJY", "_blank");
      // 위 URL은 실제 YouTube 동영상의 링크로 교체합니다.
    };
    return (
      <div className={style.container}>
        <div className={style.title}>
          <h1>
            미리뷰 <span>(웹 디자인)</span>
          </h1>
          <h3>진행기간: 2023.07.03 - 2023.08.21 (약 7주)</h3>
        </div>
        <div className={style.introduce}>
          <button
            className={style.thumbnail}
            onClick={handleButtonClick}
          ></button>
        </div>
      </div>
    );
  } else if (pjtNo == "second") {
    return (
      <div className={style.container}>
        <div className={style.title}>
          <h1>
            한푼두푼 <span>(핀테크, 모바일 웹)</span>
          </h1>
          <h3>진행기간: 2023.07.03 - 2023.08.21 (약 7주)</h3>
        </div>
      </div>
    );
  } else if (pjtNo == "third") {
    return (
      <div className={style.container}>
        <div className={style.title}>
          <h1>
            Make It Louder! <span>(게임)</span>
          </h1>
          <h3>진행기간: 2023.07.03 - 2023.08.21 (약 7주)</h3>
        </div>
      </div>
    );
  } else if (pjtNo == "fourth") {
    return (
      <div className={style.container}>
        <div className={style.title}>
          <h1>
            포트폴리오 제작 <span></span>
          </h1>
          <h3>진행기간: 2023.07.03 - 2023.08.21 (약 7주)</h3>
        </div>
      </div>
    );
  }
};
export default Projects;
