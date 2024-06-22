import { test, expect } from 'vitest'
import calculateTravelPrice from './calculateTravelPrice'

test('all zones and full city', () => {
  expect(calculateTravelPrice('0')).toBe(0)
  expect(calculateTravelPrice('1')).toBe(100)
  expect(calculateTravelPrice('2')).toBe(200)
  expect(calculateTravelPrice('3')).toBe(300)
  expect(calculateTravelPrice('4')).toBe(400)
  expect(calculateTravelPrice('5')).toBe(500)
  expect(calculateTravelPrice('6')).toBe(600)
  expect(calculateTravelPrice('7')).toBe(700)
})

test('unexpected input', () => {
  expect(() => calculateTravelPrice('8')).toThrow(
    'Please provide correct value for travel ticket, you provided "8"'
  )
  expect(() => calculateTravelPrice('anyUnexpectedValue')).toThrow(
    'Please provide correct value for travel ticket, you provided "anyUnexpectedValue"'
  )
})
