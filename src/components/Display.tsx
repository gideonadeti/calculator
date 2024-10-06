import { DisplayProps } from "../types";

export default function Display({ input, output }: DisplayProps) {
  return (
    <div
      className="border rounded p-1 fs-4 text-end d-flex flex-column justify-content-between bg-light"
      style={{ width: "100%", height: "12vh" }}
    >
      <span style={{ minHeight: "5vh" }}>{output}</span>
      <span>{input}</span>
    </div>
  );
}
