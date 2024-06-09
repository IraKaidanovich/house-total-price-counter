import finalizeCalculations from "./finalizeCalculations";

beforeEach(() => {
  global.resetConfig();
});

test("random flat", () => {
  const { totalCosts, newMoveOutPrice, currentMoveOutPrice, weWillSave } =
    finalizeCalculations({
      price: "1500",
      travelTicketMisha: "1",
      travelTicketNataliia: "2",
      newFlatNoticePeriod: "30",
      label: "B",
      daysBeforeMoveIn: "30",
    });

  expect(totalCosts).toBe(1741);
  expect(currentMoveOutPrice).toBe(181);
  expect(newMoveOutPrice).toBe(73);
  expect(weWillSave).toBe(7008);
});w
