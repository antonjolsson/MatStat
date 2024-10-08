const xsString = "1.0, 1.0, 1.0, 1.5, 1.5, 1.5, 1.75, 1.75, 1.75, 2.5, 2.5, 2.5, 3.0, 3.0, 3.0, 4.0, 4.0, 4.0, 6.0, 6.0, 6.0, 10.0, 10.0, 10.0"
const ysString = "525, 520, 527, 785, 780, 790, 915, 900, 922, 1300, 1295, 1310, 1575, 1565, 1582, 2100, 2110, 2090, 3125, 3120, 3133, 5250, 5256, 5245"

const xs = xsString.split(/,?\s/)
    .map(x => Number(x))
const ys = ysString.split(/,?\s/)
    .map(y => Number(y))

const n = xs.length

const xSum = xs.reduce((p, c) => p + c, 0)
const ySum = ys.reduce((p, c) => p + c, 0)

let xSquaresSum = /*0*/ xs.reduce((p, c) => p + c ** 2, 0)
let ySquaresSum = /*0*/ ys.reduce((p, c) => p + c ** 2, 0)

const xySum = xs.reduce((p, c, i) => p + c * ys[i], 0)

const b1 = (n * xySum - xSum * ySum) / (n * xSquaresSum - Math.pow(xSum, 2))
const b0 = (ySum / n) - b1 * (xSum / n)

console.log(`x values: ${xs}`)
console.log(`y values: ${ys}`)
console.log(`Data zipped: ${xs.map((x, i) => `{${x},${ys[i]}}`)}`)
console.log(`n: ${n}`)
console.log(`Sum of xs: ${xSum}`)
console.log(`Sum of ys: ${ySum}`)
console.log(`Sum of xs squared: ${xSquaresSum}`)
console.log(`Sum of ys squared: ${ySquaresSum}`)
console.log(`Sum of xs times ys: ${xySum}`)
console.log(`ŷ = ${b0} + ${b1}x`)
