// let timerContainer = document.createElement("div");
// // CSS 스타일 적용
// timerContainer.style.width = "200px"; // 너비 설정
// timerContainer.style.height = "100px"; // 높이 설정
// timerContainer.style.backgroundColor = "lightblue"; // 배경색 설정
// document.body.appendChild(timerContainer);

// const spanElemnets = document.querySelectorAll("span");

// alert(spanElemnets);

window.addEventListener("DOMContentLoaded", () => {
  // 현재 페이지의 URL을 가져옴
  const currentURL = window.location.href;

  // URL에 "problem"이 포함되어 있는지 확인
  if (currentURL.includes("problem")) {
    // "problem"이 포함되어 있으면 alert 띄우기
    alert("이 페이지는 문제 페이지입니다!");
  }
});

// window.addEventListener("DO MContentLoaded", () => {
//   // 페이지의 div.wrapper 요소를 선택하여 배경색을 변경
//   const wrapper = document.querySelector("div.wrapper");
//   if (wrapper) {
//     wrapper.style.backgroundColor = "red";
//   }
// });
