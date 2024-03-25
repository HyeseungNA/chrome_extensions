// 콜론을 생성하는 함수
const createColon = () => {
  let colon = document.createElement("span");
  colon.style.fontSize = "30px";
  colon.textContent = ":";
  colon.style.color = "white";
  return colon;
};

// 버튼 생성하는 함수
const createButton = (width, height, text) => {
  let button = document.createElement("button");
  if (text === "Start") {
    button.style.background = "#26A444";
  } else {
    button.style.background = "#565656";
  }

  button.style.width = width;
  button.style.height = height;
  button.textContent = text;
  button.style.color = "white";
  return button;
};

let timeInterval;
const decreaseTime = (hour, minute, second) => {
  let hourInput = parseInt(hour.value);
  let minuteInput = parseInt(minute.value);
  let secondInput = parseInt(second.value);

  if (secondInput > 0) {
    secondInput -= 1;
  } else {
    if (minuteInput > 0) {
      secondInput = 59;
      minuteInput -= 1;
    } else {
      if (hourInput > 0) {
        hourInput -= 1;
        minuteInput = 59;
        secondInput = 59;
      } else {
        clearInterval(timeInterval);
      }
    }
  }
  hour.value = hourInput < 10 ? "0" + hourInput : hourInput;
  minute.value = minuteInput < 10 ? "0" + minuteInput : minuteInput;
  second.value = secondInput < 10 ? "0" + secondInput : secondInput;

  // 1초마다 로컬 스토리지에 값 업데이트
  let timerInfo = {
    hourInfo: hour.value,
    minuteInfo: minute.value,
    secondInfo: second.value,
  };
  sessionStorage.setItem("timerInfo", JSON.stringify(timerInfo)); // 수정
};

const changeText = () => {
  if (startBtn.textContent === "Start") {
    startBtn.style.background = "#26A444";
    startBtn.textContent = "Stop";
    hour.readOnly = true;
    minute.readOnly = true;
    second.readOnly = true;
  } else {
    startBtn.style.background = "#B53264";
    startBtn.textContent = "Start";
    hour.readOnly = false;
    minute.readOnly = false;
    second.readOnly = false;

    clearInterval(timeInterval);
  }
};

// 타이머 시간
const changeTimer = (hour, minute, second) => {
  let timerInfo = {
    hourInfo: hour.value,
    minuteInfo: minute.value,
    secondInfo: second.value,
  };
  changeText();
  if (startBtn.textContent === "Stop") {
    sessionStorage.setItem("timerInfo", JSON.stringify(timerInfo));

    timeInterval = setInterval(() => decreaseTime(hour, minute, second), 1000);
  } else {
    clearInterval(decreaseTime);
  }
};
const resetTimer = (hour, minute, second) => {
  hour.value = "00";
  minute.value = "00";
  second.value = "00";
  clearInterval(timeInterval);
  localStorage.removeItem("timerInfo");
};
const handleInput = (input, Min, Max) => {
  input.addEventListener("input", (e) => {
    let value = parseInt(e.target.value);
    if (!isNaN(value) && value >= Min && value <= Max) {
      // 입력 값이 유효한 범위 내에 있으면서 숫자일 경우
      e.target.value = value < 10 ? "0" + value : String(value);
    } else {
      // 입력 값이 유효한 범위 내에 없거나 숫자가 아닌 경우
      e.target.value = "00";
    }
  });
};

// input 요소를 생성하는 함수
const createInput = (width, height, value, Min, Max) => {
  let input = document.createElement("input");
  input.style.width = width;
  input.style.height = height;
  input.style.fontWeight = "bold";
  input.style.fontSize = "30px";
  input.style.color = "white";
  input.value = value;
  input.min = Min;
  input.max = Max;
  handleInput(input, Min, Max);

  input.style.border = "none";
  input.style.background = "none";
  input.style.textAlign = "center";
  return input;
};

// 타이머 박스 생성
const container = document.querySelector(".wrapper");
const content = document.querySelector(".container.content");
let timerContainer = document.createElement("div");
timerContainer.style.width = "200px";
timerContainer.style.height = "100px";
timerContainer.style.right = 0;
timerContainer.style.border = "2px solid black";
timerContainer.style.backgroundColor = "#292929";
timerContainer.style.position = "absolute";
timerContainer.style.zIndex = "9999";
timerContainer.style.position = "fixed";

container.prepend(timerContainer);
timerContainer.style.display = "flex";
timerContainer.style.flexDirection = "column";
timerContainer.style.alignItems = "center";

// 드래그 기능
let isDragging = false;
const { width: containerWidth, height: containerHeight } =
  container.getBoundingClientRect();
const { width: timerWidth, height: timerHeight } =
  timerContainer.getBoundingClientRect();
const { width: contentWidth, height: contentHeight } =
  content.getBoundingClientRect();
// 드래그 속성 마우스를 클릭할 때 드래그 가능하게 만들기
timerContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  originX = e.clientX;
  originY = e.clientY;
  originLeft = timerContainer.offsetLeft;
  originTop = timerContainer.offsetTop;
});

// 마우스를 움직 일 때 드래그 시작
document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const diffX = originX - e.clientX;
    const diffy = e.clientY - originY;
    const endOfXpoint = containerWidth - timerWidth;
    const endOfYponint = 734;

    timerContainer.style.left = `${Math.min(
      Math.max(0, originLeft - diffX),
      endOfXpoint
    )}px`;
    timerContainer.style.top = `${Math.min(
      Math.max(0, originTop + diffy),
      endOfYponint
    )}px`;
  }
});

// 마우스를 떼면 드래그 끝
document.addEventListener("mouseup", (e) => {
  isDragging = false;
});

// input 박스 생성
let inputContainer = document.createElement("div");
timerContainer.append(inputContainer);

inputContainer.style.display = "flex";
inputContainer.style.alignItems = "center";
inputContainer.style.flexDirection = "row";
inputContainer.style.marginTop = "10px";

let hour = createInput("40px", "20", "00", 0, 23);
let colon1 = createColon();
let minute = createInput("40px", "20", "00", 0, 59);
let colon2 = createColon();
let second = createInput("40px", "20", "00", 0, 59);

inputContainer.appendChild(hour);
inputContainer.appendChild(colon1);
inputContainer.appendChild(minute);
inputContainer.appendChild(colon2);
inputContainer.appendChild(second);

// 타이머 버튼
let buttonContainer = document.createElement("div");
timerContainer.appendChild(buttonContainer);
buttonContainer.style.display = "flex";
buttonContainer.style.flexDirection = "row";
buttonContainer.style.marginTop = "10px";
buttonContainer.style.width = "140px";
buttonContainer.style.justifyContent = "space-around";
let startBtn = createButton("60px", "25px", "Start"); // 시작 버튼 생성
let resetBtn = createButton("60px", "25px", "Reset"); // 리셋 버튼 생성

startBtn.addEventListener("click", () => changeTimer(hour, minute, second));
resetBtn.addEventListener("click", () => resetTimer(hour, minute, second));
buttonContainer.appendChild(startBtn);
buttonContainer.appendChild(resetBtn);

const check = () => {
  let timerInfo = JSON.parse(sessionStorage.getItem("timerInfo"));
  if (timerInfo) {
    hour.value = timerInfo.hourInfo;
    minute.value = timerInfo.minuteInfo;
    second.value = timerInfo.secondInfo;
    changeTimer(hour, minute, second);
  }
};

check();
