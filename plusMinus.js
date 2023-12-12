function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    arr.forEach(element => {
        if (element > 0) {
            positive++;
        } else if (element < 0) {
            negative++;
        } else {
            zero++;
        }
    });

    const total = arr.length;
    const positiveRatio = (positive / total).toFixed(6);
    const negativeRatio = (negative / total).toFixed(6);
    const zeroRatio = (zero / total).toFixed(6);

    return `${positiveRatio}\n${negativeRatio}\n${zeroRatio}`;
}

module.exports = plusMinus;
