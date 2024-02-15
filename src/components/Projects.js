import React from "react";
import style from "../styles/css/Projects.module.css";
import { UseSkills } from "../utils/utils";

const Projects = ({ pjtNo }) => {
  const handleScroll = (e) => {
    e.stopPropagation(); // 이벤트 전파 중지
  };
  const handleButtonClick = () => {
    window.open("https://www.youtube.com/watch?v=CWNNi3J2pJY", "_blank");
    // 위 URL은 실제 YouTube 동영상의 링크로 교체합니다.
  };
  if (pjtNo === "first") {
    return (
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.title}>
            <h1>
              🍿미리뷰🍿 <span>(Web Design)</span>
            </h1>
            <h3>진행기간: 2023.07.04 ~ 2023.08.18 (7주)</h3>
          </div>
          <div className={style.introduce}>
            <button
              className={style.thumbnail}
              onClick={handleButtonClick}
            ></button>
            <div className={style.description}>
              <p className={style.title}>
                미리 보는 리뷰, 내 맘대로 쓰는 리뷰, 미:리뷰 <br />
                Role: FE
              </p>
              <p>
                Description <br /> 다양한 측면의 영화 리뷰 작성으로 리뷰의
                신뢰성을 더욱 높인 영화 리뷰 플랫폼 미:리뷰 입니다.
              </p>
              <div className={style.gallery}></div>
              <UseSkills pjtName="mereview" />
            </div>
          </div>
        </div>
        <div className={style.pjtContent}>
          <div className={style.good}>
            <p>잘한점</p>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className={style.bad} onWheel={handleScroll}>
            <p>아쉬웠던 점</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (pjtNo === "second") {
    return (
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.title}>
            <h1>
              한푼두푼 <span>(Fintech, Mobile Web)</span>
            </h1>
            <h3>진행기간: 2023.08.21 ~ 2023.10.06 (7주)</h3>
          </div>
          <div className={style.introduce}>
            <button
              className={style.thumbnail}
              onClick={handleButtonClick}
            ></button>
            <div className={style.description}>
              <p className={style.title}>
                매일 10시 짠돈을 모아, 블록체인을 통한 투명한 후원을 지원하는
                플랫폼
                <br />
                Role: FR
              </p>
              <p>
                Description <br />
                한푼두푼(HPDP)은 크라우드 펀딩을 활용한 소셜 벤처 자금 후원
                서비스 플랫폼입니다. 일상에서 발생하는 끝전으로 당신이 관심을
                가지는 기업과 프로젝트에 후원하세요.
              </p>
              <div className={style.gallery}></div>
              <UseSkills pjtName="mereview" />
            </div>
          </div>
        </div>
        <div className={style.pjtContent}>
          <div className={style.good}>
            <p>잘한점</p>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className={style.bad} onWheel={handleScroll}>
            <p>아쉬웠던 점</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (pjtNo === "third") {
    return (
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.title}>
            <h1>
              Make It Louder! <span>(Game)</span>
            </h1>
            <h3>진행기간: 2023.10.05 ~ 2023.11.25 (7주)</h3>
          </div>
          <div className={style.introduce}>
            <button
              className={style.thumbnail}
              onClick={handleButtonClick}
            ></button>
            <div className={style.description}>
              <p className={style.title}>
                유저의 음성을 이용해 장애물을 극복하는 2D 플랫포머 온라인게임{" "}
                <br />
                Role: UI/UX, FE, BE
              </p>
              <p>
                Description <br />
                섬세한 컨트롤 음성인식을 이용한 기믹 등 여러가지 기믹 단순한
                조작을 이용한 지형지물 극복
              </p>
              <div className={style.gallery}></div>
              <UseSkills pjtName="makeitlouder" />
            </div>
          </div>
        </div>
        <div className={style.pjtContent}>
          <div className={style.good}>
            <p>잘한점</p>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className={style.bad} onWheel={handleScroll}>
            <p>아쉬웠던 점</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (pjtNo === "fourth") {
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
