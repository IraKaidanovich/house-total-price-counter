import config from "./config";
import finalizeCalculations from "./modules/finalizeCalculations";
import getInputs from "./getInputs";
import openHtml from "open-html";
import styles from "./styles";

const moveOutDays = [0, 7, 15, 30, 45, 60];
const noticePeriods = [0, 30, 45, 60];

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateTable = (result) => {
  let lastRow;
  let rowsHtml = "";
  for (let daysBeforeMoveIn in result) {
    rowsHtml += `<tr>
      <td>${daysBeforeMoveIn} days to move out</td>`;

    for (let noticeDays in result[daysBeforeMoveIn]) {
      rowsHtml += `<td>${result[daysBeforeMoveIn][noticeDays]}</td>`;
    }

    rowsHtml += "</tr>";

    lastRow = result[daysBeforeMoveIn];
  }

  let headersHtml = "";
  for (let noticeDays in lastRow) {
    headersHtml += `<th>Notice of ${noticeDays} days</th>`;
  }

  openHtml(`
    <style>${styles}</style>
    <table>
      <thead>
        <tr>
          <th></th>
          ${headersHtml}
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>  
  `);
};

const main = async () => {
  const { price, label, travelTicketMisha, travelTicketNataliia } =
    await getInputs(readline);

  const results = {};

  moveOutDays.forEach((daysToMoveOut) => {
    const result = {};

    noticePeriods.forEach((noticePeriod) => {
      const calculation = finalizeCalculations({
        price,
        label,
        travelTicketMisha,
        travelTicketNataliia,
        daysBeforeMoveIn: daysToMoveOut.toString(),
        newFlatNoticePeriod: noticePeriod.toString(),
      });

      result[noticePeriod] = `
        Current flat (Total expenses): ${config.paymentForCurrentFlat} euros, <br>
        Current flat (Move out price): ${calculation.currentMoveOutPrice} euros, <br>
        New flat (Total expenses): ${calculation.totalCosts} euros, <br>
        New flat (Move out price): ${calculation.newMoveOutPrice} euros, <br>
        <br>
        <b>Total savings (Per two years): ${calculation.weWillSave} euros</b>
      `;
    });

    results[daysToMoveOut] = result;
  });

  // const totalPriceDifference = config.paymentForCurrentFlat - totalCosts;
  // const moveOutPriceDifference = currentMoveOutPrice - newMoveOutPrice;

  // const totalDifference =
  //   config.paymentForCurrentFlat +
  //   currentMoveOutPrice -
  //   (totalCosts + newMoveOutPrice);

  generateTable(results);

  // console.log(`\n\n\n\n\n\n\n\n\n
  // In provided move out days (${daysBeforeMoveIn}):
  //   Current flat:
  //     - Total price: ${config.paymentForCurrentFlat} euros
  //     - Move out price (per month): ${currentMoveOutPrice} euros
  //   New flat:
  //     - Total price: ${totalCosts} euros (${Math.abs(totalPriceDifference)} ${
  //   totalPriceDifference < 0 ? "more expensive" : "cheaper"
  // } euros)
  //     - Move out price (per month): ${newMoveOutPrice} euros (${Math.abs(
  //   moveOutPriceDifference
  // )} ${moveOutPriceDifference < 0 ? "more expensive" : "cheaper"} euros)
  //   Total difference: ${Math.abs(totalDifference)} euros ${
  //   totalDifference > 0 ? "cheaper" : "more expensive"
  // }
  //   Total savings (in two years from now): ${weWillSave} euros
  // `);

  readline.close();
};

main();
