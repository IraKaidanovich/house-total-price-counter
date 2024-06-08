import {
  paymentForCurrentFlatPerMonth,
  savingsOfIlliaAndIra,
  savingsOfMother,
} from "./config";

export default (
  totalCosts: number,
  moveOutPricePerMonth: number,
  currentMoveOutPricePerMonth: number
): number => {
  const sharedSavings = savingsOfMother + savingsOfIlliaAndIra;

  const howMuchMoveOutPriceCheaper =
    currentMoveOutPricePerMonth - moveOutPricePerMonth;

  const weWillBeSavings =
    (paymentForCurrentFlatPerMonth -
      totalCosts +
      sharedSavings +
      howMuchMoveOutPriceCheaper) *
    12;

  return Math.round(weWillBeSavings);
};
