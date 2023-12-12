const minMaxSum = (arr) => {
    if (!Array.isArray(arr) || arr.length < 5) {
        throw new Error('Input should be an array of at least 5 numbers');
    }
    const sortedArr = arr.sort((a, b) => a - b);
    const min = sortedArr.slice(0, 4).reduce((a, b) => a + b);
    const max = sortedArr.slice(1).reduce((a, b) => a + b);
    return `${min} ${max}`;
}

module.exports = minMaxSum;