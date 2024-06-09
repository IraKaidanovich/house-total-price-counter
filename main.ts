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
    weSaved,
    weWillSave,
  } = finalizeCalculations({
    price,
    label,
    travelTicketMisha,
    travelTicketNataliia,
    daysBeforeMoveIn,
    newFlatNoticePeriod,
  });

  const totalDifference =
    paymentForCurrentFlatPerMonth +
    currentMoveOutPricePerMonth -
    (totalCosts + newMoveOutPricePerMonth);

  console.log(`\n\n\n\n\n\n\n\n\n
  In provided move out days (${daysBeforeMoveIn}):
    Current flat:
    - Total price: ${paymentForCurrentFlatPerMonth} euros
    - Move out price (per month): ${currentMoveOutPricePerMonth} euros
    - We save (per year): ${weSaved} euros
    New flat:
      - Total price: ${totalCosts} euros (Difference: ${
    paymentForCurrentFlatPerMonth - totalCosts
  } euros)
      - Move out price (per month): ${newMoveOutPricePerMonth} euros (Difference: ${
    currentMoveOutPricePerMonth - newMoveOutPricePerMonth
  } euros)
      - We will save (per year): ${weWillSave} euros
    Total difference: ${Math.abs(totalDifference)} euros ${
    totalDifference > 0 ? "cheaper" : "more expensive"
  }
    Total savings (two years): ${weSaved + weWillSave} euros
  `);

  readline.close();
};

main();
