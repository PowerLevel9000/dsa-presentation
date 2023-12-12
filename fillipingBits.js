function fillipingBits(n) {
    let binary = n.toString(2);
    while (binary.length < 32) {
        binary = '0' + binary;
    }
    let flipped = '';
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            flipped += '1';
        } else {
            flipped += '0';
        }
    }
    return parseInt(flipped, 2);
}

module.exports = fillipingBits;