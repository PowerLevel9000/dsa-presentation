"use strict";
const plusMinus = (arr) => {
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    for (const ele of arr) {
        if (ele > 0) {
            positive++;
        }
        else if (ele < 0) {
            negative++;
        }
        else {
            zeros++;
        }
    }
    console.log((positive / arr.length).toFixed(6));
    console.log((negative / arr.length).toFixed(6));
    console.log((zeros / arr.length).toFixed(6));
};
console.log(plusMinus([1, 1, 0, -1, -1]));
//# sourceMappingURL=plusMinus.js.map