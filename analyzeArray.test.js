import { analyzeArray } from "./analyzeArray";

describe("analyzeArray", () => {
  test("analyzes an array of numbers", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("handles an array with one element", () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("handles an empty array", () => {
    const result = analyzeArray([]);
    expect(result).toEqual({
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0,
    });
  });
});
