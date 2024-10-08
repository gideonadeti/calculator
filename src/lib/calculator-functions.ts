function add(a: number, b: number): number {
  return parseFloat((a + b).toFixed(2));
}
function subtract(a: number, b: number): number {
  return parseFloat((a - b).toFixed(2));
}
function multiply(a: number, b: number): number {
  return parseFloat((a * b).toFixed(2));
}
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return parseFloat((a / b).toFixed(5));
}
export function operate(operator: string, firstNumber: number, secondNumber: number): number {
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
      throw new Error("Invalid operator");
  }
}
export function isValidExpression(input: string): boolean {
  const pattern = /^(-?\d+(\.\d+)?)[+\-x÷]+(-?\d+(\.\d+)?)$/;
  return pattern.test(input);
}

