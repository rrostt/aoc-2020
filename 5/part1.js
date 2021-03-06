const fs = require('fs')

const content = fs.readFileSync(__dirname + '/input.txt')

const ctoint = (chars, one) => chars.reduce((result, char) => (result << 1) + +(char == one), 0)

const lines = content
  .toString()
  .split('\n')
  .filter(x => x.length > 0)
  .map(line => {
    const rowchars = line.substring(0, 7).split('')
    const colchars = line.substring(7).split('')
    const row = ctoint(rowchars, 'B')
    const col = ctoint(colchars, 'R')
    return {
      row, col,
      id: row * 8 + col
    }
  })

console.log(Math.max(...lines.map(x => x.id)))
