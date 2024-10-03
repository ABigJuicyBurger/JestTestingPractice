import { capitalize } from "./capitalize.js";

test("capitalizes first letter of the string", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
  expect(capitalize("a")).toBe("A");
  expect(capitalize("")).toBe("");
});
