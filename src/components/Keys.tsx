import { KeysProps } from "../types";
import Key from "./Key";

export default function Keys({ keysData, handleKeyClick }: KeysProps) {
  return (
    <div className="keys">
      {keysData.map((keyData) => (
        <Key
          key={keyData.id}
          keyData={keyData}
          handleKeyClick={handleKeyClick}
        />
      ))}
    </div>
  );
}
