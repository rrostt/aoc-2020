const fs = require('fs')

const content = fs.readFileSync(__dirname + '/input.txt')

const lines = content
  .toString()
  .split('\n')
// .filter(x => x.length > 0)

const [passports, passport] = lines.reduce(([passports, passport], line) => {
  if (line.length == 0) {
    return [[...passports, passport], {}]
  }
  line.split(' ')
    .map(kv => kv.split(':'))
    .forEach(([key, value]) => passport[key] = value)
  return [passports, passport]
}, [[], {}])

if (Object.keys(passport).length > 0) {
  passports.push(passport)
}

const validatePassport = passport => {
  const expects = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
  ]
  return expects.every(key => Object.keys(passport).includes(key))
}

console.log(passports.filter(validatePassport).length)
