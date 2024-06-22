import calculateTotalCosts from './calculateTotalCosts'
import calculateMovingCost from './calculateMovingCosts'
import config from '../config'
import calculateTwoYearsSavings from './calculateTwoYearsSavings'

type Params = {
  price: string
  label: string
  travelTicketMisha: string
  travelTicketNataliia: string
  daysBeforeMoveIn: string
  newFlatNoticePeriod: string
}

export default ({
  price,
  label,
  travelTicketMisha,
  travelTicketNataliia,
  daysBeforeMoveIn,
  newFlatNoticePeriod
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
    config.currentFlatNoticePeriodDays.toString()
  )

  const weWillSave = calculateTwoYearsSavings({
    newFlatTotalPrice: totalCosts,
    newMoveOutPrice,
    currentMoveOutPrice
  })

  return {
    totalCosts,
    newMoveOutPrice,
    currentMoveOutPrice,
    weWillSave
  }
}
