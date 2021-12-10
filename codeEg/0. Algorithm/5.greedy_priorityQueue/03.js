const solution = meeting => {
  meeting.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  let ans = 0;

  let prev = 0;
  for (const [start, end] of meeting) {
    if (prev <= start) {
      ans += 1;
      prev = end;
    }
  }

  return ans;
};

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7]
  ])
);
console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3]
  ])
);
