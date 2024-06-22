import config from '../config'

const calculateMovingCost = (
  pricePerMonth: number,
  daysBeforeMoveIn: number,
  noticePeriodDays: number
) => {
  const paidDays = Math.max(
    config.minimalTimeToMove,
    +noticePeriodDays - +daysBeforeMoveIn + config.expectedDaysToSignTheContract
  )
  const paidMonths = Math.min(paidDays / 30, +noticePeriodDays / 30)

  return Math.round(pricePerMonth * paidMonths)
}

export default calculateMovingCost
