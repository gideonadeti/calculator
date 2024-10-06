import { KeyProps } from "../types";
import { operators } from "../lib/calculator-data";

export default function Key({
  keyData: { id, value },
  handleKeyClick,
}: KeyProps) {
  const isOperator = operators.includes(value as string);

  return (
    <button
      className={`btn fs-5 border rounded ${isOperator ? "text-primary" : ""}`}
      id={id}
      onClick={() => handleKeyClick(value as string)}
    >
      {value}
    </button>
  );
}
