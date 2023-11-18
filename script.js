let expression = '';
const screen = document.getElementById('screen');

function appendNumber(number) {
  expression += number;
  screen.value = expression;
}

function appendOperator(operator) {
  if (expression === '') return;

  const lastChar = expression[expression.length - 1];
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    expression = expression.slice(0, -1);
  }

  expression += operator;
  screen.value = expression;
}

function calculate() {
  if (expression === '') return;

  const result = eval(expression);
  screen.value = result;
  expression = '';
}

function clearScreen() {
  expression = '';
  screen.value = '';
}
