const solution = (s, e) => {
  const chk = new Array(10001).fill(0);

  const q = [s];

  chk[s] = 1;

  while (q.length) {
    const now = q.shift();

    for (const next of [now - 1, now + 1, now + 5]) {
      if (!chk[next] && next >= 0 && next < 10001) {
        chk[next] = chk[now] + 1;
        q.push(next);
      }
    }
  }

  return chk[e] - 1;
};

console.log(solution(5, 14));
console.log(solution(8, 3));
