import { test, expect } from 'vitest'
import calculateMovingCost from './calculateMovingCosts'

test('we have plenty of time', () => {
  expect(calculateMovingCost(1900, '70', '60')).toBe(79)
  expect(calculateMovingCost(1900, '70', '30')).toBe(79)
})

test('we have to move in today', () => {
  expect(calculateMovingCost(2150, '0', '60')).toBe(358)
  expect(calculateMovingCost(2150, '0', '30')).toBe(179)
})

test('we have a month to move in', () => {
  expect(calculateMovingCost(1720, '30', '60')).toBe(177)
  expect(calculateMovingCost(1720, '30', '30')).toBe(72)
})

test('we have 1.5 months to move in', () => {
  expect(calculateMovingCost(1400, '45', '60')).toBe(86)
  expect(calculateMovingCost(1400, '45', '30')).toBe(58)
})

test('unexpected input', () => {
  expect(() => calculateMovingCost(1800, '45 days', '60')).toThrow(
    'Please provide number for days before moving in, you provided: "45 days"'
  )

  expect(() => calculateMovingCost(1800, '45', '60 days')).toThrow(
    'Please provide number for notice period days, you provided: "60 days"'
  )
})
