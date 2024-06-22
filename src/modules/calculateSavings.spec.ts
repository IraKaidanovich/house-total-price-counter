import { test, expect } from 'vitest'
import calculateSavings from './calculateSavings'

test('cheap flat', () => {
  expect(
    calculateSavings({
      newFlatTotalPrice: 1900,
      currentMoveOutPrice: 1500,
      newMoveOutPrice: 500,
      livingYears: 2.5
    })
  ).toBe(16000)
})

test('expensive flat', () => {
  expect(
    calculateSavings({
      newFlatTotalPrice: 2100,
      currentMoveOutPrice: 3000,
      newMoveOutPrice: 2500,
      livingYears: 1
    })
  ).toBe(-700)
})
