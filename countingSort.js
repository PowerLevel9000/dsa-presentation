function countingSort(arr) {
    let result = [];
    let count = new Array(100).fill(0);
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    for (let i = 0; i < count.length; i++) {
        for (let j = 0; j < count[i]; j++) {
            result.push(i);
        }
    }
    return result;
}

module.exports = countingSort;