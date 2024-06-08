import calculateMovingCost from "./src/calculateMovingCosts";
import calculateSavings from "./src/calculateSavings";
import calculateTotalCosts from "./src/calculateTotalCosts";
import {
  currentFlatNoticePeriodDays,
  paymentForCurrentFlatPerMonth,
  savingsOfIlliaAndIra,
  savingsOfMother,
} from "./src/config";
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
    noticePeriod,
  } = await getInputs(readline);

  const totalCosts = calculateTotalCosts({
    price,
    label,
    travelTicketMisha,
    travelTicketNataliia,
    daysBeforeMoveIn,
  });

  const savingsPerYear = calculateSavings(totalCosts);
  const moveOutPricePerMonth = calculateMovingCost(
    totalCosts,
    "30",
    noticePeriod
  );
  const currentMoveOutPricePerMonth = calculateMovingCost(
    paymentForCurrentFlatPerMonth,
    "30",
    currentFlatNoticePeriodDays.toString()
  );

  console.log(`
    Total price: ${totalCosts} euros (Right now we pay ${paymentForCurrentFlatPerMonth} euros) (Difference: ${
    totalCosts - paymentForCurrentFlatPerMonth
  }),
    Move out price (per month): ${moveOutPricePerMonth} euros (For current flat it is ${currentMoveOutPricePerMonth} euros),
    We will be saving per year: ${savingsPerYear} euros (Right now we save ${
    (savingsOfMother + savingsOfIlliaAndIra) * 12
  } euros)
  `);

  readline.close();
};

main();
