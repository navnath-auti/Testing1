import { it, expect } from "vitest";
import { add } from "./math";
// the first parameter of it is string in that you define what your test will test and what is your expectations

it("it should sumarize all number values in an array", () => {
  // here we writing our actual testing code
  // Arrange
  const number = [1, 2, 3];
  const expectedValue = number.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );

  // Act
  const result = add(number);

  // Assert
  expect(result).toBe(expectedValue);
});

it("should yield NaN if a least one invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedValue = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );

  expect(result).toBe(expectedValue);
});

it("should yield 0 if empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultfn = () => {
    add();
  };

  expect(resultfn).toThrow();
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
