const bracketMatch = require('../../pramp/bracketMatch');

describe('bracketMatch()', () => {
    test('returns 1 when given "(()"', () => {
        expect(bracketMatch('(()')).toBe(1);
    });
    
    test('returns 0 when given ""', () => {
        expect(bracketMatch('')).toBe(0);
    });
    
    test('returns 0 when given "(())"', () => {
        expect(bracketMatch('(())')).toBe(0);
    });
    
    test('returns 0 when given "())("', () => {
        expect(bracketMatch('())(')).toBe(2);
    });
    
    test('returns 0 when given "())(()"', () => {
        expect(bracketMatch('())(()')).toBe(2);
    });
    
});