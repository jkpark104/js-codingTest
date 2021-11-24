// // 1235. Maximum Profit in Job Scheduling

const bisect_left = (target, arr) => {
  let start = 0;
  let end = arr.length - 1;

  let output = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] >= target) {
      output = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return output;
};

const bisect_right = (target, arr) => {
  let start = 0;
  let end = arr.length - 1;

  let output = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] >= target) {
      output = mid;
      start = mid + 1;
    } else start = mid + 1;
  }
  return output;
};

const jobScheduling = (startTime, endTime, profit) => {
  const n = startTime.length;
  const dp = new Array(Math.max(...startTime) + 1)
    .fill()
    .map(() => new Array(Math.max(...endTime) + 1).fill(0));

  for (let i = 0; i < n; i++) {
    const [start, end] = [startTime[i], endTime[i]];

    console.log(bisect_left(end, startTime), bisect_right(end, startTime), end);
    // dp[start][end] =
  }
};

console.log(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]));
// console.log(
//   jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])
// );
