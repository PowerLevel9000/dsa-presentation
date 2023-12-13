function matchingString(strings, queries) {
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}

module.exports = matchingString;