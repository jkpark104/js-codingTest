function solution(n) {
  const numbStorage = [];
  const answer = [];

  function dfs(L, n) {
    if (L === n + 1) {
      if (numbStorage.length) answer.push([...numbStorage]);
    } else {
      numbStorage.push(L);
      dfs(L+1, n);
      numbStorage.pop()
      dfs(L+1, n);
    }
  }
  dfs(1, n);
  return answer;
}

console.log(solution(3));