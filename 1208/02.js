function solution(s) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';

  const s_split = {};

  for (let i = 0; i < s.length; i++) {
    s_split[s[i]] = (s_split[s[i]] || 0) + 1;
  }

  const n = s.length;
  const chk = new Array(n + 1).fill(0);
  const dup = {};

  for (let i = 0; i < 26; i++) {
    if (!s_split[chars[i]]) continue;

    const len = s_split[chars[i]];
    if (!chk[len]) chk[len] = 1;
    else dup[chars[i]] = len;
  }

  if (Object.keys(dup).length === 0) return 0;

  let ans = 0;

  for (const key of Object.keys(dup)) {
    while (dup[key] > 0 && chk[dup[key]]) {
      ans += 1;
      dup[key] -= 1;
    }
    chk[dup[key]] = 1;
  }

  return ans;
}

console.log(solution('aab'));
console.log(solution('aaabbbcc'));
console.log(solution('ceabaacb'));
console.log(solution('aaabbbccc'));
