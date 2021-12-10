/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  const obj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  const ans = [];

  const tmp = [];
  const com = (L, s) => {
    if (L === digits.length) {
      ans.push(tmp.join(''));
    } else {
      for (let i = s; i < digits.length; i++) {
        for (let j = 0; j < obj[digits[i]].length; j++) {
          tmp.push(obj[digits[i]][j]);
          com(L + 1, i + 1);
          tmp.pop();
        }
      }
    }
  };

  if (digits.length === 0) return [];

  com(0, 0);

  return ans;
};

console.log(letterCombinations(''));
console.log(letterCombinations('23'));
console.log(letterCombinations('2'));
console.log(letterCombinations('234'));
