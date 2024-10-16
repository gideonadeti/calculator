import { useState } from "react";

import Display from "./Display";
import Keys from "./Keys";
import { keys, numbers, operators } from "../lib/calculator-data";
import { operate, isValidExpression } from "../lib/calculator-functions";

export default function Main() {
  const [display, setDisplay] = useState("0");

  function handleKeyClick(key: string | number) {
    const number = numbers.find((n) => n === key) as number;
    const operator = operators.find((o) => o === key) as string;

    switch (key) {
      case number:
        handleNumberClick(number);
        break;
      case operator:
        handleOperatorClick(operator);
        break;
      case "C":
        resetDisplay();
        break;
      case "⌫":
        handleBackspaceClick();
        break;
      case ".":
        handleDecimalClick();
        break;
      case "%":
        handlePercentClick();
        break;
      case "=":
        handleEqualsClick();
        break;
      default:
        break;
    }
  }

  function handleEqualsClick(nextOperator: string = "") {
    const displayOperators = display.match(/[+\-x÷]/g);

    if (displayOperators && displayOperators.length === 1) {
      const operator = displayOperators[0];

      const [firstNumber, secondNumber] = display.split(operator);

      const newOperator =
        operator === "x" ? "*" : operator === "÷" ? "/" : operator;

      const result = operate(
        newOperator,
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      );

      setDisplay(`${result.toString()}${nextOperator}`);
    } else if (displayOperators && displayOperators.length === 3) {
      if (displayOperators.includes("x") || displayOperators.includes("÷")) {
        const operator = displayOperators.includes("x") ? "x" : "÷";

        const [firstNumber, secondNumber] = display.split(operator);

        const newOperator =
          operator === "x" ? "*" : operator === "÷" ? "/" : operator;

        const result = operate(
          newOperator,
          parseFloat(firstNumber),
          parseFloat(secondNumber)
        );

        setDisplay(`${result.toString()}${nextOperator}`);
      }
    } else if (displayOperators && displayOperators.length === 2) {
      if (displayOperators.includes("x") || displayOperators.includes("÷")) {
        const operator = displayOperators.includes("x") ? "x" : "÷";

        const [firstNumber, secondNumber] = display.split(operator);

        const newOperator =
          operator === "x" ? "*" : operator === "÷" ? "/" : operator;

        const result = operate(
          newOperator,
          parseFloat(firstNumber),
          parseFloat(secondNumber)
        );

        setDisplay(`${result.toString()}${nextOperator}`);
      } else {
        const operator = displayOperators[1];

        const numOfMinus = display.match(/-/g)?.length || 0;

        if (numOfMinus === 2) {
          const secondMinusIndex = display.lastIndexOf("-");

          const firstNumber = parseFloat(display.slice(0, secondMinusIndex));
          const secondNumber = parseFloat(display.slice(secondMinusIndex + 1));

          const result = operate("-", firstNumber, secondNumber);

          return setDisplay(`${result}${nextOperator}`);
        }

        const [firstNumber, secondNumber] = display.split(operator);

        const result = operate(
          operator,
          parseFloat(firstNumber),
          parseFloat(secondNumber)
        );

        setDisplay(`${result.toString()}${nextOperator}`);
      }
    }
  }

  function handlePercentClick() {
    const lastChar = display.slice(-1);

    if (!(display === "0" || operators.includes(lastChar))) {
      const numberRegex = /-?\d+(\.\d+)?/g;
      const numbers = display.match(numberRegex);
      const lastNumberStr = numbers?.[numbers.length - 1];
      if (!lastNumberStr) return;

      const lastNumber = parseFloat(lastNumberStr);
      const percentage = lastNumber / 100;

      const modifiedExpression = display.replace(
        new RegExp(`${lastNumberStr}$`),
        percentage.toString()
      );

      setDisplay(modifiedExpression);
    }
  }

  function handleDecimalClick() {
    const lastChar = display.slice(-1);

    if (display === "0") {
      setDisplay("0.");
    } else if (operators.includes(lastChar)) {
      setDisplay(`${display}0.`);
    } else {
      const numbers = display.split(/[+\-x÷]/);
      const lastNumber = numbers[numbers.length - 1];
      if (!lastNumber.includes(".")) {
        setDisplay(`${display}.`);
      }
    }
  }

  function resetDisplay() {
    setDisplay("0");
  }

  function handleNumberClick(number: number) {
    if (display === "0") {
      setDisplay(number.toString());
    } else {
      setDisplay(`${display}${number}`);
    }
  }

  /**
   * Handles operator key clicks.
   * @param operator The operator key that was clicked.
   *
   * If the display is not "0" and the last character is not an operator,
   * appends the operator to the display.
   *
   * If the display is "0" and the operator is "-", sets the display to "-".
   *
   * If the last character is "x" or "÷", and the operator is "-",
   * appends the operator to the display.
   */
  function handleOperatorClick(operator: string) {
    const lastChar = display.slice(-1);

    if (isValidExpression(display)) {
      handleEqualsClick(operator);
    } else {
      if (display !== "0" && !"+-x÷".includes(lastChar)) {
        setDisplay(`${display}${operator}`);
      } else if (display === "0" && operator === "-") {
        setDisplay(`${operator}`);
      } else if ((lastChar === "x" || lastChar === "÷") && operator === "-") {
        setDisplay(`${display}${operator}`);
      }
    }
  }

  function handleBackspaceClick() {
    const lastChar = display.slice(-1);

    if (display.length > 1 && /[\d+\-x÷]/.test(lastChar)) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  }

  return (
    <main
      className="d-flex flex-column align-items-center justify-content-center mx-auto my-5 p-3 rounded border shadow-sm gap-3"
      style={{ maxWidth: "300px" }}
    >
      <Display display={display} />
      <Keys keysData={keys} handleKeyClick={handleKeyClick} />
    </main>
  );
}
