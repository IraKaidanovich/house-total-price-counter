import calculateSavings from "./src/calculateSavings";
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

  const savingsPerYear = calculateSavings(totalCosts);

  // calculate notice period of a new flat

  console.log(`
    Total price: ${totalCosts} euros,
    We will be saving per year: ${savingsPerYear} euros 
  `);

  readline.close();
};

main();
