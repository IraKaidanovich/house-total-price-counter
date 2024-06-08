import {
  paymentForCurrentFlatPerMonth,
  savingsOfIlliaAndIra,
  savingsOfMother,
} from "./config";

export default (totalCosts: number): number => {
  const sharedSavings = savingsOfMother + savingsOfIlliaAndIra;

  const weWillBeSavings =
    (paymentForCurrentFlatPerMonth - totalCosts + sharedSavings) * 12;

  return weWillBeSavings;
};
