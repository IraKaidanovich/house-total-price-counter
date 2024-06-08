import finalizeCalculations from "./finalizeCalculations";

test("cheap flat", () => {
  const {
    totalCosts,
    newMoveOutPricePerMonth,
    currentMoveOutPricePerMonth,
    realisticSavingsPerYear,
    optimisticSavingsPerYear,
  } = finalizeCalculations({
    price: "1300",
    travelTicketMisha: "1",
    travelTicketNataliia: "0",
    newFlatNoticePeriod: "30",
    label: "A",
    daysBeforeMoveIn: "30",
  });

  expect(totalCosts).toBe(1548);
  expect(currentMoveOutPricePerMonth.realistic).toBe(195);
  expect(currentMoveOutPricePerMonth.optimistic).toBe(116);
  expect(newMoveOutPricePerMonth.realistic).toBe(65);
  expect(newMoveOutPricePerMonth.optimistic).toBe(65);
  expect(realisticSavingsPerYear).toBe(10593);
  expect(optimisticSavingsPerYear).toBe(9642);
});

test("expensive flat", () => {});
