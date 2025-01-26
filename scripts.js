// defining basic functions for the calculator

let num1;
let operator;
let num2;
let result;

function add (a,b) {
    result = a + b;
    return a + b;
}

function subtract (a,b) {
    result = a - b;
    return a - b;
}

function multiply (a,b) {
    result = a * b;
    return a * b;
}

function divide (a,b) {
    if (b === 0) return "Dont divide by zero!"; 
    result = a / b;
    return a / b;
}


function operate (num1, operator, num2) {
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
            divide(num1, num2)
            console.log(divide(num1,num2));
            break;
        default:
            console.log("Enter a operator");
    }
}

const display = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("clr");
const equals = document.getElementById("equals");
const previousOperand = document.querySelector('.previous-operand')
const currentOperand = document.querySelector('.current-operand')

// Button functionality for the calculator

clear.addEventListener("click", () => {
    currentOperand.textContent = "";
    previousOperand.textContent = "";
    num1 = 0;
    num2 = 0;
    result = 0;
})

buttons.forEach(button => {
    if (button.classList.contains("numbers")) {
        button.addEventListener("click", () => {
            currentOperand.textContent += button.textContent;
            console.log(button.textContent)
        })
    } else if (button.classList.contains("operators")) {
        button.addEventListener("click", () => {
            num1 = parseFloat(currentOperand.textContent);
            operator = button.textContent;
            previousOperand.textContent = `${currentOperand.textContent} ${operator}`
            currentOperand.textContent = "";
        })
    }
})

equals.addEventListener("click", () => {
    num2 = parseFloat(currentOperand.textContent);
    operate(num1, operator, num2);
    currentOperand.textContent = result;
    
})


// buttons.forEach(button => {
//     if (button.classList.contains("numbers")) {
//         button.addEventListener("click", () => { 
//             display.textContent += button.id
//         });
//     }
    
// })

// buttons.forEach(button => {
//     if (button.classList.contains("operators")) {
//         button.addEventListener("click", () => {
//             num1 = parseFloat(display.textContent);
//             display.textContent = '';
//             previousOperand.textContent = String(num1);
//             operator = button.id;
//         })
//     }
// })

// equals.addEventListener("click", () => {
//     num2 = parseFloat(display.textContent);
//     result = operate(num1,operator,num2);
//     display.textContent = result
// })