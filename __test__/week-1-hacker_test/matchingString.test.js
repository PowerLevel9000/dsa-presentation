const matchingString = require('../../week-1-hacker/matchingString');

describe('matchingString', () => {
    test('should return 2 1 0', () => {
        const strings = ['aba', 'baba', 'aba', 'xzxb'];
        const queries = ['aba', 'xzxb', 'ab'];
        const result = [2, 1, 0];
        expect(matchingString(strings, queries)).toEqual(result);
    });

    test('should return 1 0 1', () => {
        const strings = ['def', 'de', 'fgh'];
        const queries = ['de', 'lmn', 'fgh'];
        const result = [1, 0, 1];
        expect(matchingString(strings, queries)).toEqual(result);
    });

    test('should return 0 0 0', () => {
        const strings = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'];
        const queries = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'];
        const result = [1, 3, 4, 3, 2];
        expect(matchingString(strings, queries)).toEqual(result);
    });

    test('should return 0 0 0', () => {
        const strings = ['aba', 'baba', 'aba', 'xzxb'];
        const queries = ['aba', 'xzxb', 'ab'];
        const result = [2, 1, 0];
        expect(matchingString(strings, queries)).toEqual(result);
    });
});