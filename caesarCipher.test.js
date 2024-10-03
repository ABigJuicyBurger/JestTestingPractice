import { caesarCipher } from "./caesarCipher";

describe("caesarCipher", () => {
  test("shifts characters correctly", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
    expect(caesarCipher("xyz", 1)).toBe("yza");
  });

  test("preserves case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("handles punctuation and spaces", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("works with large shift factors", () => {
    expect(caesarCipher("abc", 27)).toBe("bcd");
  });
});
