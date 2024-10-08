import { DisplayProps } from "../types";

export default function Display({ display }: DisplayProps) {
  return (
    <div
      className="border rounded p-1 fs-4 text-end bg-light overflow-hidden"
      style={{ width: "100%" }}
    >
      <span id="display">{display}</span>
    </div>
  );
}
