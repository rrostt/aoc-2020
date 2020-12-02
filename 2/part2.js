const fs = require('fs')

const content = fs.readFileSync(__dirname + '/input.txt')

const lines = content
  .toString()
  .split('\n')
  .filter(x => x.length > 0)
  .map(x => {
    let [rule, pw] = x.split(':').map(x => x.trim())
    let [nums, char] = rule.split(' ')
    let [from, to] = nums.split('-').map(x => +x)
    var chars = pw.split('')
    var valid = chars[from - 1] === char ^ chars[to - 1] === char
    return {
      pw,
      from,
      to,
      char,
      valid
    }
  })

console.log(lines.filter(({ valid }) => valid).length)