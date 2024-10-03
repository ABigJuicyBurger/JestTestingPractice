import { reverseString } from "./reverseString.js";

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("hello world")).toBe("dlrow olleh");
  expect(reverseString("12345")).toBe("54321");
  expect(reverseString("")).toBe("");
});
