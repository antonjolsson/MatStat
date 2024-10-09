const math = require('mathjs')

const p = [
    [1/8, 7/24, 7/24, 7/24],
    [1/8, 1/8, 9/24, 9/24],
    [5/8, 1/8, 1/8, 1/8],
    [9/24, 1/8, 9/24, 1/8]
]

const a = [
    [-5, 2],
    [-7, 4]
]

const t = math.transpose(p)
const result = math.eigs(a, {precision: 0.00000000001})

result.eigenvectors.forEach(v => {
    const vector = v.vector
    // let len = Math.sqrt(vector[0].re ** 2 + vector[1].re ** 2 + vector[2].re ** 2 + vector[3].re ** 2)

    // const len = Array.from(vector[0]).reduce((p, c) => p + Math.pow(c.re, 2))
    // console.log(vector[0].re / len, vector[1].re / len, vector[2].re / len, vector[3].re / len)
    console.log(v)
})
