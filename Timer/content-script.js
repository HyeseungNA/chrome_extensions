function myFunction() {
  let redSquare = document.createElement("div");
  redSquare.style.width = "100px";
  redSquare.style.height = "100px";
  redSquare.style.backgroundColor = "red";
  redSquare.style.position = "absolute";
  redSquare.style.top = 0;
  redSquare.style.right = 0;

  let container = document.querySelector("wrapper.container.content");
  container.append(redSquare);
}

myFunction();

console.log("하이");
