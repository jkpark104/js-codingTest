const makesquare = matchsticks => {
  const n = matchsticks.length;
  const sum = matchsticks.reduce((acc, cur) => acc + cur, 0);

  if (n < 4 || sum % 4) return false;

  const target = sum / 4;

  let flag = false;
  const dfs = (idx, sticks) => {
    if (flag) return;
    if (idx === n) {
      if (sticks.every(stick => stick === sticks[0])) flag = true;
    } else {
      for (let j = 0; j < 4; j++) {
        if (sticks[j] + matchsticks[idx] > target) continue;
        sticks[j] += matchsticks[idx];
        dfs(idx + 1, sticks);
        sticks[j] -= matchsticks[idx];
      }
    }
  };

  dfs(0, new Array(4).fill(0));

  return flag;
};

console.log(makesquare([1, 1, 2, 2, 2]));
