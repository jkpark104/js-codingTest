function solution(dice) {
  const sideNumber = {
    0: 5,
    1: 3,
    2: 4,
    3: 1,
    4: 2,
    5: 0
  };

  const n = dice.length;
  const m = 6;
  let ans = 0;

  for (let i = 0; i < m; i++) {
    let [up, down] = [i, sideNumber[i]];

    let sum = 0;

    for (let idx = 0; idx < m; idx++) {
      if (idx !== up && idx !== down) {
        sum = Math.max(sum, dice[0][idx]);
      }
    }

    for (let j = 1; j < n; j++) {
      down = dice[j].indexOf(dice[j - 1][up]);
      up = sideNumber[down];

      let val = 0;
      for (let idx = 0; idx < m; idx++) {
        if (idx !== up && idx !== down) {
          val = Math.max(val, dice[j][idx]);
        }
      }
      sum += val;
    }
    ans = Math.max(ans, sum);
  }

  return ans;
}

console.log(
  solution([
    [2, 3, 1, 6, 5, 4],
    [3, 1, 2, 4, 6, 5],
    [5, 6, 4, 1, 3, 2],
    [1, 3, 6, 2, 4, 5],
    [4, 1, 6, 5, 2, 3]
  ])
);
