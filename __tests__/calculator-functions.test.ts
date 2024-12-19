import { describe, it, expect } from "vitest";
import { operate } from "../src/lib/calculator-functions";

describe("operate", () => {
  it("performs addition", () => {
    expect(operate("+", 1.23456, 2.34567)).toBeCloseTo(3.58023, 5);
  });

  it("performs subtraction", () => {
    expect(operate("-", 5, 3.4567)).toBeCloseTo(1.5433, 5);
  });

  it("performs multiplication", () => {
    expect(operate("*", 1.23456, 2)).toBeCloseTo(2.46912, 5);
  });

  it("performs division", () => {
    expect(operate("/", 10, 2)).toBeCloseTo(5, 5);
    expect(operate("/", 10, 0)).toBeNaN();
  });

  it("returns NaN for unsupported operators", () => {
    expect(operate("%", 10, 2)).toBeNaN();
  });
});
