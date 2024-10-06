import { useState } from "react";

import Display from "./Display";
import Keys from "./Keys";
import { keys } from "../lib/calculator-data";

export default function Main() {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");

  function handleKeyClick(key: string) {
    switch (key) {
      case "C":
        resetDisplay();
        break;
      default:
        break;
    }
  }
  function resetDisplay() {
    setInput("0");
    setOutput("");
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
