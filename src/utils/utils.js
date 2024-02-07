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
  console.log(difference);
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
    "ㅍ",
    "프",
    "프ㄹ",
    "프로",
    "프론",
    "프론ㅌ",
    "프론트",
    "프론트ㅇ",
    "프론트에",
    "프론트엔",
    "프론트엔ㄷ",
    "프론트엔드",
    "프론트엔드 ",
    "프론트엔드 ㄱ",
    "프론트엔드 개",
    "프론트엔드 개ㅂ",
    "프론트엔드 개바",
    "프론트엔드 개발",
    "프론트엔드 개발ㅈ",
    "프론트엔드 개발자",
  ],
  ["", "ㄱ", "기", "김", "김ㅇ", "김우", "김웅", "김웅ㅅ", "김웅서"],
];

export const myList = {
  front: [
    { Name: "HTML/CSS", Rating: 4, Discription: "좀잘해요", Img: "html.png" },
    {
      Name: "React.js",
      Rating: 4,
      Discription: "좀잘해요",
      Img: "react.png",
    },
    { Name: "Vue.js", Rating: 4, Discription: "좀잘해요", Img: "vue.png" },
  ],
  language: [
    { Name: "Javascript", Rating: 4, Discription: "좀잘해요", Img: "js.png" },
    {
      Name: "Typescript",
      Rating: 4,
      Discription: "좀잘해요",
      Img: "ts.png",
    },
    { Name: "Python", Rating: 4, Discription: "좀잘해요", Img: "python.png" },
    { Name: "C#", Rating: 4, Discription: "좀잘해요", Img: "c-sharp.png" },
    { Name: "Java", Rating: 4, Discription: "좀잘해요", Img: "java.png" },
  ],
  back: [
    { Name: "Django", Rating: 4, Discription: "좀잘해요", Img: "django.png" },
    {
      Name: "Firebase",
      Rating: 4,
      Discription: "좀잘해요",
      Img: "firebase.png",
    },
    {
      Name: "MySQL",
      Rating: 4,
      Discription: "좀잘해요",
      Img: "mysql.png",
    },
  ],
  others: [
    {
      Name: "Git/Github",
      Rating: 4,
      Discription: "좀잘해요",
      Img: "git.png",
    },
    { Name: "Jira", Rating: 4, Discription: "좀잘해요", Img: "jira.png" },
    {
      Name: "Unity Version Control",
      Rating: 4,
      Discription: "좀잘해요",
      Img: "uvc.png",
    },
    {
      Name: "Figma",
      Rating: 4,
      Discription: "좀잘해요",
      Img: "figma.png",
    },
  ],
  certifications: [
    {
      Name: "정보처리기사",
      Date: "2023-09-06",
      Organization: "한국산업인력공단",
      Number: "09-129302102",
      Img: "",
    },
    {
      Name: "Softeer HSAT level 3",
      Date: "2023-08-25",
      Organization: "현대엔지비",
      Number: "09-129302102",
      Img: "",
    },
    {
      Name: "TOEIC",
      Date: "2022-09-25",
      Organization: "ETS",
      Number: "910점",
      Img: "",
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
      Img: "",
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
        },
        {
          Date: "08.21 ~ 10.06",
          Content: `특화 프로젝트 
          (도메인: 핀테크, 서비스 명: 한푼두푼)`,
        },
        {
          Date: "07.02 ~ 08.17",
          Content: `공통 프로젝트 (
            도메인: 웹디자인, 서비스 명: 미:리뷰)`,
        },
        {
          Date: "06.01 ~ 12.29",
          Content: "삼성 청년 SW아카데미 2학기",
        },
        {
          Date: "01.04 ~ 05.26",
          Content: "삼성 청년 SW아카데미 1학기",
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
