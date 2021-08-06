function solution(nums) {
  const dSum = Math.abs(Math.max(...nums) - Math.min(...nums))
  // 등차가 될 수 있는 최댓값 지정
  const n = nums.length
  const dp = new Array(n).fill().map(() => new Array(dSum + 1).fill(0))
  const dp_right = new Array(n).fill().map(() => new Array(dSum + 1).fill(0))
  // 각 배열의 index에 등차로 가능한 값을 저장할 이중 배열을 생성

  let ans = 0
  for (let i = 1; i < n; i++) {
    const dv = nums[i]
    for (let j = i - 1; j > -1; j--) {
      const d = dv - nums[j]
      // d -> 등차
      if (d > 0) {
        // 왼쪽부터 올라가므로 d > 0일때만 판단해줌
        dp[i][d] = dp[j][d] + 1
        // 다음 index dp의 등차 d를 가지는 dp 값을 갱신해줌
        ans = Math.max(ans, dp[i][d] + 1)
      }
    }
  }

  // 이하 오른쪽부터 왼쪽으로 오는 등차 dp
  for (let i = n - 2; i > -1; i--) {
    const dv_right = nums[i]
    for (let j = i + 1; j < n; j++) {
      const d = dv_right - nums[j]
      if (d > 0) {
        dp_right[i][d] = dp_right[j][d] + 1
        ans = Math.max(ans, dp_right[i][d] + 1)
      }
    }
  }
  return ans
}