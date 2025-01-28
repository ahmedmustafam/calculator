// defining basic functions for the calculator

let num1;
let operator;
let num2 = null;
let result;

function add(a, b) {
  result = a + b;
  return a + b;
}

function subtract(a, b) {
  result = a - b;
  return a - b;
}

function multiply(a, b) {
  result = a * b;
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Dont divide by zero!";
  result = a / b;
  return a / b;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      add(num1, num2);
      console.log(add(num1, num2));
      break;

    case "-":
      subtract(num1, num2);
      console.log(subtract(num1, num2));
      break;

    case "*":
      multiply(num1, num2);
      console.log(multiply(num1, num2));
      break;

    case "/":
      divide(num1, num2);
      console.log(divide(num1, num2));
      break;
    default:
      console.log("Enter a operator");
  }
}

const display = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("clr");
const equals = document.getElementById("equals");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");

// Button functionality for the calculator

clear.addEventListener("click", () => {
  currentOperand.textContent = "";
  previousOperand.textContent = "";
  num1 = undefined;
  num2 = null;
  result = undefined;
  operator = null;
});

buttons.forEach((button) => {
  if (button.classList.contains("numbers")) {
    // updating current operand view
    button.addEventListener("click", () => {
      currentOperand.textContent += button.textContent;
      console.log(button.textContent);
    });
  } else if (button.classList.contains("operators")) {
    button.addEventListener("click", () => {
      if (num1 === undefined) { // Checking if num1 exists
        num1 = parseFloat(currentOperand.textContent); // updating value of num1 by using screen content
      } else if (operator != null) { // Checking if operator exists
        num2 = parseFloat(currentOperand.textContent); // Set num2 upon second click
        operate(num1, operator, num2);
        num1 = result; // Update num1 with result to chain calculation
      }
      operator = button.id;
      previousOperand.textContent = `${num1} ${operator}`;
      currentOperand.textContent = ""; // clearing current operand for second operand
    });
  }
});

equals.addEventListener("click", () => {
  num2 = parseFloat(currentOperand.textContent); // updating num2 for final operation
  operate(num1, operator, num2);
  if (isNaN(result) || result === undefined || result == Infinity) {
    // to account for errors
    currentOperand.textContent = "Error";
  } else {
    currentOperand.textContent = result.toFixed(3);
  }
});
