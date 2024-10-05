import { KeyProps } from "../types";

export default function Key({ keyData: { id, value } }: KeyProps) {
  return (
    <button className="btn" id={id}>
      {value}
    </button>
  );
}
