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
  smoothScroll(currentScroll, top, 100); // 1000ms 동안 부드러운 스크롤 적용
};

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

export const getRatingStars = (rating) => {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "★";
  }
  return stars;
};
