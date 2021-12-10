/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  let ans = 0;
  for (let i = 0; i <= 25; i++) {
    let end = 0;
    for (let start = 0; start < s.length; start++) {
      while (end < s.length && (k || String.fromCharCode(i + 65) === s[end])) {
        if (String.fromCharCode(i + 65) !== s[end]) k -= 1;
        end += 1;
      }

      ans = Math.max(ans, end - start);

      if (String.fromCharCode(i + 65) !== s[start]) k += 1;
    }
  }

  return ans;
};

console.log(characterReplacement('ABAB', 2));
console.log(characterReplacement('AABABBA', 1));
