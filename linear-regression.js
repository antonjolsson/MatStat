const xsString = "20.0 30.5 40.0 55.1 60.3 74.9 88.4 95.2"
const ysString = "1.8 3.0 4.8 5.0 6.5 7.0 9.0 9.1"

const b0NullHypothesisValue = 0
const b1NullHypothesisValue = 0

const xs = xsString.split(/,?\s/)
    .map(x => Number(x))
const ys = ysString.split(/,?\s/)
    .map(y => Number(y))

const n = xs.length

const xSum = xs.reduce((p, c) => p + c, 0)
const ySum = ys.reduce((p, c) => p + c, 0)

const meanX = (xSum / n)
const meanY = (ySum / n)

const xSquaresSum = /*0*/ xs.reduce((p, c) => p + c ** 2, 0)
const ySquaresSum = /*0*/ ys.reduce((p, c) => p + c ** 2, 0)

const xySum = xs.reduce((p, c, i) => p + c * ys[i], 0)

const sxx = xs.reduce((p, c) => p + (c - meanX) ** 2, 0)
const syy = ys.reduce((p, c) => p + (c - meanY) ** 2, 0)
const sxy = xs.reduce((p, c, i) => p + (c - meanX) * (ys[i] - meanY), 0)

const b1 = (n * xySum - xSum * ySum) / (n * xSquaresSum - Math.pow(xSum, 2))
const b0 = meanY - b1 * meanX

const sse = xs.reduce((p, c, i) => p + (ys[i] - b0 - b1 * c) ** 2, 0)
const variance = sse / (n - 2)
const sd = Math.sqrt(variance)

const b0H0TestStatistic = (b0 - b0NullHypothesisValue) / ((sd * Math.sqrt(xSquaresSum)) / Math.sqrt(n * sxx))
const b1H0TestStatistic = b1 / (sd / Math.sqrt(sxx))

console.log(`x values: ${xs}`)
console.log(`y values: ${ys}`)
console.log(`Data paired: ${xs.map((x, i) => `{${x},${ys[i]}}`)}`)
console.log(`n: ${n}`)
console.log(`Mean of x: ${meanX}`)
console.log(`Mean of y: ${meanY}`)

console.log(`\nSum of xs: ${xSum}`)
console.log(`Sum of ys: ${ySum}`)
console.log(`Sum of xs squared: ${xSquaresSum}`)
console.log(`Sum of ys squared: ${ySquaresSum}`)
console.log(`Sum of xs times ys: ${xySum}`)

console.log(`\nSxx: ${sxx}`)
console.log(`Syy: ${syy}`)
console.log(`Sxy: ${sxy}`)
console.log(`SSE: ${sse}`)

console.log(`\nŷ = ${b0} + ${b1}x`)
console.log(`Variance: ${variance}`)
console.log(`SD: ${sd}`)

console.log(`\nTest statistic (T${n - 2}) for b0 null hypothesis (${b0NullHypothesisValue}): ${b0H0TestStatistic}`)
console.log(`Test statistic (T${n - 2}) for b1 null hypothesis (${b1NullHypothesisValue}): ${b1H0TestStatistic}`)



