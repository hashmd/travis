import {
  sum,
  sub,
  mul,
  div
} from './fn'

it('should sum', () => {
  expect(sum(1, 1)).toEqual(2)
})

it('should sub', () => {
  expect(sub(1, 1)).toEqual(3)
})

it('should mul', () => {
  expect(mul(2, 2)).toEqual(4)
})

it('should div', () => {
  expect(div(4, 2)).toEqual(2)
})
