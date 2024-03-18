// 콜론을 생성하는 함수

const createColon = () => {
  let colon = document.createElement("span");
  colon.style.fontSize = "20px";
  colon.textContent = ":";
  return colon;
};

const createButton = (width, height, text) => {
  let button = document.createElement("button");
  button.style.width = width;
  button.style.height = height;
  button.textContent = text;

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
      }
    }
  }
  if (hourInput === 0 && minuteInput === 0 && secondInput === 0) {
    clearInterval(timeInterval);
  }
  hour.value = hourInput < 10 ? "0" + hourInput : hourInput;
  minute.value = minuteInput < 10 ? "0" + minuteInput : minuteInput;
  second.value = secondInput < 10 ? "0" + secondInput : secondInput;
};

const changeText = () => {
  if (startBtn.textContent === "Start") {
    startBtn.textContent = "Stop";
  } else {
    startBtn.textContent = "Start";
    clearInterval(timeInterval);
  }
};

// 타이머 시간
const changeTimer = () => {
  changeText();
  console.log(startBtn.textContent);
  if (startBtn.textContent === "Stop") {
    timeInterval = setInterval(() => decreaseTime(hour, minute, second), 1000);
  } else {
    clearInterval(decreaseTime);
  }
};
const resetTimer = (hour, minute, second) => {
  console.log(hour.value);
  hour.value = "00";
  minute.value = "00";
  second.value = "00";
  clearInterval(timeInterval);
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
  input.value = value;
  input.type = "number";
  input.min = Min;
  input.max = Max;
  handleInput(input, Min, Max);
  return input;
};

// 타이머 박스 생성
let timerContainer = document.createElement("div");
timerContainer.style.width = "200px";
timerContainer.style.height = "100px";
timerContainer.style.right = 0;
timerContainer.style.border = "2px solid black";
timerContainer.style.backgroundColor = "grey";
timerContainer.style.position = "absolute";
timerContainer.style.zIndex = "9999";
timerContainer.style.position = "fixed";
let container = document.querySelector(".wrapper");
container.prepend(timerContainer);
timerContainer.style.display = "flex";
timerContainer.style.flexDirection = "column";
timerContainer.style.alignItems = "center";

const box = body.querySelector(".wrapper");

// 드래그 속성 마우스를 클릭할 때 드래그 가능하게 만들기
timerContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  originX = e.clientX;
  originY = e.clientY;
  originLeft = box.offsetLeft;
  originTop = box.offsetTop;
});

// input 박스 생성
let inputContainer = document.createElement("div");
timerContainer.append(inputContainer);
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

let buttonContainer = document.createElement("div");
timerContainer.appendChild(buttonContainer);
buttonContainer.style.display = "flex";
buttonContainer.style.flexDirection = "row";
buttonContainer.style.marginTop = "10px";

let startBtn = createButton("40px", "25px", "Start"); // 시작 버튼 생성
let resetBtn = createButton("40px", "25px", "Reset"); // 리셋 버튼 생성

startBtn.addEventListener("click", () => changeTimer());
resetBtn.addEventListener("click", () => resetTimer(hour, minute, second));
buttonContainer.appendChild(startBtn);
buttonContainer.appendChild(resetBtn);
