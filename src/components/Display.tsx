import { DisplayProps } from "../types";

export default function Display({ input, output }: DisplayProps) {
  return (
    <div id="display">
      <span>{output}</span>
      <span>{input}</span>
    </div>
  );
}
