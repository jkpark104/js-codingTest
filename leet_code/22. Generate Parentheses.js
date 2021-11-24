/**
 * @param {number} n
 * @return {string[]}
 */
const isValid = s => {
  let cnt = 0;

  for (const str of s) {
    if (str === ')') {
      cnt -= 1;
      if (cnt < 0) return false;
    } else {
      cnt += 1;
    }
  }

  return cnt === 0;
};

const generateParenthesis = n => {
  const ans = new Set();
  const dfs = (L, s, paren) => {
    if (L === n) {
      const sampling = paren.join('');
      if (isValid(sampling)) ans.add(sampling);
    } else {
      for (let i = s; i < 2 * n; i++) {
        paren[i] = '(';
        dfs(L + 1, i + 1, paren);
        paren[i] = ')';
      }
    }
  };

  dfs(0, 0, new Array(2 * n).fill(')'));
  return [...ans];
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
