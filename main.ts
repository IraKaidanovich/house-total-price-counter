import { paymentForCurrentFlatPerMonth } from "./src/config";
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
    New flat:
      - Total price: ${totalCosts} euros (Difference: ${
    paymentForCurrentFlatPerMonth - totalCosts
  } euros)
      - Move out price (per month): ${newMoveOutPricePerMonth} euros (Difference: ${
    currentMoveOutPricePerMonth - newMoveOutPricePerMonth
  } euros)
    Total difference: ${Math.abs(totalDifference)} euros ${
    totalDifference > 0 ? "cheaper" : "more expensive"
  }
    Total savings (in a year, after we move out from the new flat): ${weWillSave} euros
  `);

  readline.close();
};

main();
