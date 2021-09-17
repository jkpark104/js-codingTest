function solution(n, m) {
  const answer = [];
  const tmp = [];

  function dfs(L) {
    if (L === m) {
      answer.push([...tmp])
    } else {
      for (let i = 1; i < n + 1; i++) {
        tmp.push(i);
        dfs(L + 1);
        tmp.pop();
      }
    }
  }
  dfs(0);
  return answer;
}

console.log(solution(3, 2))
console.log(solution(4, 3))