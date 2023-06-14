import { it, describe, expect } from 'vitest'
import winningNumbers from './bingoChallenge'
import calculate from './cardCalculation'

describe('winningNumbers()', () => {
  it('test_horizontal_bingo', () => {
    let winner = false
    let numbers = [
      7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
      18, 20, 8, 19, 3, 26, 1,
    ]
    const player = calculate(numbers)

    const result = winningNumbers(player)
    winner = result
    expect(winner).toBe(true)
  })
})
