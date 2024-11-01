const binomial = (n, p, x) => {
    let numerator = 1
    for (let i = 0; i < x; i++) {
        numerator *= n - i
    }
    let denominator = 1
    for (let i = 1; i <= x; i++) {
        denominator *= i
    }
    return (numerator / denominator) * p ** x * (1 - p) ** (n - x)
}

let sum = 0
for (let i = 0; i <= 100; i++) {
    if (i >= 36 && i <= 64) {
        continue
    }
    sum += binomial(100, 0.5, i)
}
console.log(sum)

