const fs= require('fs')

const numbersAsString = fs.readFileSync('dist-inference-input.txt', {encoding: 'utf-8'})

const numbers = numbersAsString
    .trim()
    .split(/,?\s/)
    .map(s => Number(s))

const n = numbers.length
const sum = numbers.reduce((p, c) => p + c, 0)
const mean = sum / n
const variance = numbers.reduce((p, c) => p + (c - mean) ** 2, 0) / (n - 1)

console.log(`n: ${n}`)
console.log(`mean: ${mean}`)
console.log(`variance: ${variance}`)
console.log(`sd: ${Math.sqrt(variance)}`)
