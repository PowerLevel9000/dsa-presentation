const pangram = (s) => {
    if (s.length < 26) return 'not pangram';
    // TODO
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    const sArray = s.toLowerCase().split("");
    let result = 'pangram';
    alphabetArray.forEach((letter) => {
        if (!sArray.includes(letter)) {
            result = 'not pangram';
        }
    });
    return result;
}

module.exports = pangram;