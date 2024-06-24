import React from "react";
import style from "../styles/css/Projects.module.css";
import { UseSkills, projectList } from "../utils/utils";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import nothumbnail from "../assets/no-video.png";

const Projects = ({ pjtNo }) => {
  const handleScroll = (e) => {
    e.stopPropagation(); // 이벤트 전파 중지
  };
  const handleButtonClick = (event) => {
    const { id } = event.target;
    if (id === "mereview") {
      window.open("https://www.youtube.com/watch?v=CWNNi3J2pJY", "_blank");
    } else if (id === "hpdp") {
      window.open("https://www.youtube.com/watch?v=pNRrlDQ1Il0", "_blank");
    } else if (id === "makeitlouder") {
      window.open("https://www.youtube.com/watch?v=P1juS3GDWZk", "_blank");
    } else {
      alert("소개영상이 없습니다.");
    }
  };
  const pjtList = projectList;
  if (pjtNo === "first") {
    return (
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.title}>
            <h2>
              🍿미리뷰🍿 <span>(Web Design)</span>
            </h2>
            <h3>진행기간: 2023.07.04 ~ 2023.08.18 (7주)</h3>
          </div>
          <div className={style.introduce}>
            <button
              id="mereview"
              className={style.thumbnail}
              onClick={handleButtonClick}
              style={{ backgroundImage: `url(${thumbnail1})` }}
            ></button>
            <div className={style.description}>
              <p>
                Description
                <div className={style.descontent}>
                  미리 보는 리뷰, 내 맘대로 쓰는 리뷰, 미:리뷰. <br />
                  다양한 측면의 영화 리뷰 작성으로 리뷰의 신뢰성을 더욱 높인
                  영화 리뷰 플랫폼 미:리뷰 입니다.
                </div>
              </p>
              <div className={style.middle}>
                <div>
                  Role
                  <p className={style.title}>FE</p>
                </div>
                <div className={style.notion}>
                  자세히보기
                  <p>
                    <a
                      href="https://github.com/Mereview/Mereview"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </p>
                </div>
              </div>
              <UseSkills pjtName="mereview" />
            </div>
          </div>
        </div>
        <div className={style.pjtContent}>
          <div className={style.good}>
            <p>구현</p>
            <ul>
              {pjtList["mereview"]["things"].map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </div>
          <div className={style.bad} onWheel={handleScroll}>
            <p>잘한 점</p>
            <ul>
              {pjtList["mereview"]["goods"].map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
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
            <h2>
              한푼두푼 <span>(Fintech, Mobile Web)</span>
            </h2>
            <h3>진행기간: 2023.08.21 ~ 2023.10.06 (7주)</h3>
          </div>
          <div className={style.introduce}>
            <button
              id="hpdp"
              className={style.thumbnail}
              style={{ backgroundImage: `url(${thumbnail2})` }}
              onClick={handleButtonClick}
            ></button>
            <div className={style.description}>
              <p>
                Description <br />
                <div className={style.descontent}>
                  매일 10시 짠돈을 모아, 블록체인을 통한 투명한 후원을 지원하는
                  플랫폼 한푼두푼(HPDP)은 크라우드 펀딩을 활용한 소셜 벤처 자금
                  후원 서비스 플랫폼입니다. 일상에서 발생하는 끝전으로 당신이
                  관심을 가지는 기업과 프로젝트에 후원하세요.
                </div>
              </p>
              <div className={style.middle}>
                <div>
                  Role
                  <p className={style.title}>FE</p>
                </div>
                <div className={style.notion}>
                  자세히보기
                  <p>
                    <a
                      href="https://github.com/ungseo/PTJ_HPDP"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </p>
                </div>
              </div>
              <UseSkills pjtName="hpdp" />
            </div>
          </div>
        </div>
        <div className={style.pjtContent}>
          <div className={style.good}>
            <p>구현</p>
            <ul>
              {pjtList["hpdp"]["things"].map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </div>
          <div className={style.bad} onWheel={handleScroll}>
            <p>잘한 점</p>
            <ul>
              {pjtList["hpdp"]["goods"].map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
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
            <h2>
              Make It Louder! <span>(Game)</span>
            </h2>
            <h3>진행기간: 2023.10.05 ~ 2023.11.25 (7주)</h3>
          </div>
          <div className={style.introduce}>
            <button
              id="makeitlouder"
              className={style.thumbnail}
              style={{ backgroundImage: `url(${thumbnail3})` }}
              onClick={handleButtonClick}
            ></button>
            <div className={style.description}>
              <p>
                Description <br />
                <div className={style.descontent}>
                  유저의 음성을 이용해 장애물을 극복하는 2D 플랫포머 온라인게임{" "}
                  섬세한 컨트롤 음성인식을 이용한 기믹 등 여러가지 기믹 단순한
                  조작을 이용한 지형지물 극복
                </div>
              </p>
              <div className={style.middle}>
                <div>
                  Role
                  <p className={style.title}>FE</p>
                </div>
                <div className={style.notion}>
                  자세히보기
                  <p>
                    <a
                      href="https://ungseo.notion.site/Make-It-Louder-cb8874c2b2184f918b9761b4b162672e"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </p>
                </div>
              </div>
              <UseSkills pjtName="makeitlouder" />
            </div>
          </div>
        </div>
        <div className={style.pjtContent}>
          <div className={style.good}>
            <p>구현</p>
            <ul>
              {pjtList["makeitlouder"]["things"].map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </div>
          <div className={style.bad} onWheel={handleScroll}>
            <p>잘한 점</p>
            <ul>
              {pjtList["makeitlouder"]["goods"].map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (pjtNo === "fourth") {
    return (
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.title}>
            <h2>
              Portfolio 제작<span>(Web Design)</span>
            </h2>
            <h3>진행기간: 2024.02.18 ~ ing</h3>
          </div>
          <div className={style.introduce}>
            <button
              id="portfolio"
              style={{
                backgroundImage: `url(${nothumbnail})`,
                backgroundSize: "50px 50px",
                backgroundRepeat: "no-repeat",
              }}
              className={style.thumbnail}
              onClick={handleButtonClick}
            ></button>
            <div className={style.description}>
              <p style={{ width: "100%" }}>
                Description <br />
                <div className={style.descontent}>
                  개인 포트폴리오를 웹사이트 형식으로 제작하고 있습니다.
                  <br />
                  여러가지 디자인들을 실험해보고 넣고 싶었던것들을 공부하면서
                  넣고있어요.
                </div>
              </p>
              <div className={style.middle}>
                <div>
                  Role
                  <p className={style.title}>FE</p>
                </div>
              </div>
              <UseSkills pjtName="portfolio" />
            </div>
          </div>
        </div>
        <div className={style.pjtContent}>
          <div className={style.good}>
            <p>구현</p>
            <ul>
              {pjtList["portfolio"]["things"].map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </div>
          <div className={style.bad} onWheel={handleScroll}>
            <p>추가예정</p>
            <ul>
              {pjtList["portfolio"]["goods"].map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};
export default Projects;
