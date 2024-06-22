import { test, expect, describe } from 'vitest'
import calculateMovingCost from './calculateMovingCosts'

describe('moving cost', () => {
  test('we have plenty of time', () => {
    expect(calculateMovingCost(1900, 70, 60)).toBe(950)
    expect(calculateMovingCost(1900, 70, 30)).toBe(950)
  })

  test('we have to move in today', () => {
    expect(calculateMovingCost(2150, 0, 60)).toBe(4300)
    expect(calculateMovingCost(2150, 0, 30)).toBe(2150)
  })

  test('we have a month to move in', () => {
    expect(calculateMovingCost(1720, 30, 60)).toBe(2121)
    expect(calculateMovingCost(1720, 30, 30)).toBe(860)
  })

  test('we have 1.5 months to move in', () => {
    expect(calculateMovingCost(1400, 45, 60)).toBe(1027)
    expect(calculateMovingCost(1400, 45, 30)).toBe(700)
  })
})
