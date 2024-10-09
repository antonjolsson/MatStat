const xsString = "20.0 30.5 40.0 55.1 60.3 74.9 88.4 95.2"
const ysString = "1.8 3.0 4.8 5.0 6.5 7.0 9.0 9.1"

const xs = xsString.split(' ')
    .map(x => Number(x))
const ys = ysString.split(' ')
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
console.log(`ŷ = ${b0.toFixed(4)} + ${b1.toFixed(4)}x`)
