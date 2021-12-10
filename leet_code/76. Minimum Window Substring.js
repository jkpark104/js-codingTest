/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  const hash = {};

  let type = 0;
  for (const string of t) {
    if (!hash[string]) type += 1;
    hash[string] = (hash[string] || 0) + 1;
  }

  const INF = 1e5;

  let ans = 'a'.repeat(INF);

  let end = 0;

  for (let start = 0; start < s.length; start++) {
    while (end < s.length && type !== 0) {
      if (hash[s[end]] !== undefined) hash[s[end]] -= 1;
      if (hash[s[end]] === 0) type -= 1;
      end += 1;
    }

    if (type === 0 && ans.length > end - start) ans = s.slice(start, end);

    if (hash[s[start]] !== undefined) {
      if (hash[s[start]] === 0) type += 1;
      hash[s[start]] += 1;
    }
  }

  return ans.length === INF ? '' : ans;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('a', 'aa'));
