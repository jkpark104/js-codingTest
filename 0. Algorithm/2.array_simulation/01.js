function solution(nums, m) {
  for (m; m > 0; m--) {
    // let tmp = []
    for (let i = 1; i < nums.length; i++) {
      // tmp.push(nums[i] - nums[i - 1])
      nums[i - 1] = nums[i] - nums[i - 1]
    }
    // nums = tmp
    nums.pop()
  }
  return nums
}

const input_data = [
  [
    [5, 3, 7, 9, -2], 1
  ],
  [
    [5, 3, 7, 9, -2], 2
  ],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}