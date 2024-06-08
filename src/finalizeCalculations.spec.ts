import finalizeCalculations from "./finalizeCalculations";

test("cheap flat", () => {
  const {
    totalCosts,
    newMoveOutPricePerMonth,
    currentMoveOutPricePerMonth,
    weSavedWithProvidedMoveDays,
    weSavedWith45MoveDays,
    weWillSaveWithProvidedMoveDays,
    weWillSaveWith45MoveDays,
  } = finalizeCalculations({
    price: "1300",
    travelTicketMisha: "1",
    travelTicketNataliia: "0",
    newFlatNoticePeriod: "30",
    label: "A",
    daysBeforeMoveIn: "30",
  });

  expect(totalCosts).toBe(1548);
  expect(currentMoveOutPricePerMonth.withProvidedDays).toBe(195);
  expect(currentMoveOutPricePerMonth.with45Days).toBe(116);
  expect(newMoveOutPricePerMonth.withProvidedDays).toBe(65);
  expect(newMoveOutPricePerMonth.with45Days).toBe(65);
  expect(weSavedWithProvidedMoveDays).toBe(2457);
  expect(weSavedWith45MoveDays).toBe(3407);
  expect(weWillSaveWithProvidedMoveDays).toBe(8250);
  expect(weWillSaveWith45MoveDays).toBe(8250);
});

test("expensive flat", () => {});
