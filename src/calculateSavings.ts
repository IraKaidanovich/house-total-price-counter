import {
  paymentForCurrentFlatPerMonth,
  savingsOfIlliaAndIra,
  savingsOfMother,
} from "./config";

export default (totalCosts: number, moveOutPricePerMonth: number): number => {
  const sharedSavings = savingsOfMother + savingsOfIlliaAndIra;

  const weWillBeSavings =
    (paymentForCurrentFlatPerMonth -
      totalCosts +
      sharedSavings -
      moveOutPricePerMonth) *
    12;

  return Math.round(weWillBeSavings);
};
