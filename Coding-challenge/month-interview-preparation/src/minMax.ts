const miniMaxSum = (arr: number[]): void => {
    let sortedArray: number[] = arr.slice().sort((a, b) => a - b);
    let minimum: number = sortedArray[0] + sortedArray[1] + sortedArray[2] + sortedArray[3];
    let maximum: number = sortedArray[1] + sortedArray[2] + sortedArray[3] + sortedArray[4];
    console.log(minimum, maximum);
}

console.log(miniMaxSum([1, 2,]))