function solution(t, coins) {
  const dp = new Array(t + 1).fill(0)

  dp[0] = 1
  for (let [coin, num] of coins) {
    for (let i = t; i > 0; i--) {
      let cnt = num
      let now = i
      while (cnt > 0) {
        if (now - coin >= 0) {
          dp[i] += dp[now - coin]
          now -= coin
        }
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