function solution(nums, m) {
  while (m > 0) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = nums[i+1] - nums[i]
    }
    nums.pop()
    m -= 1
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

