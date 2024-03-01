import style from "../styles/css/utils.module.css";

export const goToSection = (top) => {
  // 현재 스크롤 위치
  const currentScroll = window.scrollY;

  // 목표 위치와 현재 위치의 차이 계산
  const difference = top - currentScroll;

  // 일정 간격으로 스크롤 위치를 조절하는 함수
  const smoothScroll = (start, end, duration) => {
    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);

      window.scrollTo(0, start + difference * percentage);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  // 부드러운 스크롤 적용
  smoothScroll(currentScroll, top, 100); // 100ms 동안 부드러운 스크롤 적용
};

// 섹션의 맨위 위치 가져오는 함수
export const getOffsetTop = () => {
  const section1 = document.getElementById("section1");
  const section2 = document.getElementById("section2");
  const section3 = document.getElementById("section3");
  const section4 = document.getElementById("section4");

  if (section1 && section2 && section3 && section4) {
    return [
      section1.offsetTop,
      section2.offsetTop,
      section3.offsetTop,
      section4.offsetTop,
    ];
  }
};

// 점수뽑는함수
export const getRatingStars = (rating) => {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "★";
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars += "☆";
  }
  return stars;
};

export const msgList = [
  [" ", "ㅇ", "아", "안", "안ㄴ", "안녀", "안녕"],
  [
    " ",
    " F",
    " FR",
    " FRON",
    " FRONT",
    " FRONT ",
    " FRONT D",
    " FRONT DE",
    " FRONT DEV",
    " FRONT DEVEL",
    " FRONT DEVELO",
    " FRONT DEVELOP",
    " FRONT DEVELOPE",
    " FRONT DEVELOPER",
  ],
  ["", "ㄱ", "기", "김", "김ㅇ", "김우", "김웅", "김웅ㅅ", "김웅서"],
];

export const msglist = ["FRONT DEVELOPER", "UNGSEO KIM"];

export const myList = {
  front: [
    {
      Name: "HTML/CSS",
      Rating: 4,
      Discription: [
        "- 웹 사이트의 레이아웃을 구성하고 디자인을 꾸밀 수 있습니다.",
        "- 시맨틱 HTML과 CSS의 다양한 속성을 활용하여 반응형 웹 페이지를 제작할 수 있습니다.",
      ],
      Img: "html.png",
    },
    {
      Name: "React.js",
      Rating: 4,
      Discription: [
        "- 사용자 인터페이스를 만들기 위해 컴포넌트 기반 아키텍처를 활용 할 수 있습니다.",
        "- 가상 DOM을 통해 효율적으로 UI를 업데이트하고, 상태 관리 라이브러리인 Redux를 이용해 상태를 관리할 수 있습니다.",
      ],
      Img: "react.png",
    },
    {
      Name: "Vue.js",
      Rating: 3,
      Discription: [
        "- Vue의 리액티브 데이터 바인딩과 컴포넌트 기반 아키텍처를 활용하여 동적이고 반응형 UI를 만들 수 있습니다.",
      ],
      Img: "vue.png",
    },
    {
      Name: "SCSS",
      Rating: 4,
      Discription: [
        "- 변수, 중첩 규칙, 믹스인 등을 활용하여 CSS 코드를 더 효율적으로 작성할 수 있습니다.",
        "- 모듈화된 스타일 시트를 작성하고, 코드의 재사용성을 높이며 유지보수를 쉽게 할 수 있습니다.",
      ],
      Img: "scss.png",
    },
  ],
  language: [
    {
      Name: "Javascript",
      Rating: 4,
      Discription: [
        "- ES6 이상의 자바스크립트 문법을 활용하여 동적인 웹 페이지를 구현할 수 있습니다.",
        "- 클라이언트 측 로직을 처리하고, AJAX 요청을 보내거나 서버와 상호 작용할 수 있습니다.",
      ],
      Img: "js.png",
    },
    {
      Name: "Typescript",
      Rating: 4,
      Discription: [
        "- TypeScript를 사용하여 각 변수와 함수에 명확한 타입을 지정하여 코드의 안정성을 확보할 수 있습니다 ",
        "- 인터페이스를 활용하여 외부 라이브러리와의 상호 작용을 원활하게 하고, 프로젝트의 확장성을 고려한 설계를 할 수 있습니다.",
      ],

      Img: "ts.png",
    },
    {
      Name: "Python",
      Rating: 4,
      Discription: [
        "- 파이썬의 간결한 문법과 다양한 내장 라이브러리를 활용하여 효율적이고 가독성 있는 코드를 작성할 수 있습니다.",
        "- 다양한 알고리즘 문제를 해결 할 수 있습니다.",
      ],
      Img: "python.png",
    },
    {
      Name: "C#",
      Rating: 3,
      Discription: [
        "- C#을 사용하여 Unity와 함께 게임 개발을 할 수 있습니다.",
        "- Firebase와 함께 간단한 백엔드를 개발할 수 있습니다.",
      ],
      Img: "c-sharp.png",
    },
    {
      Name: "Java",
      Rating: 1,
      Discription: ["- 간단한 알고리즘 문제를 해결할 수 있습니다."],
      Img: "java.png",
    },
  ],

  back: [
    {
      Name: "Django",
      Rating: 2,
      Discription: [
        "- MTV 패턴과 URL 매핑에 대한 이해가 있습니다.",
        "- Restfull API를 이용해 CRUD기능을 구현할 수 있습니다.",
      ],
      Img: "django.png",
    },
    {
      Name: "Firebase",
      Rating: 2,
      Discription: [
        "- NoSQL을 이용한 간단한 백엔드를 개발할 수 있습니다.",
        "- Firebase Functions 기능을 활용하여 스케줄링 작업을 구현해본 경험이 있습니다.",
      ],
      Img: "firebase.png",
    },
    {
      Name: "MySQL",
      Rating: 2,
      Discription: [
        "- 주로 MySQL Workbench를 활용하여 데이터를 검색하고 분석하며, 프론트엔드 개발을 위해 필요한 데이터를 검색하는 데 사용했습니다.",
      ],
      Img: "mysql.png",
    },
  ],
  others: [
    {
      Name: "Git/Github",
      Rating: 4,
      Discription: [
        "- 주로 코드 변경 사항을 추적하고 병합하는 데 사용했으며, 협업하여 코드를 공유하고 문제를 해결하는 데 능숙합니다.",
      ],
      Img: "git.png",
    },
    {
      Name: "Jira",
      Rating: 4,
      Discription: [
        "- 에픽, 스토리, 작업을 생성하고 할당하며, 프로젝트의 진행 상황을 추적하는 데 익숙합니다.",
        "- Jira를 활용하여 스프린트 계획을 세우고 작업을 조직하는 등의 경험이 있습니다.",
      ],
      Img: "jira.png",
    },
    {
      Name: "Unity Version Control",
      Rating: 4,
      Discription: [
        "- Unity에서 버전 관리 기능을 활용하여 게임 프로젝트의 코드와 에셋을 관리했습니다.",
        "- 다른 개발자들과의 작업을 동기화하는 데 능숙합니다.",
      ],
      Img: "uvc.png",
    },
    {
      Name: "Figma",
      Rating: 4,
      Discription: [
        "- UI/UX 디자인을 위한 프로토타입을 제작하고 디자인 시스템을 구축하는 경험이 있습니다.",
        "- 필요한 플러그인을 찾고, 적재적소에 사용할 수 있습니다.",
      ],

      Img: "figma.png",
    },
  ],
  certifications: [
    {
      Name: "정보처리기사",
      Date: "2023-09-06",
      Organization: "한국산업인력공단",
      Number: "09-129302102",
      Img: "coding.png",
    },
    {
      Name: "Softeer HSAT level 3",
      Date: "2023-08-25",
      Organization: "현대엔지비",
      Number: "09-129302102",
      Img: "coding.png",
    },
    {
      Name: "삼성 모의 A형",
      Date: "2023-04-25",
      Organization: "삼성전자",
      Number: "09-129302102",
      Img: "coding.png",
    },
    {
      Name: "TOEIC",
      Date: "2022-09-25",
      Organization: "ETS",
      Number: "910점",
      Img: "coding.png",
    },
    {
      Name: "재경관리사",
      Date: "2022-08-05",
      Organization: "삼일회계법인",
      Number: "0-94-00094",
      Img: "",
    },
    {
      Name: "컴퓨터활용능력1급",
      Date: "2019-03-15",
      Organization: "대한상공회의소",
      Number: "19-K9-021483",
      Img: "coding.png",
    },
    {
      Name: "ERP회계정보관리사 2급",
      Date: "2018-06-12",
      Organization: "대한상공회의소",
      Number: "19-K9-021483",
      Img: "",
    },
  ],
  eduNawards: [
    {
      2023: [
        {
          Date: "10.10 ~ 11.24",
          Content: `자율 프로젝트
           (도메인: 게임, 서비스 명: Make It Louder!)`,
          award: "🏆우수상 (2위) (삼성전자주식회사)",
        },
        {
          Date: "08.21 ~ 10.06",
          Content: `특화 프로젝트 
          (도메인: 핀테크, 서비스 명: 한푼두푼)`,
          award: "🏆우수상(3위) (삼성전자주식회사)",
        },
        {
          Date: "07.02 ~ 08.17",
          Content: `공통 프로젝트 (
            도메인: 웹디자인, 서비스 명: 미:리뷰)`,
        },
        {
          Date: "06.02 ~ 06.17",
          Content: `2인 프로젝트 (
            도메인: 웹디자인, 서비스 명: 미:리뷰)`,
        },
        {
          Date: "01.04 ~ 12.29",
          Content: "삼성 청년 SW아카데미",
        },
      ],
    },
    { 2020: [{ Date: "", Content: "조선대학교 경영학부 졸업" }] },
    {
      2012: [
        {
          Date: "02-05",
          Content: "광주 금호고등학교 졸업",
        },
      ],
    },
  ],
};

export const CycleEmoji = () => {
  return <div className={style.container}></div>;
};

const useSkillsList = {
  mereview: ["HTML & CSS", "React", "Typescript", "SCSS"],
  hpdp: [
    "HTML & CSS",
    "React",
    "Typescript",
    "SCSS",
    "BlockChain",
    "Web3",
    "SSE",
    "PWA",
  ],
  makeitlouder: ["Unity", "C#", "React", "Typescript", "Firebase"],
};

export const UseSkills = ({ pjtName }) => {
  return (
    <div className={style.skillContainer}>
      <p className={style.title}>
        Using Skills
        <div className={style.skills}>
          {useSkillsList[pjtName].map((skill, idx) => (
            <div key={idx} className={style.skill}>
              {skill}
            </div>
          ))}
        </div>
      </p>
    </div>
  );
};

export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
