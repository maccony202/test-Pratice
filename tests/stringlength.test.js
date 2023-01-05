const stringLength = require('../stringLength');

describe("We are", () => {
  test("testing the stringLength function", () => {
    expect(stringLength("I am well")).toBe(7);
  });
  test("testing the stringLength function for empty sring", () => {
    expect(stringLength("")).toEqual("Invalid string");
  });
  test("testing the stringLength function for empty sring", () => {
    expect(stringLength("I am well, Thank you")).toEqual("String is too long");
  });
});