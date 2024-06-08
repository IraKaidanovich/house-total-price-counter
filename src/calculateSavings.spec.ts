import calculateSavings from "./calculateSavings";

test("cheap flat", () => {
  expect(calculateSavings(1000, 91, 195)).toBe(16848);
});

test("expensive flat", () => {
  expect(calculateSavings(2100, 100, 75)).toBe(2100);
});

test("too expensive flat", () => {
  expect(calculateSavings(3000, 150, 200)).toBe(-7800);
});
