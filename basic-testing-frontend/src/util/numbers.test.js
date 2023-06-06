import { describe, it, expect } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should transform a string number to a number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });

  it("should yield NaN for non- transfomable values", () => {
    const input = "invalid";

    const result = transformToNumber(input);

    expect(result).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is proviede", () => {
    const numberValues = ["1", "2"];

    const cleaneNumbers = cleanNumbers(numberValues);

    expect(cleaneNumbers[0]).toBeTypeOf("number");
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
