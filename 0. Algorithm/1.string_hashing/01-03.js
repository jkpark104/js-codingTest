function solution(s) {
  const ans = [];

  for (let i = 0; i < s.length; i++) {
    ans.push(s.slice(i, s.length));
  }
  return ans.sort();
}

console.log(solution('kseaedu'));
