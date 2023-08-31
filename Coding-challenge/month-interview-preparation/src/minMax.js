"use strict";
const miniMaxSum = (arr) => {
    let sortedArray = arr.slice().sort((a, b) => a - b);
    let minimum = sortedArray[0] + sortedArray[1] + sortedArray[2] + sortedArray[3];
    let maximum = sortedArray[1] + sortedArray[2] + sortedArray[3] + sortedArray[4];
    console.log(minimum, maximum);
};
console.log(miniMaxSum([1, 2,]));
//# sourceMappingURL=minMax.js.map