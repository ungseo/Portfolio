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
    "프론트 ",
    "프론트 ㄷ",
    "프론트 디",
    "프론트 디ㅂ",
    "프론트 디베",
    "프론트 디벨",
    "프론트 디벨ㄹ",
    "프론트 디벨로",
    "프론트 디벨로ㅍ",
    "프론트 디벨로퍼",
  ],
  ["", "ㄱ", "기", "김", "김ㅇ", "김우", "김웅", "김웅ㅅ", "김웅서"],
];

export const myList = {
  skills: {},
  certifications: [
    {
      Name: "재경관리사",
      Date: "2022-08-15",
      Organization: "삼일회계법인",
      Number: "09-129302102",
      Img: "",
    },
    {
      Name: "컴퓨터활용능력1급",
      Date: "2022-08-15",
      Organization: "우리집",
      Number: "09-223KKslskd",
      Img: "",
    },
    {
      Name: "컴퓨터활용능력1급",
      Date: "2022-08-15",
      Organization: "우리집",
      Number: "09-223KKslskd",
      Img: "",
    },
  ],
  eduNawards: {
    2023: [
      {
        Date: "01-30",
        Content:
          "SSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafy",
      },
      {
        Date: "01-30",
        Content:
          "SSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafy",
      },
      {
        Date: "01-30",
        Content:
          "SSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafy",
      },
      {
        Date: "01-30",
        Content:
          "SSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafy",
      },
      {
        Date: "01-30",
        Content:
          "SSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafy",
      },
      {
        Date: "01-30",
        Content:
          "SSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafy",
      },
      {
        Date: "01-30",
        Content:
          "SSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafy",
      },
      {
        Date: "01-30",
        Content:
          "SSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafySSafy",
      },
    ],
    2024: [
      {
        Date: "02-05",
        Content:
          "MapleLandMapleLandMapleLandMapleLandMapleLandMapleLandMapleLandMapleLandMapleLandMapleLandMapleLandMapleLand",
      },
    ],
  },
};
