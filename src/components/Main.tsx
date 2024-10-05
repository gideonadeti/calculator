import Display from "./Display";
import Keys from "./Keys";
import { keys } from "../lib/calculator-data";

export default function Main() {
  return (
    <main
      className="d-flex flex-column align-items-center justify-content-center mx-auto my-5 p-3 rounded border shadow-sm gap-3"
      style={{ maxWidth: "300px" }}
    >
      <Display input="" output="" />
      <Keys keysData={keys} />
    </main>
  );
}
