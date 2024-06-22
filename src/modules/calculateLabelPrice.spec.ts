import { test, expect } from 'vitest'

import calculateLabelPrice from './calculateLabelPrice'

test('all labels', () => {
  expect(calculateLabelPrice('A')).toBe(100)
  expect(calculateLabelPrice('a')).toBe(100)

  expect(calculateLabelPrice('B')).toBe(200)
  expect(calculateLabelPrice('b')).toBe(200)

  expect(calculateLabelPrice('C')).toBe(300)
  expect(calculateLabelPrice('c')).toBe(300)

  expect(calculateLabelPrice('D')).toBe(400)
  expect(calculateLabelPrice('d')).toBe(400)

  expect(calculateLabelPrice('E')).toBe(500)
  expect(calculateLabelPrice('e')).toBe(500)

  expect(calculateLabelPrice('F')).toBe(600)
  expect(calculateLabelPrice('f')).toBe(600)

  expect(calculateLabelPrice('G')).toBe(700)
  expect(calculateLabelPrice('g')).toBe(700)
})

test('unexpected input', () => {
  expect(() => calculateLabelPrice('H')).toThrow('You provided wrong value for energy label: "H"')
  expect(() => calculateLabelPrice('anyUnexpectedValue')).toThrow(
    'You provided wrong value for energy label: "ANYUNEXPECTEDVALUE"'
  )
})
