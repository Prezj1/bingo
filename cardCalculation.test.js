import { it, describe, expect } from 'vitest'
import calculate from './cardCalculation'

describe('calculate()', () => {
  it('Should give us back a multi dimensional array with number startingNumbers of 25', () => {
    const startingNumbers = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ]
    const player = calculate(startingNumbers)
    expect(player.length).toBe(5)
    player.forEach((row) => {
      expect(row.length).toBe(5)
      row.forEach((num) => {
        expect(startingNumbers.includes(num)).toBe(true)
      })
    })
  })

  it('Should give us back a multi dimensional array with number startingNumbers of more than 25', () => {
    const startingNumbers = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ]
    const player = calculate(startingNumbers)
    expect(player.length).toBe(5)
    player.forEach((row) => {
      expect(row.length).toBe(5)
      row.forEach((num) => {
        expect(startingNumbers.includes(num)).toBe(true)
      })
    })
  })

  it('Should give us back an error if number startingNumbers of less than 25', () => {
    const startingNumbers = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ]
    const player = calculate(startingNumbers)
    expect(player.length).not.toBe(5)
    expect(player).toBe(`Not enough numbers for Bingo`)
  })
})
