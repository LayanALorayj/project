// MathOp.js
export function increment() { 
  const num1 = parseInt(document.getElementById("num1").value) || 0;
  const num2 = parseInt(document.getElementById("num2").value) || 0;
  const result = num1 + num2;
  const counterElem = document.getElementById("counter");
  const demo = document.getElementById("geeks");
  counterElem.innerText = result;
  counterElem.style.color = result < 0 ? "red" : "green";
  demo.style.color = "green";
}

export function decrement() {
  const num1 = parseInt(document.getElementById("num1").value) || 0;
  const num2 = parseInt(document.getElementById("num2").value) || 0;
  const result = num1 - num2;
  const counterElem = document.getElementById("counter");
  const demo = document.getElementById("geeks");
  counterElem.innerText = result;
  counterElem.style.color = result < 0 ? "red" : "green";
  demo.style.color = "orange";
}

export function divide() {
  const num1 = parseInt(document.getElementById("num1").value) || 0;
  const num2 = parseInt(document.getElementById("num2").value) || 1; // Avoid division by zero
  const result = num2 !== 0 ? num1 / num2 : 0;
  const counterElem = document.getElementById("counter");
  const demo = document.getElementById("geeks");
  counterElem.innerText = result.toFixed(2);
  counterElem.style.color = result < 0 ? "red" : "green";
  demo.style.color = "purple";
}
