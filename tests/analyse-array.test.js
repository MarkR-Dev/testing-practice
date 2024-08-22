import analyseArray from "../modules/analyse-array";

describe("Analyse Array", () => {
  test("Module exists", () => {
    expect(analyseArray).toBeDefined();
  });

  test("Function works", () => {
    expect(analyseArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });

    expect(analyseArray([1, 5, 7, 3, 9])).toStrictEqual({
      average: 5,
      min: 1,
      max: 9,
      length: 5,
    });
  });

  test("Empty array returns desired output", () => {
    expect(analyseArray([])).toStrictEqual({
      average: null,
      min: null,
      max: null,
      length: 0,
    });
  });

  test("Should throw if no array passed in", () => {
    expect(() => analyseArray()).toThrow("Must provide an array");
  });
});
