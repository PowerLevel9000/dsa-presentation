const plusMinus = require("../../week-1-hacker/plusMinus");

describe("plusMinus", () => {
    test("should return 0.500000 0.333333 0.166667", () => {
        const arr = [-4, 3, -9, 0, 4, 1];
        const result = "0.500000\n0.333333\n0.166667";
        expect(plusMinus(arr)).toEqual(result);
    });

    test("should return 0.400000 0.400000 0.200000", () => {
        const arr = [1, 1, 0, -1, -1];
        const result = "0.400000\n0.400000\n0.200000";
        expect(plusMinus(arr)).toEqual(result);
    });
    
    test("should return 0.500000 0.250000 0.250000", () => {
        const arr = [1, 1, 0, -1, -1, 0];
        const result = "0.333333\n0.333333\n0.333333";
        expect(plusMinus(arr)).toEqual(result);
    });

    test("should return 0.333333 0.333333 0.333333", () => {
        const arr = [1, 1, 1, 0, 0, 0, -1, -1, -1];
        const result = "0.333333\n0.333333\n0.333333";
        expect(plusMinus(arr)).toEqual(result);
    });
});
