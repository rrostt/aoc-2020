const fs = require('fs')

const content = fs.readFileSync(__dirname + '/input.txt')

const lines = content
  .toString()
  .split('\n')
  .map(x => +x)
  .sort()

for (var i = 0; i < lines.length - 2; i++) {
  for (var j = i; j < lines.length - 1; j++) {
    for (var k = j; k < lines.length; k++) {
      if (lines[i] + lines[j] + lines[k] == 2020) {
        console.log(lines[i] * lines[j] * lines[k])
        process.exit(0)
      }
      if (lines[i] + lines[j] + lines[k] > 2020) break
    }
  }
}
