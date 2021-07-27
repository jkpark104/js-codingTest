function solution(nums) {
  let ans = 0

  let i = 0
  while (i < nums.length) {
    let prev = nums[i]
    let end = i
    while (end < nums.length && prev <= nums[end]) {
      prev = nums[end]
      end += 1
    }
    ans = Math.max(ans, nums[end-1]-nums[i])
    i = i !== end ? end : i+1
  }

  return ans
}

const input_data = [
  [5, 2, 4, 7, 7, 3, 9, 10, 11],
  [8, 12, 2, 3, 7, 6, 20, 3],
]

for (let data of input_data) {
  console.log(solution(data))
}