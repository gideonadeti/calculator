function add(a: number, b: number) {
  return parseFloat((a + b).toFixed(5));
}

function subtract(a: number, b: number) {
  return parseFloat((a - b).toFixed(5));
}

function multiply(a: number, b: number) {
  return parseFloat((a * b).toFixed(5));
}

function divide(a: number, b: number) {
  return b === 0 ? NaN : parseFloat((a / b).toFixed(5));
}

export function operate(
  operator: string,
  firstNumber: number,
  secondNumber: number
) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
    default:
      return NaN;
  }
}

export function isValidExpression(input: string) {
  const pattern = /^(-?\d+(\.\d+)?)[+\-x÷]+(-?\d+(\.\d+)?)$/;
  return pattern.test(input);
}
