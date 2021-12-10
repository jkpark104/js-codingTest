function solution(nums) {
  const n = nums.length;
  const chk = new Array(n).fill(0);

  const q = [0];
  chk[0] = 1;
  while (q.length) {
    const now = q.shift();

    for (let i = 1; i <= nums[now]; i++) {
      const next = now + i;
      if (next < n && chk[next] === 0) {
        chk[next] = chk[now] + 1;
        q.push(next);
      }
    }
  }
  return chk[n - 1] - 1;
}

console.log(solution([2, 2, 0, 2, 1, 1]));
console.log(solution([1, 0, 1, 1, 3, 1, 2, 1]));
console.log(solution([5, 3, 1, 1, 2, 0, 0, 0]));
