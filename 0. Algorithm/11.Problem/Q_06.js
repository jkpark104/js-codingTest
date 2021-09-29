function solution(nums) {
  const blackTsum = nums.reduce((acc, cur) => acc + cur[1], 0);
  let ans = Number.MAX_SAFE_INTEGER;

  function combination(L, s, whiteSum, blackSum) {
    if (L === nums.length / 2) {
      ans = Math.min(Math.abs(whiteSum + blackSum - blackTsum), ans);
    } else {
      for (let i = s; i < nums.length; i++) {
        combination(L + 1, i + 1, whiteSum + nums[i][0], blackSum + nums[i][1]);
      }
    }
  }
  combination(0, 0, 0, 0);
  return ans;
}

console.log(
  solution([
    [15291, 16507],
    [18181, 3446],
    [8872, 13937],
    [8750, 14365],
    [16111, 8710],
    [30345, 16793],
    [16266, 25736],
    [206, 13167]
  ])
); // 86
console.log(
  solution([
    [11220, 11404],
    [26537, 28469],
    [7129, 16964],
    [10090, 5749],
    [14028, 29330],
    [31060, 17792],
    [21391, 21976],
    [32011, 8954],
    [11657, 27641],
    [23742, 29411]
  ])
); // 191
console.log(
  solution([
    [9210, 13615],
    [11731, 8848],
    [15885, 32108],
    [19707, 11195],
    [989, 18498],
    [22245, 4348]
  ])
); // 553
console.log(
  solution([
    [9210, 13615],
    [11731, 8848],
    [15885, 32108],
    [19707, 11195],
    [989, 18498],
    [22245, 4348],
    [123, 154],
    [2345, 1234]
  ])
); // 516
console.log(
  solution([
    [9210, 13615],
    [11731, 8848],
    [15885, 32108],
    [19707, 11195],
    [989, 18498],
    [22245, 4348],
    [1123, 2585],
    [19048, 408],
    [28252, 16646],
    [20055, 26092],
    [12866, 24303],
    [781, 15025],
    [122, 7920],
    [4681, 12670],
    [30671, 18942],
    [28989, 14990]
  ])
); // 3
