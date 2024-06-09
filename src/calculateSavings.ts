import {
  paymentForCurrentFlatPerMonth,
  savingsOfIlliaAndIra,
  savingsOfMother,
} from "./config";

export default ({
  newFlatTotalPricePerMonth,
  newMoveOutPricePerMonth,
  currentMoveOutPricePerMonth,
}: {
  newFlatTotalPricePerMonth: number;
  newMoveOutPricePerMonth: number;
  currentMoveOutPricePerMonth: number;
}): number => {
  const sharedSavings = savingsOfMother + savingsOfIlliaAndIra;

  const saveFromFlatExpenses =
    paymentForCurrentFlatPerMonth - newFlatTotalPricePerMonth;
  const loseFromMovings = currentMoveOutPricePerMonth + newMoveOutPricePerMonth;

  const weWillBeSavings =
    (saveFromFlatExpenses + sharedSavings - loseFromMovings) * 12;

  return Math.round(weWillBeSavings);
};
