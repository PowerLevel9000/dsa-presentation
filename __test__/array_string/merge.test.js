const merge = require('../../array_string/merge');

describe('merge', () => {
    it('should return [1, 2, 2, 3, 5, 6]', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [2, 5, 6];
        const n = 3;
        const result = [1, 2, 2, 3, 5, 6];
        expect(merge(nums1, m, nums2, n)).toEqual(result);
    });

    it('should return [1]', () => {
        const nums1 = [1];
        const m = 1;
        const nums2 = [];
        const n = 0;
        const result = [1];
        expect(merge(nums1, m, nums2, n)).toEqual(result);
    });

    it('should return [1, 2, 3, 4]', () => {
        const nums1 = [1, 2, 3, 0];
        const m = 3;
        const nums2 = [4];
        const n = 1;
        const result = [1, 2, 3, 4];
        expect(merge(nums1, m, nums2, n)).toEqual(result);
    });

    it('should return [0]', () => {
        const nums1 = [0];
        const m = 0;
        const nums2 = [0];
        const n = 1;
        const result = [0];
        expect(merge(nums1, m, nums2, n)).toEqual(result);
    });

    it('should return [1, 2, 3, 4]', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [4, 5, 6];
        const n = 3;
        const result = [1, 2, 3, 4, 5, 6];
        expect(merge(nums1, m, nums2, n)).toEqual(result);
    });
});