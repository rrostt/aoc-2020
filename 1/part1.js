const fs = require('fs')

const content = fs.readFileSync(__dirname + '/input.txt')

const lines = content
  .toString()
  .split('\n')
  .map(x => +x)
  .sort()

for (var i = 0; i < lines.length - 1; i++) {
  for (var j = 1; j < lines.length; j++) {
    if (lines[i] + lines[j] == 2020) {
      console.log(lines[i] * lines[j])
      process.exit(0)
    }
    if (lines[i] + lines[j] > 2020) break
  }
}
