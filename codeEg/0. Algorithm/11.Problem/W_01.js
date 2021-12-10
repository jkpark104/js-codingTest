function solution(s) {
  const hash = {};
  for (const str of s) hash[str] = hash[str] + 1 || 1;

  const sortedArr = Array.from(Object.entries(hash)).sort(
    (a, b) => b[1] - a[1] || a[0].charCodeAt() - b[0].charCodeAt()
  );

  let ans = '';
  for (const [str, cnt] of sortedArr) {
    ans += str.repeat(cnt);
  }
  return ans;
}

console.log(solution('aaAAcccbbbBB')); // bbbcccAABBaa
console.log(solution('kdkDKKGkdkgks')); // kkkkkKKddDGgs

// 정렬 -> 알파벳 순 but, 소문자가 앞에
// const sort_func = (a, b) => {
//   if (a.charCodeAt() >= 97 && b.charCodeAt() >= 97) return 0;
//   if (a.charCodeAt() < 97 && b.charCodeAt() >= 97) return 1;
//   if (a.charCodeAt() >= 97 && b.charCodeAt() < 97) return -1;
//   return 0;
// };

// const str = 'aAcdCbB'.split('');
// console.log('A'.charAt());
// console.log(
//   str.sort((a, b) => sort_func(a, b) || a.charCodeAt() - b.charCodeAt())
// );
