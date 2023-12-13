const birthday = require('../week-1-hacker/birthday');

describe('birthday', () => {
   test('should return 2', () => {
       const s = [1, 2, 1, 3, 2];
       const d = 3;
       const m = 2;
       expect(birthday(s, d, m)).toEqual(2);
   });

    test('should return 0', () => {
         const s = [1, 1, 1, 1, 1, 1];
         const d = 3;
         const m = 2;
         expect(birthday(s, d, m)).toEqual(0);
    });

    test('should return 1', () => {
         const s = [4];
         const d = 4;
         const m = 1;
         expect(birthday(s, d, m)).toEqual(1);
    });

    test('should return 0', () => {
         const s = [4];
         const d = 5;
         const m = 1;
         expect(birthday(s, d, m)).toEqual(0);
    });
})