const solution = (n, m) => {
  const ans = [];

  const tmp = [];

  const dfs = L => {
    if (L === m) {
      ans.push([...tmp]);
    } else {
      for (let i = 1; i < n + 1; i++) {
        tmp.push(i);
        dfs(L + 1);
        tmp.pop();
      }
    }
  };

  dfs(0);

  return ans;
};

console.log(solution(3, 2));
console.log(solution(4, 3));
