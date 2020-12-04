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

const validateHeight = height => {
  const num = +(height.substring(0, height.length - 2))
  switch (height.substring(height.length - 2)) {
    case 'cm': return num >= 150 && num <= 193;
    case 'in': return num >= 59 && num <= 76;
  }
}

const validatePassport = passport => {
  // const expects = [
  //   'byr',
  //   'iyr',
  //   'eyr',
  //   'hgt',
  //   'hcl',
  //   'ecl',
  //   'pid'
  // ]
  // return expects.every(key => Object.keys(passport).includes(key))
  return passport['byr'] && +passport['byr'] >= 1920 && +passport['byr'] <= 2002 &&
    passport['iyr'] && +passport['iyr'] >= 2010 && +passport['iyr'] <= 2020 &&
    passport['eyr'] && +passport['eyr'] >= 2020 && +passport['eyr'] <= 2030 &&
    passport['hgt'] && validateHeight(passport['hgt']) &&
    passport['hcl'] && /^#[0-9a-f]{6}$/.test(passport['hcl']) &&
    passport['ecl'] && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(passport['ecl']) &&
    passport['pid'] && /^[0-9]{9}$/.test(passport['pid'])
}

console.log(passports.filter(validatePassport).length)
