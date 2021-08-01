function solution(nums) {
  let ans = 0
  let height = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      height += (nums[i] - nums[i - 1])
    } else {
      ans = Math.max(ans, height)
      height = 0
    }
  }
  ans = Math.max(ans, height)
  return ans
}

const input_data = [
  [5, 2, 4, 7, 7, 3, 9, 10, 11],
  [8, 12, 2, 3, 7, 6, 20, 3],
]

for (let data of input_data) {
  console.log(solution(data))
}