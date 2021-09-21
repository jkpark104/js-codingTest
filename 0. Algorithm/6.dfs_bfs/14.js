function solution(s, e) {
  const chk = new Array(10001).fill(0);

  const q = [s];
  while (q.length) {
    const now = q.shift();
    if (now === e) return chk[now];
    for (const next of [now - 1, now + 1, now + 5]) {
      if (next >= 0 && next < 10001 && chk[next] === 0) {
        chk[next] = chk[now] + 1;
        q.push(next);
      }
    }
  }
  return chk[e];
}

console.log(solution(5, 14));
console.log(solution(8, 3));
