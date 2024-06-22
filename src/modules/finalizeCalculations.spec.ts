import { test, expect, beforeEach } from 'vitest'
import finalizeCalculations from './finalizeCalculations'

beforeEach(() => {
  global.resetConfig()
})

test('random flat', () => {
  const { totalCosts, newMoveOutPrice, currentMoveOutPrice, weWillSave } = finalizeCalculations({
    price: 1500,
    travelTicketMisha: 1,
    travelTicketNataliia: 2,
    newFlatNoticePeriod: 30,
    label: 'B',
    daysBeforeMoveIn: 30,
    livingMonths: 18,
    oneTimeCosts: 500
  })

  expect(totalCosts).toBe(1741)
  expect(currentMoveOutPrice).toBe(2171)
  expect(newMoveOutPrice).toBe(871)
  expect(weWillSave).toBe(4000)
})
