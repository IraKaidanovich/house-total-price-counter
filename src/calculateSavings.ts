export default (totalCosts: number): number => {
  const currentSpending = 1900;
  const savingsOfMother = 100;
  const savingsOfIlliaAndIra = 300;
  const sharedSavings = savingsOfMother + savingsOfIlliaAndIra;

  const weWillBeSavings = (currentSpending - totalCosts + sharedSavings) * 12;

  return weWillBeSavings;
};
