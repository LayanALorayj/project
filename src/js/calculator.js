// calculator.js
import { increment, decrement, divide } from "./MathOp.js";

let timerCounter = 0;

const demo = document.getElementById("geeks");
const counterElem = document.getElementById("counter");

function multi() {
  const num1 = parseInt(document.getElementById("num1").value) || 0;
  const num2 = parseInt(document.getElementById("num2").value) || 0;
  const result = num1 * num2;
  counterElem.innerText = result;
  demo.style.color = result % 2 === 0 ? "green" : "red";
}

setInterval(() => {
  timerCounter += 1;
  document.getElementById("timeCounter").innerText = timerCounter;
  console.log("Timer:", timerCounter);
}, 10000);

document.addEventListener("DOMContentLoaded", () => {
  const incrementBtn = document.getElementById("incrementBtn");
  const decrementBtn = document.getElementById("decrementBtn");
  const multiplyBtn = document.getElementById("multiplyBtn");
  const divideBtn = document.getElementById("divideBtn");

  if (incrementBtn) incrementBtn.addEventListener("click", increment);
  if (decrementBtn) decrementBtn.addEventListener("click", decrement);
  if (multiplyBtn) multiplyBtn.addEventListener("click", multi);
  if (divideBtn) divideBtn.addEventListener("click", divide);
});
