function lonelyInteger(a) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result ^= a[i];
    }
    return result;
}

module.exports = lonelyInteger;