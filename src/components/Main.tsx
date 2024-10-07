import { useState } from "react";

import Display from "./Display";
import Keys from "./Keys";
import { keys, numbers, operators } from "../lib/calculator-data";

export default function Main() {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");

  function handleKeyClick(key: string | number) {
    const number = numbers.find((n) => n === key) as number;
    const operator = operators.find((o) => o === key) as string;

    switch (key) {
      case "C":
        resetDisplay();
        break;
      case number:
        handleNumberClick(number);
        break;
      case operator:
        handleOperatorClick(operator);
        break;
      default:
        break;
    }
  }

  function resetDisplay() {
    setInput("0");
    setOutput("");
  }

  function handleNumberClick(number: number) {
    if (input === "0") {
      setInput(number.toString());
    } else {
      setInput(`${input}${number}`);
    }
  }

  /**
   * Handles operator key clicks.
   * @param operator The operator key that was clicked.
   *
   * If the input is not "0" and the last character is not an operator,
   * appends the operator to the input.
   *
   * If the input is "0" and the operator is "-", sets the input to "-".
   *
   * If the last character is "x" or "÷", and the operator is "-",
   * appends the operator to the input.
   */
  function handleOperatorClick(operator: string) {
    const lastChar = input.slice(-1);

    if (input !== "0" && !"+-x÷".includes(lastChar)) {
      setInput(`${input}${operator}`);
    } else if (input === "0" && operator === "-") {
      setInput(`${operator}`);
    } else if ((lastChar === "x" || lastChar === "÷") && operator === "-") {
      setInput(`${input}${operator}`);
    }
  }

  return (
    <main
      className="d-flex flex-column align-items-center justify-content-center mx-auto my-5 p-3 rounded border shadow-sm gap-3"
      style={{ maxWidth: "300px" }}
    >
      <Display input={input} output={output} />
      <Keys keysData={keys} handleKeyClick={handleKeyClick} />
    </main>
  );
}
