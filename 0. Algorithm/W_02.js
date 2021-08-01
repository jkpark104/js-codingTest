function solution(nums, m) {
  const n = nums.length

  let ans = 0
  let sum = 0
  let start = 0
  for (let end = 0; end < n; end++) {
    if (!end) sum = nums[end]
    else sum *= nums[end]
    while (start < n && sum > m) {
      sum /= nums[start]
      start += 1
    }   
    ans += end - start + 1
  }
  return ans
}