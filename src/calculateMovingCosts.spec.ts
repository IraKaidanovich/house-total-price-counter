import calculateMovingCost from "./calculateMovingCosts";

test("we have plenty of time", () => {
  expect(calculateMovingCost("70")).toBe(79);
});

test("we have to move in today", () => {
  expect(calculateMovingCost("0")).toBe(317);
});

test("we have a month to move in", () => {
  expect(calculateMovingCost("30")).toBe(195);
});

test("we have 1.5 months to move in", () => {
  expect(calculateMovingCost("45")).toBe(116);
});

test("unexpected input", () => {
  expect(() => calculateMovingCost("45 days")).toThrow(
    'Please provide number for days before moving in, you provided: "45 days"'
  );
});
