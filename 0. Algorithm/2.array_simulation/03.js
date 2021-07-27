function solution(nums) {
  let ans = 0

  let i = 0
  while (i < nums.length - 1) {
    let prev = nums[i]
    let end = i + 1
    while (end < nums.length && prev < nums[end]) {
      prev = nums[end]
      end += 1
    }
    ans = Math.max(ans, end - i)
    i += 1
  }

  i = 0
  while (i < nums.length - 1) {
    let prev = nums[i]
    let end = i + 1
    while (end < nums.length && prev > nums[end]) {
      prev = nums[end]
      end += 1
    }
    ans = Math.max(ans, end - i)
    i += 1
  }

  return ans
}

const input_data = [
  [5, 3, 6, 7, 9, 8, 5, 3, 1, 2],
  [5, 2, 4, 7, 6, 3, 9, 10, 11],
  [1, 2, 3, 3, 4, 5, 6, 7, 7],
]

for (let data of input_data) {
  console.log(solution(data))
}