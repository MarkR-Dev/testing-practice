import calculator from "../modules/calculator";

describe("Calculator", () => {
  test("Module exists", () => {
    expect(calculator).toBeDefined();
  });

  test("Has add method", () => {
    expect(calculator.add).toBeDefined();
  });

  test("Add method works", () => {
    expect(calculator.add(5, 50)).toBe(55);
  });

  test("Add method works with different input", () => {
    expect(calculator.add(4, 2000)).toBe(2004);
  });

  test("Has subtract method", () => {
    expect(calculator.subtract).toBeDefined();
  });

  test("Subtract method works", () => {
    expect(calculator.subtract(44, 2)).toBe(42);
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.subtract(-5, 4)).toBe(-9);
    expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
  });

  test("Has divide method", () => {
    expect(calculator.divide).toBeDefined();
  });

  test("Divide method works", () => {
    expect(calculator.divide(50, 2)).toBe(25);
    expect(calculator.divide(100, 10)).toBe(10);
    expect(calculator.divide(-50, 5)).toBe(-10);
  });

  test("Divide by 0 throws", () => {
    expect(() => calculator.divide(3, 0)).toThrow("Cannot divide by zero");
  });

  test("Has multiply method", () => {
    expect(calculator.multiply).toBeDefined();
  });

  test("Multiply method works", () => {
    expect(calculator.multiply(25, 4)).toBe(100);
    expect(calculator.multiply(10, 50)).toBe(500);
    expect(calculator.multiply(4, 0)).toBe(0);
  });
});
