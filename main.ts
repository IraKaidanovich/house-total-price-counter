import calculateTotalCosts from "./src/calculateTotalCosts";
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
  } = await getInputs(readline);

  const totalCosts = calculateTotalCosts({
    price,
    label,
    travelTicketMisha,
    travelTicketNataliia,
    daysBeforeMoveIn,
  });

  const currentSpending = 1860;
  const savingsOfMother = 100;
  const savingsOfIlliaAndIra = 300;
  const sharedSavings = savingsOfMother + savingsOfIlliaAndIra;
  const weWillBeSavings = (currentSpending - totalCosts + sharedSavings) * 12;

  // calculate notice period of a new flat

  console.log(`
    Total price: ${totalCosts} euros,
    We will be saving: ${weWillBeSavings} euros 
  `);

  readline.close();
};

main();
