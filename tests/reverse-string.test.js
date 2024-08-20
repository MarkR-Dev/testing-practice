import reverseString from "../modules/reverse-string";

describe("Reverse String", () => {
  test("Module exists", () => {
    expect(reverseString).toBeDefined();
  });

  test("Function works", () => {
    expect(reverseString("triangle")).toBe("elgnairt");
  });

  test("Function works with different input", () => {
    expect(reverseString("circle")).toBe("elcric");
  });

  test("Throws if type of argument isn't a string", () => {
    expect(() => reverseString(123)).toThrow("You must provide a string");
    expect(() => reverseString()).toThrow("You must provide a string");
  });
});
