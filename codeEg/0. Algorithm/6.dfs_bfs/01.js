const solution = n => {
  const res = [];
  const dfs = n => {
    if (n < 2) res.push(n);
    else {
      dfs(Math.floor(n / 2));
      res.push(n % 2);
    }
  };

  dfs(n);

  return res.join('');
};

console.log(solution(11));
