const pangram = require('../week-1-hacker/pangram');

describe('pangram', () => {
    test('should return "pangram"', () => {
        const s = 'We promptly judged antique ivory buckles for the next prize';
        const result = "pangram";
        expect(pangram(s)).toEqual(result);
    });

    test('should return "not pangram"', () => {
        const s = 'We promptly judged antique ivory buckles for the prize';
        const result = "not pangram";
        expect(pangram(s)).toEqual(result);
    });

    test('should return "pangram"', () => {
        const s = 'We promptly judged antique ivory buckles for the next prize';
        const result = "pangram";
        expect(pangram(s)).toEqual(result);
    });

    test('should return "not pangram"', () => {
        const s = 'We promptly judged antique ivory buckles for the prize';
        const result = "not pangram";
        expect(pangram(s)).toEqual(result);
    });

    test('should return "pangram"', () => {
        const s = 'We promptly judged antique ivory buckles for the next prize';
        const result = "pangram";
        expect(pangram(s)).toEqual(result);
    });

    test('should return "not pangram"', () => {
        const s = 'We promptly judged antique ivory buckles for the prize';
        const result = "not pangram";
        expect(pangram(s)).toEqual(result);
    });
});