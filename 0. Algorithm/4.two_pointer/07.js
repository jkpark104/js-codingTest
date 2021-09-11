// function solution(s, t) {
//   const n = s.length
//   const m = t.length

//   const hash = new Map()
//   for (const str of t) {
//     hash.set(str, hash.get(str) - 1 || -1)
//   }

//   for (let i = 0; i < m - 1; i++) {
//     if (hash.get(s[i]) === -1) hash.delete(s[i])
//     else hash.set(s[i], (hash.get(s[i]) + 1 || 1))
//   }

//   let ans = 0
//   let j = m - 1
//   for (let i = 0; i < n; i++) {
//     while (j < n && (j - i) < m) {
//       if (hash.get(s[j]) === -1) hash.delete(s[j])
//       else hash.set(s[j], (hash.get(s[j]) + 1 || 1))
//       j += 1
//     }
//     if (hash.size === 0) ans += 1
//     if (hash.get(s[i]) === 1) hash.delete(s[i])
//     else hash.set(s[i], (hash.get(s[i]) - 1 || -1))
//   }
//   return ans
// }

function solution(s, t) {
  let ans = 0;
  const hash = {};
  for (const data of t) hash[data] = hash[data] + 1 || 1;

  for (let i = 0; i < t.length - 1; i++) {
    if (hash[s[i]]) hash[s[i]] -= 1;
    else hash[s[i]] = -1;
    if (hash[s[i]] === 0) delete hash[s[i]];
  }

  let start = 0;
  for (let i = t.length - 1; i < s.length; i++) {
    if (hash[s[i]]) hash[s[i]] -= 1;
    else hash[s[i]] = -1;
    if (hash[s[i]] === 0) delete hash[s[i]];
    if (Object.keys(hash).length === 0) ans += 1;
    if(hash[s[start]]) hash[s[start]] += 1;
    else hash[s[start]] = 1;
    if (hash[s[start]] === 0) delete hash[s[start]];
    start += 1;
  }
  return ans
}

const inputData = [
  ['bacacbcba', 'abc'],
  ['bacaAacba', 'abc'],
];

for (const data of inputData) {
  console.log(solution(data[0], data[1]));
}