function solution(t, coins) {
  const dp = new Array(t + 1).fill(0)
  dp[0] = 1

  for (let [coin, num] of coins) {
    for (i = t; i >= coin; i--) {
      let val = i
      let cnt = num
      while (cnt > 0) {
        val -= coin
        if (val >= 0) dp[i] += dp[val]
        cnt -= 1
      }
    }
  }
  console.log(dp)
  return dp[t]
}
// 냅색 알고리즘, 유한개
// 백준 2604번

console.log(solution(20, [
  [5, 3],
  [10, 2],
  [1, 5],
]))

