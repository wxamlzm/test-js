const a = 288
const b = 198

console.log(288 % 198)

console.log(198 % 90)

console.log(90 % 18)

function getGcd (a, b) {
  let gcd = null
  let temp = a % b
  if (a % b != 0) {
    getGcd()
  } else {
    gcd = b
  }

  return gcd
}
