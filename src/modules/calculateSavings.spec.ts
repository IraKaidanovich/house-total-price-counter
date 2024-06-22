import { test, expect } from 'vitest'
import calculateSavings from './calculateSavings'

test('cheap flat', () => {
  expect(
    calculateSavings({
      newFlatTotalPrice: 1900,
      currentMoveOutPrice: 1500,
      newMoveOutPrice: 500,
      livingMonths: 30,
      oneTimeCosts: 0
    })
  ).toBe(16000)
})

test('expensive flat', () => {
  expect(
    calculateSavings({
      newFlatTotalPrice: 2100,
      currentMoveOutPrice: 3000,
      newMoveOutPrice: 2500,
      livingMonths: 12,
      oneTimeCosts: 1500
    })
  ).toBe(-2200)
})
