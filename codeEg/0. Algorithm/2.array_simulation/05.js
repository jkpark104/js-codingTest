const solution = nums => {
  const n = nums.length;

  let d = 0;

  const dist = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (nums[i]) {
      d = 0;
    } else {
      d += 1;
      dist[i] = d;
    }
  }

  d = 0;
  for (let j = n - 1; j > -1; j--) {
    if (nums[j]) {
      d = 0;
    } else {
      d += 1;
      dist[j] = Math.min(dist[j], d);
    }
  }

  return Math.max(...dist);
};

const input_data = [[1, 0, 0, 0, 1, 0, 0, 1, 0, 1]];

for (let data of input_data) {
  console.log(solution(data));
}
