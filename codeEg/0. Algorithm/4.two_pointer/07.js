const solution = (s, t) => {
  let ans = 0;

  const hash = {};

  for (const str of t) {
    hash[str] = (hash[str] || 0) + 1;
  }

  for (let i = 0; i < t.length - 1; i++) {
    hash[s[i]] = (hash[s[i]] || 0) - 1;
    if (!hash[s[i]]) delete hash[s[i]];
  }

  for (let i = t.length - 1; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) - 1;
    if (!hash[s[i]]) delete hash[s[i]];

    if (Object.keys(hash).length === 0) ans += 1;

    hash[s[i - t.length + 1]] = (hash[s[i - t.length + 1]] || 0) + 1;
    if (!hash[s[i - t.length + 1]]) delete hash[s[i - t.length + 1]];
  }

  return ans;
};

const inputData = [
  ['bacacbcba', 'abc'],
  ['bacaAacba', 'abc']
];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}
