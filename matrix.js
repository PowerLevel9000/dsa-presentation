const flippingMatrix = (matrix) => {
    // pseudo code
    // 1. find the middle of the matrix
    // 2. iterate through the matrix to half of the matrix
    // 3. find the max of the four corners
    // 4. add the max to the sum
    // 5. return the sum

    const n = matrix.length;
    const half = n / 2;
    let sum = 0;
    
    for (let i = 0; i < half; i++) {
        for (let j = 0; j < half; j++) {
        sum += Math.max(
            matrix[i][j],
            matrix[i][n - 1 - j],
            matrix[n - 1 - i][j],
            matrix[n - 1 - i][n - 1 - j]
        );
        }
    }
    
    return sum;
};