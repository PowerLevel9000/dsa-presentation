// coding Challenge => https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

const plusMinus = (arr: number[]): void => {
    let positive: number = 0;
    let negative: number = 0;
    let zeros: number = 0;

    for (const ele of arr) {
        if (ele > 0) {
            positive++;
        } else if (ele < 0) {
            negative++;
        } else {
            zeros++;
        }
    }

    console.log((positive / arr.length).toFixed(6));
    console.log((negative / arr.length).toFixed(6));
    console.log((zeros / arr.length).toFixed(6));
}

console.log(plusMinus([1, 1, 0, -1, -1]))