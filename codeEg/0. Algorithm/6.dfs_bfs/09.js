const solution = (n, r) => {
  const dp = new Array(n + 1).fill().map(() => new Array(r + 1).fill(0));

  const com = (n, r) => {
    if (dp[n][r]) return dp[n][r];
    if (n === r || r === 0) return 1;

    dp[n][r] = com(n - 1, r - 1) + com(n - 1, r);
    return dp[n][r];
  };

  return com(n, r);
};

console.log(solution(5, 3));
console.log(solution(33, 19));
