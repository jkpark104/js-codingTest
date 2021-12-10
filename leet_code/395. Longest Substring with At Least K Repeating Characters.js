/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = (s, k) => {
  let ans = 0;

  for (let i = 1; i <= 26; i++) {
    let start = 0;
    let type = 0;

    const hash = {};

    for (let end = 0; end < s.length; end++) {
      if (!hash[s[end]]) type += 1;
      hash[s[end]] = (hash[s[end]] || 0) + 1;

      while (start < s.length && type > i) {
        hash[s[start]] -= 1;
        if (!hash[s[start]]) type -= 1;
        start += 1;
      }

      Object.keys(hash).filter(key => hash[key] >= k).length === i
        ? (ans = Math.max(ans, end - start + 1))
        : ans;
    }
  }

  return ans;
};

console.log(longestSubstring('a', 1));
console.log(longestSubstring('aaabb', 3));
console.log(longestSubstring('ababbc', 2));
console.log(longestSubstring('aacaa', 3));
console.log(longestSubstring('bbaaacbd', 3));
