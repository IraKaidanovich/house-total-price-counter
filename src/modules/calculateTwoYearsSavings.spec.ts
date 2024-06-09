import calculateTwoYearsSavings from "./calculateTwoYearsSavings";

test("cheap flat", () => {
  expect(
    calculateTwoYearsSavings({
      newFlatTotalPrice: 1900,
      currentMoveOutPrice: 100,
      newMoveOutPrice: 50,
    })
  ).toBe(12600);
});

test("expensive flat", () => {
  expect(
    calculateTwoYearsSavings({
      newFlatTotalPrice: 2100,
      currentMoveOutPrice: 300,
      newMoveOutPrice: 250,
    })
  ).toBe(3000);
});
