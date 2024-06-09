import calculateSavings from "./calculateSavings";

test("cheap flat", () => {
  expect(
    calculateSavings({
      newFlatTotalPricePerMonth: 1000,
      currentMoveOutPricePerMonth: 150,
      newMoveOutPricePerMonth: 50,
    })
  ).toBe(12720);
});

test("expensive flat", () => {
  expect(
    calculateSavings({
      newFlatTotalPricePerMonth: 1900,
      currentMoveOutPricePerMonth: 300,
      newMoveOutPricePerMonth: 75,
    })
  ).toBe(-180);
});
