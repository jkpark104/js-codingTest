// https://leetcode.com/submissions/detail/562867876/
function solution(nums) {
  const n = nums.length;
  // 등차가 될 수 있는 최댓값 지정
  const dx = Math.max(...nums) - Math.min(...nums);

  // 각 배열의 index에 등차로 가능한 값을 저장할 이중 배열을 생성
  const dp = new Array(n).fill().map(() => new Array(dx + 1).fill(1));
  const dpRight = new Array(n).fill().map(() => new Array(dx + 1).fill(1));

  let ans = 1;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j > -1; j--) {
      // 왼쪽부터 올라가므로 d >= 0일때만 판단해줌
      if (nums[i] - nums[j] >= 0) {
        // 다음 index dp의 등차 d를 가지는 dp 값을 갱신해줌
        dp[i][nums[i] - nums[j]] = Math.max(
          dp[i][nums[i] - nums[j]],
          dp[j][nums[i] - nums[j]] + 1
        );
        ans = Math.max(ans, dp[i][nums[i] - nums[j]]);
      }
    }
  }

  // 이하 오른쪽부터 왼쪽으로 오는 등차 dp
  for (let i = n - 2; i > -1; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] - nums[j] >= 0) {
        dpRight[i][nums[i] - nums[j]] = Math.max(
          dpRight[i][nums[i] - nums[j]],
          dpRight[j][nums[i] - nums[j]] + 1
        );
        ans = Math.max(ans, dpRight[i][nums[i] - nums[j]]);
      }
    }
  }
  return ans;
}

console.log(solution([1, 2, 3, 5, 7, 8, 9])); // 5
console.log(solution([25, 20, 15, 30, 10, 40, 5])); // 5
console.log(solution([3, 6, 9, 12])); // 4
console.log(solution([9, 4, 7, 2, 10])); // 3
console.log(solution([20, 1, 15, 3, 10, 5, 8])); // 4
console.log(
  solution([
    1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0,
    1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1,
    0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1,
    0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0,
    1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1,
    0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1,
    0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1
  ])
); // 306
console.log(
  solution([
    22, 8, 57, 41, 36, 46, 42, 28, 42, 14, 9, 43, 27, 51, 0, 0, 38, 50, 31, 60,
    29, 31, 20, 23, 37, 53, 27, 1, 47, 42, 28, 31, 10, 35, 39, 12, 15, 6, 35,
    31, 45, 21, 30, 19, 5, 5, 4, 18, 38, 51, 10, 7, 20, 38, 28, 53, 15, 55, 60,
    56, 43, 48, 34, 53, 54, 55, 14, 9, 56, 52
  ])
); // 6
