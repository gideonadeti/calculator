import Display from "./Display";
import Keys from "./Keys";
import { keys } from "../lib/calculator-data";

export default function Main() {
  return (
    <main className="flex-grow-1">
      <Display input="" output="" />
      <Keys keysData={keys} />
    </main>
  );
}
