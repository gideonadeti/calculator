import { KeyProps } from "../types";
import { specialKeys } from "../lib/calculator-data";

export default function Key({
  keyData: { id, value },
  handleKeyClick,
}: KeyProps) {
  const isSpecialKey = specialKeys.includes(value as string);

  return (
    <button
      className={`btn fs-5 border rounded ${
        isSpecialKey ? "text-primary" : ""
      }`}
      id={id}
      onClick={() => handleKeyClick(value as string)}
    >
      {value}
    </button>
  );
}
