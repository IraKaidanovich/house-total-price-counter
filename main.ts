import {
  paymentForCurrentFlatPerMonth,
  savingsOfIlliaAndIra,
  savingsOfMother,
} from "./src/config";
import finalizeCalculations from "./src/finalizeCalculations";
import getInputs from "./src/getInputs";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  const {
    price,
    label,
    travelTicketMisha,
    travelTicketNataliia,
    daysBeforeMoveIn,
    newFlatNoticePeriod,
  } = await getInputs(readline);

  const {
    totalCosts,
    newMoveOutPricePerMonth,
    currentMoveOutPricePerMonth,
    realisticSavingsPerYear,
    optimisticSavingsPerYear,
  } = finalizeCalculations({
    price,
    label,
    travelTicketMisha,
    travelTicketNataliia,
    daysBeforeMoveIn,
    newFlatNoticePeriod,
  });

  console.log(`
    Total price: ${totalCosts} euros (Right now we pay ${paymentForCurrentFlatPerMonth} euros) (Difference: ${
    totalCosts - paymentForCurrentFlatPerMonth
  }),
    Move out price (per month): in 1 month - ${
      newMoveOutPricePerMonth.realistic
    } euros, in 1.5 months - ${
    newMoveOutPricePerMonth.optimistic
  } (For current flat it is in 1 month - ${
    currentMoveOutPricePerMonth.realistic
  } euros, in 1.5 month - ${currentMoveOutPricePerMonth.optimistic} euros),
    Right now we save: Right now we save ${
      (savingsOfMother + savingsOfIlliaAndIra) * 12
    } euros,
    We will be saving per year (optimistic): ${optimisticSavingsPerYear} euros,
    We will be saving per year (realistic): ${realisticSavingsPerYear} euros
  `);

  readline.close();
};

main();
