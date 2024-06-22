import config from '../config'

/**
 * We calculate per two years including move out price of current and the next flat,
 * Basically we add how much we save living in the first flat and how much we will save living in the next flat
 */
export default ({
  newFlatTotalPrice,
  newMoveOutPrice,
  currentMoveOutPrice,
  livingYears
}: {
  newFlatTotalPrice: number
  newMoveOutPrice: number
  currentMoveOutPrice: number
  livingYears: number
}): number => {
  const savedFromFlatExpenses = config.paymentForCurrentFlat - newFlatTotalPrice

  const lostFromMovings = currentMoveOutPrice + newMoveOutPrice

  const livingMonths = 12 * livingYears

  console.log(livingMonths)

  return (
    savedFromFlatExpenses * livingMonths + config.sharedSavings * livingMonths - lostFromMovings
  )
}
