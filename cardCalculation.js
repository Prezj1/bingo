export default function calculate(num) {
  if (num.length < 25) {
    return `Not enough numbers for Bingo`
  }
  const player = []
  let row = []

  while (player.length < 5) {
    const random = Math.floor(Math.random() * num.length)
    if (row.length < 5) {
      row.push(num[random])
      num = num.filter((item) => {
        return item !== num[random]
      })
    }

    if (row.length === 5) {
      player.push(row)
      row = []
    }
  }

  return player
}
