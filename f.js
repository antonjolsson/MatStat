const transitionMatrix = [
    [0, 1/3, 1/3, 1/3],
    [0, 0, 1/2, 1/2],
    [1, 0, 0, 0],
    [1/2, 0, 1/2, 0],
]

function surf(currentPage, clicksLeft) {
    // Print current page to console
    console.log(currentPage)

    if (clicksLeft === 0) {
        return
    }

    // Generate random number between 0 and 1
    const choice = Math.random()

    let probabilitySum = 0
    for (let i = 0; i < transitionMatrix.length; i++) {
        probabilitySum += transitionMatrix[currentPage - 1][i]
        if (choice < probabilitySum) {
            // Visit page i (+ 1 as pages are 1-indexed), decrease clicks left by 1
            surf(i + 1, --clicksLeft)
            return
        }
    }
}

surf(1, 10)
