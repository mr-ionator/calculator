const num1 = 0;
const op = 0;
const num3 = 0;

function operate(num1, op, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (op) {
    case '+':
      return add(num1, num2);
    case '-':
      return sub(num1, num2);
    case 'x':
      return mul(num1, num2);
    case '÷':
      if (num2 === 0) return null;
      return div(a, b);
    default:
      return null;
  }
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}
