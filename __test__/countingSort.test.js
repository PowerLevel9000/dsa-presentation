const countingSort = require('../week-1-hacker/countingSort');

describe('countingSort', () => {
    test('should return [1, 2, 3, 4, 5]', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = [1, 2, 3, 4, 5];
        expect(countingSort(arr)).toEqual(result);
    });

    test('should return [1, 1, 1, 1, 1]', () => {
        const arr = [1, 1, 1, 1, 1];
        const result = [1, 1, 1, 1, 1];
        expect(countingSort(arr)).toEqual(result);
    });

    test('should return [1, 1, 1, 1, 1]', () => {
        const arr = [1, 1, 1, 1, 1];
        const result = [1, 1, 1, 1, 1];
        expect(countingSort(arr)).toEqual(result);
    });

    test('should return [1, 1, 1, 1, 1]', () => {
        const arr = [1, 1, 1, 1, 1];
        const result = [1, 1, 1, 1, 1];
        expect(countingSort(arr)).toEqual(result);
    });

    test('should return [1, 1, 1, 1, 1]', () => {
        const arr = [1, 1, 1, 1, 1];
        const result = [1, 1, 1, 1, 1];
        expect(countingSort(arr)).toEqual(result);
    });

    test('should return [1, 1, 1, 1, 1]', () => {
        const arr = [1, 1, 1, 1, 1];
        const result = [1, 1, 1, 1, 1];
        expect(countingSort(arr)).toEqual(result);
    });
});