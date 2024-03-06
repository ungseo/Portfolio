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
      Rating: 3,
      Discription: [
        "- 에픽, 스토리, 작업을 생성하고 할당하며, 프로젝트의 진행 상황을 추적하는 데 익숙합니다.",
        "- Jira를 활용하여 스프린트 계획을 세우고 작업을 조직하는 등의 경험이 있습니다.",
      ],
      Img: "jira.png",
    },
    {
      Name: "Unity Version Control",
      Rating: 3,
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
      Date: "2023-09-01",
      Organization: "한국산업인력공단",
      Number: "23202060666J",
    },
    {
      Name: "Softeer HSAT level 3",
      Date: "2023-08-25",
      Organization: "현대엔지비",
      Number: "HSAT-23-02-3372",
    },
    {
      Name: "삼성 SW 역량테스트 모의 A형",
      Date: "2023-04-25",
      Organization: "삼성전자",
      Number: "N/A",
    },
    {
      Name: "TOEIC",
      Date: "2022-09-25",
      Organization: "ETS",
      Number: "910점",
    },
    {
      Name: "재경관리사",
      Date: "2022-08-05",
      Organization: "삼일회계법인",
      Number: "0-94-00094",
    },
    {
      Name: "컴퓨터활용능력1급",
      Date: "2019-03-15",
      Organization: "대한상공회의소",
      Number: "19-K9-021483",
    },
    {
      Name: "ERP회계정보관리사 2급",
      Date: "2018-06-12",
      Organization: "대한상공회의소",
      Number: "EAE2118103285810",
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
  portfolio: ["React", "Javascript", "SCSS", "Firebase"],
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

export const projectList = {
  mereview: {
    things: [
      "Auth 관련 기능 구현(회원가입, 로그인, 로그아웃 등)",
      "회원가입시 이메일 인증기능 구현",
      "리뷰 코멘트창 CRUD기능 구현",
      "리뷰 디테일 페이지 구현",
      "TMBD 외부 API 연결",
      "사용자 관심사 등록기능 구현",
      "로딩스피너, Navbar등 UI디자인 및 개발",
      "업적 뱃지 디자인",
    ],
    goods: [
      "Typescript 새롭게 학습",
      "SCSS 새롭게 학습",
      "Redux 및 Redux Slice를 이용해 중앙에서 상태를 관리한 것",
      "디자인 라이브러리를 사용하기보다는 직접 CSS를 이용해 애니메이션 효과 등을 디자인한것",
    ],
  },

  hpdp: {
    things: [
      "Auth 관련 기능 구현(회원가입, 로그인, 정보수정, 로그아웃 등)",
      "interceptor와 RefreshToken을 이용해 AccessToken 재발급",
      "펀딩 조회 기능 구현",
      "기업 정보 조회 기능 구현",
      "펀딩 및 기업 검색 기능 구현",
      "모금액 정산하기 기능 구현",
      "결과 보고서 등록 기능구현",
      "계좌 비밀번호 입력시 랜덤으로 바뀌는 키패드 구현",
      "Toss payments 라이브러리 이용해서 결제 기능구현",
      "뉴스 조회 크롤링 기능구현",
    ],
    goods: [
      "TS, Redux Slice 사용이 처음인 팀원들을 위해 샘플코드를 만들어서 팀원들의 개발을 도운점",
      "Button, Input, Alert Modal 등 공통 컴포넌트를 재사용성있게 만들어서 팀원들과 공유해 개발시간을 단축한 점",
      "Back-End와 통신을 위한 axios API요청 함수를 재사용하기 쉽게 직접 만들어 팀원들이 더 쉽게 개발 할 수 있도록 도운 점",
      "스크롤링시 Navbar 숨기기, 버튼 위치 설정 등 UX를 고려한 디자인을 하려고 노력한 점",
      "여러가지 CSS 애니메이션을 제작하여 단조로운 모바일 웹을 풍성하게 꾸민점",
      "약 27개의 페이지와 100개 이상의 컴포넌트로 나눠 아토믹디자인중 분자 단계수준의 컴포넌트 구조로 수정과 재사용성에 있어 많은 이점을 가져간 점.",
      "기획 단계에서 설정해 놓은 디자인 시스템(Style.scss)을 Scss 최상단에 만들고, 간단한 애니메이션을 적용할 수 있는 Animation.scss 파일을 만들어 팀원들이 쉽게 통일된 디자인으로 만들 수 있도록 공유한 점.",
    ],
  },
  makeitlouder: {
    things: [
      "Intro Scene, Auth Scene 제작",
      "Auth 관련 기능 구현(로그인, 회원가입)",
      "인게임 옵션창 고정 UI제작 및 기능연결(볼륨 조절, 캐릭터 변경 등)",
      "로비 Scene UI제작 및 기능연결",
      "랭킹시스템 개발 및 UI제작",
      "Firebase 이용해 Back-end 구현(유저, 랭킹, 플레이기록, 아바타 설정 등)",
      "Firebse Functions를 이용해 매 6시간마다 랭킹을 자동 업데이트하는 스케쥴러기능 제작",
      "React를 이용해 게임 웹페이지(다운로드, 패치노트) 개발",
    ],
    goods: [
      "잘 할 수 있는 부분과 못하는 부분의 역할 분배를 잘한 점.(평소 FE개발에는 자신이 있었기 때문에 혼자 맡아서 빠른속도로 배포 페이지를 개발하였음)",
      "로그인/회원가입 상황에서 모든 예외처리를 하고, LoadingSpinner 사용, Tab키를 이용한 포커스 전환 등 UX를 최대한 고려하여 개발하려고 노력한 점",
      "중간에 Firebase(BE) 업무를 넘겨받았지만 포기하지않고 핵심기능을 모두 완성시킨점",
      "베타테스트를 진행해 집중적으로 피드백을 수집하고, 개선작업을 실행한 점",
      "발표와 시연에 있어서 자신감을 가지고 몰입해서 좋은 결과를 냈던 점",
    ],
  },
  portfolio: {
    things: [
      "canvas 사용해서 눈내리는 3D배경화면 구현",
      "Phenomenon 라이브러리 사용해서 처음 들어올 시 눈 흩뿌리는 이펙트 구현",
      "utils.js 파일에 내 정보 구조화 하고 재사용 쉽게 가공하기",
      "Firebase와 연결해 방명록 구현",
      "perspective 속성 이용해서 3D Cube 컴포넌트 구현",
      "각종 이펙트 자체구현",
      "반응형 웹 구현",
    ],
    goods: [
      "다크모드 구현해보기",
      "방명록 댓글 삭제 Modal 디자인",
      "SQLd 자격증 취득 후 추가",
    ],
  },
};
