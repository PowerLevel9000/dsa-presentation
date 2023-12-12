const fillipingBits = require('../fillipingBits');

describe('fillipingBits', () => {
    test('should return 2147483648', () => {
        const n = 2147483647;
        const result = 2147483648;
        expect(fillipingBits(n)).toEqual(result);
    });

    test('should return 4294967294', () => {
        const n = 1;
        const result = 4294967294;
        expect(fillipingBits(n)).toEqual(result);
    });

    test('should return 4294967295', () => {
        const n = 0;
        const result = 4294967295;
        expect(fillipingBits(n)).toEqual(result);
    });

    test('should return 3492223820', () => {
        const n = 802743475;
        const result = 3492223820;
        expect(fillipingBits(n)).toEqual(result);
    });

    test('should return 4259365872', () => {
        const n = 35601423;
        const result = 4259365872;
        expect(fillipingBits(n)).toEqual(result);
    });
});