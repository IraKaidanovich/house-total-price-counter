import calculateSavings from "./calculateSavings";

test("cheap flat", () => {
  expect(calculateSavings(1000)).toBe(15600);
});

test("expensive flat", () => {
  expect(calculateSavings(2100)).toBe(2400);
});

test("too expensive flat", () => {
  expect(calculateSavings(3000)).toBe(-8400);
});
