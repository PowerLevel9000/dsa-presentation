function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for (let i = 0; i < arr.length; i++) {
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][arr.length - 1 - i];
    }
    return Math.abs(leftDiagonal - rightDiagonal);
}

module.exports = diagonalDifference;