const fs = require('fs')

const content = fs.readFileSync(__dirname + '/input.txt')

const rows = content
  .toString()
  .split('\n')
  .filter(x => x.length > 0)
  .map(line => line.split(''))

const countTrees = (right, down) => {
  const [count, x] = rows
    .filter((row, y) => y % down === 0)
    .reduce(([count, x], row) => [
      count + (row[x % row.length] == '#' ? 1 : 0),
      x + right,
    ], [0, 0])

  return count
}

const counts = [
  countTrees(1, 1),
  countTrees(3, 1),
  countTrees(5, 1),
  countTrees(7, 1),
  countTrees(1, 2),
]

console.log(counts.reduce((fac, count) => fac * count))

