import finalizeCalculations from "./finalizeCalculations";

test("cheap flat", () => {
  const {
    totalCosts,
    newMoveOutPricePerMonth,
    currentMoveOutPricePerMonth,
    weSaved,
    weWillSave,
  } = finalizeCalculations({
    price: "1300",
    travelTicketMisha: "1",
    travelTicketNataliia: "0",
    newFlatNoticePeriod: "30",
    label: "A",
    daysBeforeMoveIn: "30",
  });

  expect(totalCosts).toBe(1548);
  expect(currentMoveOutPricePerMonth).toBe(195);
  expect(newMoveOutPricePerMonth).toBe(65);
  expect(weSaved).toBe(2457);
  expect(weWillSave).toBe(8250);
});

test("expensive flat", () => {});
