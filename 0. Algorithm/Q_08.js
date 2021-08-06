function solution(nums) {
  const n = nums.length
  const dp = new Array(n).fill(0)
  const dp_right = new Array(n).fill(0)

  dp[0] = 1
  dp_right[n - 1] = 1
  if (nums[0] < nums[1]) dp[1] = 2
  else dp[1] = 1
  if (nums[n - 2] > nums[n - 1]) dp_right[n - 2] = 2
  else dp_right[n - 2] = 1

  for (let i = 2; i < n; i++) {
    let val = 0
    for (let j = i - 1; j > -1; j--) {
      if (nums[i] > nums[j] && dp[j] > val) val = dp[j]
    }
    dp[i] = val + 1
  }
  for (let i = n - 3; i > -1; i--) {
    let val = 0
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j] && dp_right[j] > val) val = dp_right[j]
    }
    dp_right[i] = val + 1
  }

  let ans = 0
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dp[i] + dp_right[i] - 1)
  }

  return ans
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1])); //7
console.log(solution([1, 2, 3, 4, 5, 6, 7])); //7
console.log(solution([5, 4, 3, 2, 1])); //5
console.log(solution([2, 3, 5, 7, 3, 6, 5, 3])); //7
console.log(solution([5, 6, 3, 5, 6, 3, 3, 4, 2, 1, 5])); //6
console.log(solution([1, 2, 3, 4, 5, 5, 5, 5])); //5
console.log(solution([10, 30, 10, 20, 50, 30, 10])); //5
console.log(solution([5, 6, 3, 5, 2, 5, 6, 2, 7])); //4
console.log(solution([5, 3, 4, 5, 6, 9])); //5
console.log(solution([2, 3, 2, 3, 2, 3, 2, 3, 2, 3])); //3