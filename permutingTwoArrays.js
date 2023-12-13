const permutingTwoArrays = (k, A, B) => {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.every((a, i) => a + B[i] >= k) ? 'YES' : 'NO';
};

module.exports = permutingTwoArrays;