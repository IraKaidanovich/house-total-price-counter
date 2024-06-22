import config from './config'
import finalizeCalculations from './modules/finalizeCalculations'
import getInputs from './getInputs'
import openHtml from 'open-html'
import styles from './styles'

const moveOutDays = [0, 7, 15, 30, 45, 60]
const noticePeriods = [30, 60]

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const generateResultsTable = (result) => {
  let lastRow
  let rowsHtml = ''
  for (const daysBeforeMoveIn in result) {
    rowsHtml += `<tr>
      <td>${daysBeforeMoveIn} days to move out</td>`

    for (const noticeDays in result[daysBeforeMoveIn]) {
      rowsHtml += `<td>${result[daysBeforeMoveIn][noticeDays]}</td>`
    }

    rowsHtml += '</tr>'

    lastRow = result[daysBeforeMoveIn]
  }

  let headersHtml = ''
  for (const noticeDays in lastRow) {
    headersHtml += `<th>New flat notice of ${noticeDays} days</th>`
  }

  return `
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
  `
}

const generateInputsTable = ({ price, label, travelTicketMisha, travelTicketNataliia }) => {
  return `
    <table>
      <thead>
        <th>Properties -></th>
        <th>Price</th>
        <th>Label</th>
        <th>Travel ticket for Misha</th>
        <th>Travel ticket for Nataliia</th>
      </thead>
      <tbody>
        <td>Inputs -></td>
        <td>${price} euros</td>
        <td>${label.toUpperCase()}</td>
        <td>${travelTicketMisha} zones</td>
        <td>${travelTicketNataliia} zones</td>
      </tbody>
    </table>
  `
}

const main = async () => {
  const { price, label, travelTicketMisha, travelTicketNataliia } = await getInputs(readline)

  const results = {}

  moveOutDays.forEach((daysToMoveOut) => {
    const result = {}

    noticePeriods.forEach((noticePeriod) => {
      const calculation = finalizeCalculations({
        price,
        label,
        travelTicketMisha,
        travelTicketNataliia,
        daysBeforeMoveIn: daysToMoveOut.toString(),
        newFlatNoticePeriod: noticePeriod.toString()
      })

      result[noticePeriod] = `
        Current flat (Total expenses): ${config.paymentForCurrentFlat} euros, <br>
        Current flat (Move out price): ${calculation.currentMoveOutPrice} euros, <br>
        New flat (Total expenses): ${calculation.totalCosts} euros, <br>
        New flat (Move out price): ${calculation.newMoveOutPrice} euros, <br>
        <br>
        <b>Total savings (Per two years): ${calculation.weWillSave} euros</b>
      `
    })

    results[daysToMoveOut] = result
  })

  const resultsHtml = generateResultsTable(results)
  const inputsHtml = generateInputsTable({
    price,
    label,
    travelTicketMisha,
    travelTicketNataliia
  })

  openHtml(inputsHtml + resultsHtml)

  readline.close()
}

main()
