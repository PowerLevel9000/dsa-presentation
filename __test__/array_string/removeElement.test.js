const removeElements = require('../../array_string/removeElements');

describe('removeElements', () => {
    it('should return 2', () => {
        const nums = [3, 2, 2, 3];
        const val = 3;
        const result = 2;
        expect(removeElements(nums, val)).toEqual(result);
    });

    it('should return 5', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;
        const result = 5;
        expect(removeElements(nums, val)).toEqual(result);
    });

    it('should return 0', () => {
        const nums = [];
        const val = 0;
        const result = 0;
        expect(removeElements(nums, val)).toEqual(result);
    });

    it('should return 1', () => {
        const nums = [1];
        const val = 1;
        const result = 0;
        expect(removeElements(nums, val)).toEqual(result);
    });

    it('should return 0', () => {
        const nums = [1];
        const val = 0;
        const result = 1;
        expect(removeElements(nums, val)).toEqual(result);
    });
});