import calculateTotalCosts from './calculateTotalCosts'
import calculateMovingCost from './calculateMovingCosts'
import config from '../config'
import calculateSavings from './calculateSavings'

type Params = {
  price: number
  label: string
  travelTicketMisha: number
  travelTicketNataliia: number
  daysBeforeMoveIn: number
  newFlatNoticePeriod: number
  livingMonths: number
  oneTimeCosts: number
}

export default ({
  price,
  label,
  travelTicketMisha,
  travelTicketNataliia,
  daysBeforeMoveIn,
  newFlatNoticePeriod,
  livingMonths,
  oneTimeCosts
}: Params) => {
  const totalCosts = calculateTotalCosts({
    price,
    label,
    travelTicketMisha,
    travelTicketNataliia
  })

  const newMoveOutPrice = calculateMovingCost(totalCosts, daysBeforeMoveIn, newFlatNoticePeriod)

  const currentMoveOutPrice = calculateMovingCost(
    config.paymentForCurrentFlat,
    daysBeforeMoveIn,
    config.currentFlatNoticePeriodDays
  )

  const weWillSave = calculateSavings({
    newFlatTotalPrice: totalCosts,
    newMoveOutPrice,
    currentMoveOutPrice,
    livingMonths,
    oneTimeCosts
  })

  return {
    totalCosts,
    newMoveOutPrice,
    currentMoveOutPrice,
    weWillSave
  }
}
