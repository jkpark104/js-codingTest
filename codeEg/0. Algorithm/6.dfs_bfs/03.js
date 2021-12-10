const solution = n => {
  const res = [];

  const tmp = [];

  const dfs = (L, s) => {
    if (L === n) {
      if (tmp.length) res.push([...tmp]);
    } else {
      tmp.push(s);
      dfs(L + 1, s + 1);
      tmp.pop();
      dfs(L + 1, s + 1);
    }
  };

  dfs(0, 1);

  return res;
};

console.log(solution(3));
