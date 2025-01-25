// defining basic functions for the calculator

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    if (b === 0) return "Dont divide by zero!"; 
    return a / b;
}

let num1;
let operator;
let num2;

function operate (num1, operator, num2) {
    switch (operator) {
        case "+":
            console.log(add(num1,num2));
            break;
    
        case "-":
            console.log(subtract(num1,num2));
            break;
    
        case "*":
            console.log(multiply(num1,num2));
            break;
    
        case "/":
            console.log(divide(num1,num2));
            break;
        default:
            console.log("Enter a operator");
    }
}

