const makesquare = matchsticks => {
  if (matchsticks.length < 4) return false;
  if (matchsticks.reduce((acc, cur) => acc + cur, 0) % 4 !== 0) return false;

  matchsticks.sort((a, b) => a - b);

  const target = matchsticks.reduce((acc, cur) => acc + cur, 0) / 4;

  let flag = false;

  const dfs = (L, sum) => {
    if (flag) return;
    if (L === matchsticks.length) {
      if (sum.every(el => el === sum[0])) flag = true;
    } else {
      for (let i = 0; i < 4; i++) {
        if (sum[i] + matchsticks[L] > target) continue;
        sum[i] += matchsticks[L];
        dfs(L + 1, sum);
        sum[i] -= matchsticks[L];
      }
    }
  };

  dfs(0, new Array(4).fill(0));
  return flag;
};

console.log(makesquare([3, 3, 3, 3, 4]));
