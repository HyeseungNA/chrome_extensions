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
    clearInterval(decreaseTime);
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
  }
};
const changeButton = () => {
  if (startBtn.textContent === "Start") {
    setInterval(() => decreaseTime(hour, minute, second), 1000);
  }
  changeText();
};

// input 요소를 생성하는 함수
const createInput = (width, height, value) => {
  let input = document.createElement("input");
  input.style.width = width;
  input.style.height = height;
  input.value = value;
  input.type = "number";
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

// input 박스 생성
let inputContainer = document.createElement("div");
timerContainer.append(inputContainer);
inputContainer.style.flexDirection = "row";
inputContainer.style.marginTop = "10px";

let hour = createInput("40px", "20", "00");

let colon1 = createColon();
let minute = createInput("40px", "20", "00");
let colon2 = createColon();
let second = createInput("40px", "20", "00");

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

startBtn.addEventListener("click", changeButton);

buttonContainer.appendChild(startBtn);
buttonContainer.appendChild(resetBtn);
