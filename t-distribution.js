/**
 * Returns the y value for a given test statistic and degrees of freedom
 * @param t Test statistic
 * @param v Degrees of freedom
 */
const getTDistributionPDF = (t, v) => {
    if (v <= 1) {
        return 'v must be larger than 1'
    }
    let v1 = v - 1
    let v2 = v - 2
    let q = 1 / (2 * Math.sqrt(v))
    if (v % 2 === 0) {
        while (v1 >= 3) {
            q *= v / v2
            v1 -= 2
            v2 -= 2
        }
    } else {
        q = 1 / (Math.PI * Math.sqrt(v))
        while (v1 >= 2) {
            q *= v / v2
            v1 -= 2
            v2 -= 2
        }
    }
    return q * (1 + (t ** 2) / v) ** -((v + 1) / 2)
}
