const xsString = "0 379 584 743 847 1867"
const ysString = "7.97 9.18 9.92 10.23 11.24 12.26"

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

console.log(`x values: ${xs}
y values: ${ys}
Data paired: ${xs.map((x, i) => `{${x},${ys[i]}}`)}
n: ${n}
Mean of x: ${meanX}
Mean of y: ${meanY}

Sum of xs: ${xSum}
Sum of ys: ${ySum}
Sum of xs squared: ${xSquaresSum}
Sum of ys squared: ${ySquaresSum}
Sum of xs times ys: ${xySum}

Sxx: ${sxx}
Syy: ${syy}
Sxy: ${sxy}
SSE: ${sse}

y_i = ${b0} + ${b1}x_i + e_i
Variance: ${variance}
SD: ${sd}

Test statistic (T${n - 2}) for b0 null hypothesis (${b0NullHypothesisValue}): ${b0H0TestStatistic}
Test statistic (T${n - 2}) for b1 null hypothesis (${b1NullHypothesisValue}): ${b1H0TestStatistic}`)



