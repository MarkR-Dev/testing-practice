import caesarCipher from "../modules/caesar-cipher.js";

describe("Caesar Cipher", () => {
  test("Module exists", () => {
    expect(caesarCipher).toBeDefined();
  });

  test("Caesar cipher function works", () => {
    expect(caesarCipher("sneak", 4)).toBe("wrieo");
    expect(caesarCipher("troops", 3)).toBe("wurrsv");
  });

  test("Wraps back to start of alphabet", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("qrtysi", 15)).toBe("fginhx");
    expect(caesarCipher("sword", 50)).toBe("qumpb");
    expect(caesarCipher("z", 1000)).toBe("l");
  });

  test("Case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
    expect(caesarCipher("RuLeR", 50)).toBe("PsJcP");
  });

  test("Punctuation remains unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(caesarCipher("TeStING !! AttenTION?? -- Hello?", 15)).toBe(
      "ItHiXCV !! PiitcIXDC?? -- Wtaad?"
    );
  });
});
