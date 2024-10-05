import { KeysProps } from "../types";
import Key from "./Key";

export default function Keys({ keysData }: KeysProps) {
  return (
    <div className="keys">
      {keysData.map((keyData) => (
        <Key key={keyData.id} keyData={keyData} />
      ))}
    </div>
  );
}
