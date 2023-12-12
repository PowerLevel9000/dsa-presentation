const lonelyInteger = require('../lonelyInteger');

describe('lonelyInteger', () => {
    test('should return 4', () => {
        const arr = [1, 2, 3, 4, 3, 2, 1];
        const result = 4;
        expect(lonelyInteger(arr)).toEqual(result);
    });

    test('should return 1', () => {
        const arr = [1];
        const result = 1;
        expect(lonelyInteger(arr)).toEqual(result);
    });

    test('should return 1', () => {
        const arr = [1, 1, 2];
        const result = 2;
        expect(lonelyInteger(arr)).toEqual(result);
    });

    test('should return 1', () => {
        const arr = [0, 0, 1, 2, 1];
        const result = 2;
        expect(lonelyInteger(arr)).toEqual(result);
    });

    test('should return 1', () => {
        const arr = [1, 2, 3, 4, 3, 2, 1];
        const result = 4;
        expect(lonelyInteger(arr)).toEqual(result);
    });

    test('should return 1', () => {
        const arr = [1, 2, 3, 4, 3, 2, 1];
        const result = 4;
        expect(lonelyInteger(arr)).toEqual(result);
    });

    test('should return 1', () => {
        const arr = [1, 2, 3, 4, 3, 2, 1];
        const result = 4;
        expect(lonelyInteger(arr)).toEqual(result);
    });

    test('should return 1', () => {
        const arr = [1, 2, 3, 4, 3, 2, 1];
        const result = 4;
        expect(lonelyInteger(arr)).toEqual(result);
    });
});