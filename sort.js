function sortArray(input) {
    let low = 0;
    let mid = 0;
    let high = input.length - 1;

    while (mid <= high) {
        if (input[mid] === 0) {
            // Swap input[low] and input[mid]
            [input[low], input[mid]] = [input[mid], input[low]];
            low++;
            mid++;
        } else if (input[mid] === 1) {
            mid++;
        } else if (input[mid] === 2) {
            // Swap input[mid] and input[high]
            [input[mid], input[high]] = [input[high], input[mid]];
            high--;
        }
    }

    return input;
}

// Example usage:
const input = [2, 0, 1, 2, 0, 1, 2];
const sortedInput = sortArray(input);
console.log(sortedInput);
