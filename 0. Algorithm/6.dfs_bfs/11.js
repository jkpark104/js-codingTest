function solution(n, m) {
  const tmp = [];
  const ans = [];

  function dfs(L, s) {
    if (L === m) {
      if (tmp.length) ans.push([...tmp]);
    } else {
      for (let i = s; i < n + 1; i++) {
        tmp.push(i);
        dfs(L + 1, i + 1);
        tmp.pop();
      }
    }
  }
  dfs(0, 1);
  return ans;
}

console.log(solution(4, 2));