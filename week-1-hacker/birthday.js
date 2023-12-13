const birthday = (s, d, m) => {
    // Pseudocode
    // 1. Create a variable to store the number of ways
    // 2. Iterate through the array of integers
    // 3. Create a variable to store the sum of the integers
    // 4. Iterate through the array of integers again such that the current integer is added to the next m integers
    // 5. Add the current integer to the sum
    // 6. Check if the sum is equal to the day
    // 7. If it is, increment the number of ways
    // 8. Return the number of ways

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let sum =0;
        for(let j = i; j < i + m; j++) {
            sum += s[j];
        }
        if (sum === d) count++;
    }
    return count;
}

module.exports = birthday;