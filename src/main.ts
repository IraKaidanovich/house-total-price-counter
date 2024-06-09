import config from "./config";
import finalizeCalculations from "./modules/finalizeCalculations";
import getInputs from "./getInputs";

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

  const { totalCosts, newMoveOutPrice, currentMoveOutPrice, weWillSave } =
    finalizeCalculations({
      price,
      label,
      travelTicketMisha,
      travelTicketNataliia,
      daysBeforeMoveIn,
      newFlatNoticePeriod,
    });

  const totalPriceDifference = config.paymentForCurrentFlat - totalCosts;
  const moveOutPriceDifference = currentMoveOutPrice - newMoveOutPrice;

  const totalDifference =
    config.paymentForCurrentFlat +
    currentMoveOutPrice -
    (totalCosts + newMoveOutPrice);

  console.log(`\n\n\n\n\n\n\n\n\n
  In provided move out days (${daysBeforeMoveIn}):
    Current flat:
      - Total price: ${config.paymentForCurrentFlat} euros
      - Move out price (per month): ${currentMoveOutPrice} euros
    New flat:
      - Total price: ${totalCosts} euros (${Math.abs(totalPriceDifference)} ${
    totalPriceDifference < 0 ? "more expensive" : "cheaper"
  } euros)
      - Move out price (per month): ${newMoveOutPrice} euros (${Math.abs(
    moveOutPriceDifference
  )} ${moveOutPriceDifference < 0 ? "more expensive" : "cheaper"} euros)
    Total difference: ${Math.abs(totalDifference)} euros ${
    totalDifference > 0 ? "cheaper" : "more expensive"
  }
    Total savings (in two years from now): ${weWillSave} euros
  `);

  readline.close();
};

main();
