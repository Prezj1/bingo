import calculate from './cardCalculation.js'

let numbers = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1,
]
const initialStartNumber = JSON.parse(JSON.stringify(numbers))

const player = calculate(numbers)
let winner = false

export default function winningNumbers(player) {
  while (!winner) {
    const random = Math.floor(Math.random() * numbers.length)

    //first part which loops through the multi dimensional array and updated the the rows.
    for (let i = 0; i < player[0].length; i++) {
      if (player[0][i] === numbers[random]) {
        const index = player[0].indexOf(player[0][i])
        player[0][index] = 'b'
        numbers = numbers.filter((item) => {
          return item !== numbers[random]
        })
      }
      for (let j = 0; j < player[1].length; j++) {
        if (player[1][j] === numbers[random]) {
          const index = player[1].indexOf(player[1][j])
          player[1][index] = 'b'
          numbers = numbers.filter((item) => {
            return item !== numbers[random]
          })
        }
        for (let k = 0; k < player[2].length; k++) {
          if (player[2][k] === numbers[random]) {
            const index = player[2].indexOf(player[2][k])
            player[2][index] = 'b'
            numbers = numbers.filter((item) => {
              return item !== numbers[random]
            })
          }
          for (let l = 0; l < player[3].length; l++) {
            if (player[3][l] === numbers[random]) {
              const index = player[3].indexOf(player[3][l])
              player[3][index] = 'b'
              numbers = numbers.filter((item) => {
                return item !== numbers[random]
              })
            }
            for (let m = 0; m < player[4].length; m++) {
              if (player[4][m] === numbers[random]) {
                const index = player[4].indexOf(player[4][m])
                player[4][index] = 'b'
                numbers = numbers.filter((item) => {
                  return item !== numbers[random]
                })
              }
            }
          }
        }
      }
    }

    //second part which checks for bingo
    for (let i = 0; i < player[0].length; i++) {
      if (
        player[0].every((item) => item == 'b') ||
        (player[0] === player[1][0] &&
          player[0] === player[2][0] &&
          player[0] === player[3][0] &&
          player[0] === player[4][0])
      ) {
        winner = true
      }
      for (let j = 0; j < player[1].length; j++) {
        if (
          player[1].every((item) => item == 'b') ||
          (player[1] === player[0][1] &&
            player[1] === player[2][1] &&
            player[1] === player[3][1] &&
            player[1] === player[4][1])
        ) {
          winner = true
        }
        for (let k = 0; k < player[2].length; k++) {
          if (
            player[2].every((item) => item == 'b') ||
            (player[2] === player[0][2] &&
              player[2] === player[1][2] &&
              player[2] === player[3][2] &&
              player[2] === player[4][2])
          ) {
            winner = true
          }
          for (let l = 0; l < player[3].length; l++) {
            if (
              player[3].every((item) => item == 'b') ||
              (player[3] === player[0][3] &&
                player[3] === player[1][3] &&
                player[3] === player[2][3] &&
                player[3] === player[4][3])
            ) {
              winner = true
            }
            for (let m = 0; m < player[4].length; m++) {
              if (
                player[4].every((item) => item == 'b') ||
                (player[4] === player[0][4] &&
                  player[4] === player[1][4] &&
                  player[4] === player[2][4] &&
                  player[4] === player[3][4])
              ) {
                winner = true
              }
            }
          }
        }
      }
    }
  }

  console.log(
    `Got bingo after ${initialStartNumber.length - numbers.length} moves`
  )
  return winner
}

winningNumbers(player)
