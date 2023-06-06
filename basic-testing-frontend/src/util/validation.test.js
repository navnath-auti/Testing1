import { it, expect } from "vitest";

import { validateNumber, validateString } from "./validation";

it("shoud throw an error if input is non numeric value", () => {
  const input = "1";

  const result = () => validateNumber(input);

  expect(result).toThrow();
});
