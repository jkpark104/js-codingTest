function solution(info) {
  const N = 8;
  const dataTable = new Array(N + 1).fill().map(() => new Array(N + 1).fill(0));

  for (const [a, b] of info) dataTable[a][b] = 1;

  const chk = new Array(N + 1).fill(0);

  const tmp = [];
  let ans = 0;
  const per = L => {
    if (L === 9) {
      ans += 1;
    } else {
      for (let j = 1; j <= 8; j++) {
        if (chk[j]) continue;
        if (
          tmp.length &&
          (dataTable[tmp[tmp.length - 1]][j] ||
            dataTable[j][tmp[tmp.length - 1]])
        )
          continue;
        tmp.push(j);
        chk[j] = 1;
        per(L + 1);
        chk[j] = 0;
        tmp.pop();
      }
    }
  };

  per(1);

  return ans;
}

console.log(
  solution([
    [5, 3],
    [4, 3],
    [4, 7],
    [3, 6]
  ])
);
