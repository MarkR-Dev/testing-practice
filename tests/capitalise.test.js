import capitalise from "../modules/capitalise";

describe("Capitalise", () => {
  test("Module exists", () => {
    expect(capitalise).toBeDefined();
  });

  test("Function works", () => {
    expect(capitalise("hello")).toBe("Hello");
  });

  test("Function works with different input", () => {
    expect(capitalise("world")).toBe("World");
  });

  test("Throws if type of argument isn't a string", () => {
    expect(() => capitalise(123)).toThrow("You must provide a string");
    expect(() => capitalise()).toThrow("You must provide a string");
  });
});
