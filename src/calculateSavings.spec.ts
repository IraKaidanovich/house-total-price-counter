import calculateSavings from "./calculateSavings";

test("cheap flat", () => {
  expect(calculateSavings(1000, 100)).toBe(14400);
});

test("expensive flat", () => {
  expect(calculateSavings(2100, 75)).toBe(1500);
});

test("too expensive flat", () => {
  expect(calculateSavings(3000, 150)).toBe(-10200);
});
