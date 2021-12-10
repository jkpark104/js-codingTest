const solution = (w, h, t, s, points) => {
  const dpx = new Array(w + 1).fill(0);
  const dpy = new Array(h + 1).fill(0);

  for (const [a, b] of points) {
    dpx[a] += 1;
    dpy[b] += 1;
  }

  let end = 0;
  let tx = 0;
  let sum = 0;
  let max_sum = 0;
  for (let start = 0; start < w - s + 1; start++) {
    while (end - start < s + 1) {
      sum += dpx[end];
      end += 1;
    }
    if (max_sum < sum) {
      max_sum = sum;
      tx = start;
    }

    sum -= dpx[start];
  }

  end = 0;
  let ty = 0;
  sum = 0;
  max_sum = 0;
  for (let start = 0; start < h - s + 1; start++) {
    while (end - start < s + 1) {
      sum += dpy[end];
      end += 1;
    }
    if (max_sum < sum) {
      max_sum = sum;
      ty = start;
    }

    sum -= dpy[start];
  }

  // console.log(tx, ty);

  let ans = 0;

  for (const [a, b] of points) {
    if (tx <= a && a <= tx + s && ty <= b && b <= ty + s) {
      ans += 1;
    }
  }

  return ans;
};

// console.log(
//   solution(10, 9, 8, 3, [
//     [3, 4],
//     [6, 3],
//     [5, 7],
//     [6, 6],
//     [9, 5],
//     [6, 9],
//     [7, 8],
//     [8, 9]
//   ])
// );
console.log(
  solution(16, 16, 2, 15, [
    [0, 0],
    [16, 16]
  ])
);

// 5
