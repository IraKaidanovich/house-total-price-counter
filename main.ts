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
    weSavedWithProvidedMoveDays,
    weSavedWith45MoveDays,
    weWillSaveWithProvidedMoveDays,
    weWillSaveWith45MoveDays,
  } = finalizeCalculations({
    price,
    label,
    travelTicketMisha,
    travelTicketNataliia,
    daysBeforeMoveIn,
    newFlatNoticePeriod,
  });

  console.log(`\n\n\n\n\n\n\n\n\n
  Total price: ${totalCosts} euros (Right now we pay ${paymentForCurrentFlatPerMonth} euros) (Difference: ${
    totalCosts - paymentForCurrentFlatPerMonth
  }),

  In provided days (${daysBeforeMoveIn}):
    Current flat:
      - Move out price (per month): ${
        currentMoveOutPricePerMonth.withProvidedDays
      } euros
      - We save (per year): ${weSavedWithProvidedMoveDays} euros
    New flat:
      - Move out price (per month): ${
        newMoveOutPricePerMonth.withProvidedDays
      } euros
      - We save (per year): ${weWillSaveWithProvidedMoveDays} euros
    Total savings: ${
      weSavedWithProvidedMoveDays + weWillSaveWithProvidedMoveDays
    } euros
  
  In 45 days:
    Current flat:
    - Move out price (per month): ${
      currentMoveOutPricePerMonth.with45Days
    } euros
    - We save (per year): ${weSavedWith45MoveDays} euros
    New flat:
      - Move out price (per month): ${newMoveOutPricePerMonth.with45Days} euros
      - We save (per year): ${weWillSaveWith45MoveDays} euros
    Total savings: ${weWillSaveWith45MoveDays + weWillSaveWith45MoveDays} euros
  `);

  readline.close();
};

main();
