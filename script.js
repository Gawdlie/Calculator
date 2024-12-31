const button0 = document.querySelector(".number0");
const button1 = document.querySelector(".number1");
const button2 = document.querySelector(".number2");
const button3 = document.querySelector(".number3");
const button4 = document.querySelector(".number4");
const button5 = document.querySelector(".number5");
const button6 = document.querySelector(".number6");
const button7 = document.querySelector(".number7");
const button8 = document.querySelector(".number8");
const button9 = document.querySelector(".number9");

const buttonD = document.querySelector(".division");
const buttonM = document.querySelector(".multiplication");
const buttonS = document.querySelector(".subtraction");
const buttonA = document.querySelector(".addition");
const buttonE = document.querySelector(".equals");
const display = document.querySelector(".display");

let operand1 = '';
let operand2 = '';
let operator = '';

function getComputation(op1, op2, operator) {
  if(operator === '+') {
    return parseInt(op1) + parseInt(op2);
  }
  else if(operator === '-') {
    return parseInt(op1) - parseInt(op2);
  }
  else if(operator === '/') {
    if(op2 === 0) {
      return "NOT POSSIBLE!";
    }
    else {
      return parseInt(op1) / parseInt(op2);
    }
  }
  else {
    return parseInt(op1) * parseInt(op2);
  }
}

buttonE.disabled = true;

button0.addEventListener("click", () => {
  if(operator === '') {
    operand1 += button0.innerHTML.toString();
  }
  else {
    operand2 += button0.innerHTML.toString();
    buttonE.disabled = false;
  }

  display.textContent += button0.innerHTML;
});

button1.addEventListener("click", () => {
  if(operator === '') {
    operand1 += button1.innerHTML.toString();
  }
  else {
    operand2 += button1.innerHTML.toString();
    buttonE.disabled = false;
  }

  display.textContent += button1.innerHTML;
});

button2.addEventListener("click", () => {
  if(operator === '') {
    operand1 += button2.innerHTML.toString();
  }
  else {
    operand2 += button2.innerHTML.toString();
    buttonE.disabled = false;
  }

  display.textContent += button2.innerHTML;
});

button3.addEventListener("click", () => {
  if(operator === '') {
    operand1 += button3.innerHTML.toString();
  }
  else {
    operand2 += button3.innerHTML.toString();
    buttonE.disabled = false;
  }

  display.textContent += button3.innerHTML;
});

button4.addEventListener("click", () => {
  if(operator === '') {
    operand1 += button4.innerHTML.toString();
  }
  else {
    operand2 += button4.innerHTML.toString();
    buttonE.disabled = false;
  }

  display.textContent += button4.innerHTML;
});

button5.addEventListener("click", () => {
  if(operator === '') {
    operand1 += button5.innerHTML.toString();
  }
  else {
    operand2 += button5.innerHTML.toString();
    buttonE.disabled = false;
  }

  display.textContent += button5.innerHTML;
});

button6.addEventListener("click", () => {
  if(operator === '') {
    operand1 += button6.innerHTML.toString();
  }
  else {
    operand2 += button6.innerHTML.toString();
    buttonE.disabled = false;
  }

  display.textContent += button6.innerHTML;
});

button7.addEventListener("click", () => {
  if(operator === '') {
    operand1 += button7.innerHTML.toString();
  }
  else {
    operand2 += button7.innerHTML.toString();
    buttonE.disabled = false;
  }

  display.textContent += button7.innerHTML;
});

button8.addEventListener("click", () => {
  if(operator === '') {
    operand1 += button8.innerHTML.toString();
  }
  else {
    operand2 += button8.innerHTML.toString();
    buttonE.disabled = false;
  }

  display.textContent += button8.innerHTML;
});

button9.addEventListener("click", () => {
  if(operator === '') {
    operand1 += button9.innerHTML.toString();
  }
  else {
    operand2 += button9.innerHTML.toString();
    buttonE.disabled = false;
  }

  display.textContent += button9.innerHTML;
});

buttonD.addEventListener("click", () => {
  operator = buttonD.innerHTML;
  buttonD.disabled = true;
  buttonM.disabled = true;
  buttonS.disabled = true;
  buttonA.disabled = true;

  if(operand2 === '') {
    button0.disabled = false;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }

  display.textContent += buttonD.innerHTML.toString();
});

buttonM.addEventListener("click", () => {
  operator = buttonM.innerHTML;
  buttonD.disabled = true;
  buttonM.disabled = true;
  buttonS.disabled = true;
  buttonA.disabled = true;

  if(operand2 === '') {
    button0.disabled = false;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }

  display.textContent += buttonM.innerHTML.toString();
});

buttonS.addEventListener("click", () => {
  operator = buttonS.innerHTML;
  buttonD.disabled = true;
  buttonM.disabled = true;
  buttonS.disabled = true;
  buttonA.disabled = true;

  if(operand2 === '') {
    button0.disabled = false;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }

  display.textContent += buttonS.innerHTML.toString();
});

buttonA.addEventListener("click", () => {
  operator = buttonA.innerHTML;
  buttonD.disabled = true;
  buttonM.disabled = true;
  buttonS.disabled = true;
  buttonA.disabled = true;

  if(operand2 === '') {
    button0.disabled = false;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
  }

  display.textContent += buttonA.innerHTML.toString();
});

buttonE.addEventListener("click", () => {
  button0.disabled = true;
  button1.disabled = true;
  button2.disabled = true;
  button3.disabled = true;
  button4.disabled = true;
  button5.disabled = true;
  button6.disabled = true;
  button7.disabled = true;
  button8.disabled = true;
  button9.disabled = true;

  buttonD.disabled = false;
  buttonM.disabled = false;
  buttonS.disabled = false;
  buttonA.disabled = false;
  buttonE.disabled = true;
  operand1 = getComputation(operand1, operand2, operator);

  display.textContent = operand1;
  operator = '';
  operand2 = '';
});