let counter = 0;
let timerCounter = 0;
const demo = document.getElementById("geeks");
const counterElem = document.getElementById("counter");

const  increment = () =>{
  let num1 = parseInt(document.getElementById("num1").value) || 0;
  let num2 = parseInt(document.getElementById("num2").value) || 0;
  let result = num1 + num2;
  counterElem.innerText = result;
  counterElem.style.color = result < 0 ? "red" : "green";
  demo.style.color = "green";
}

function decrement() {
  let num1 = parseInt(document.getElementById("num1").value) || 0;
  let num2 = parseInt(document.getElementById("num2").value) || 0;
  let result = num1 - num2;

  counterElem.innerText = result;
  counterElem.style.color = result < 0 ? "red" : "green";
  demo.style.color = "orange";
}

function multi() {
  let num1 = parseInt(document.getElementById("num1").value) || 0;
  let num2 = parseInt(document.getElementById("num2").value) || 0;
  console.log(num1, num2);

  let result = num1 * num2;
  counterElem.innerText = result;
  demo.style.color = result % 2 == 0 ? "green" : "red";
}

setInterval(() => {
  timerCounter += 1;
  document.getElementById("timeCounter").innerText = timerCounter;

  console.log("Timer: ", timerCounter);
}, 10000);
