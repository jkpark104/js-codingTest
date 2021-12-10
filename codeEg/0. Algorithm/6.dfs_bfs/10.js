const solution = (n, f) => {
  const biCo = [1];
  let number = 1;

  for (let i = 1; i < n; i++) {
    number *= (n - i) / i;
    biCo.push(number);
  }

  const tmp = [];
  let answer = null;
  const dfs = (L, chk) => {
    if (answer) return;
    if (L === n) {
      if (
        tmp.map((el, i) => el * biCo[i]).reduce((acc, cur) => acc + cur, 0) ===
        f
      )
        answer = [...tmp];
    } else {
      for (let i = 1; i < n + 1; i++) {
        if (chk[i]) continue;
        tmp.push(i);
        chk[i] = 1;
        dfs(L + 1, chk);
        tmp.pop();
        chk[i] = 0;
      }
    }
  };

  dfs(0, new Array(n + 1).fill(0));

  return answer;
};

console.log(solution(4, 16));
console.log(solution(5, 50));
