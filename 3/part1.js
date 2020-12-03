const fs = require('fs')

const content = fs.readFileSync(__dirname + '/input.txt')

const rows = content
  .toString()
  .split('\n')
  .filter(x => x.length > 0)
  .map(line => line.split(''))

const countTrees = (right, down) => {
  const [count, x, y] = rows.reduce(([count, x, y], row) => [
    count + (y % down === 0 && row[x % row.length] == '#' ? 1 : 0),
    x + right,
    y + down,
  ], [0, 0, 0])

  return count
}

console.log(countTrees(3, 1))