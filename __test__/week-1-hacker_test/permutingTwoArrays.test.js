const permutingTwoArrays = require('../../week-1-hacker/permutingTwoArrays');

describe('permutingTwoArrays', () => {
    test('should return YES if the arrays can be permuted to satisfy the condtestion', () => {
        const k = 5;
        const A = [1, 2, 3, 4, 5];
        const B = [5, 4, 3, 2, 1];
        expect(permutingTwoArrays(k, A, B)).toEqual('YES');
    });

    test('should return YES if the arrays can be permuted to satisfy the condtestion', () => {
        const k = 5;
        const A = [1, 2, 3, 4, 5];
        const B = [5, 4, 3, 2, 2];
        expect(permutingTwoArrays(k, A, B)).toEqual('YES');
    });

    test('should return YES if the arrays can be permuted to satisfy the condtestion wtesth duplicate elements', () => {
        const k = 5;
        const A = [1, 2, 3, 4, 5];
        const B = [5, 4, 3, 2, 2];
        expect(permutingTwoArrays(k, A, B)).toEqual('YES');
    });

    test('should return YES if the arrays can be permuted to satisfy the condtestion wtesth duplicate elements', () => {
        const k = 5;
        const A = [1, 2, 3, 4, 5];
        const B = [5, 4, 3, 2, 1];
        expect(permutingTwoArrays(k, A, B)).toEqual('YES');
    });


});
