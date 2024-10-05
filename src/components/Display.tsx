import { DisplayProps } from "../types";

export default function Display({ input, output }: DisplayProps) {
  return (
    <div
      className="rounded border p-3"
      style={{ width: "100%", height: "12vh" }}
    >
      <span>{output}</span>
      <span>{input}</span>
    </div>
  );
}
