function solution(nums) {

  let array = []
  for (let i = 1; i < nums.length; i++) {
    array.push(nums[i] - nums[i - 1])
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > 0) return 'NO'
      }
      return 'YES'
    } else if (array[i] === 0) {
      return 'NO'
    }
  }
  return 'NO'
}

const input_data = [
  [1, 2, 3, 4, 5, 3, 1],
  [1, 3, 4, 5, 5, 6, 4, 3],
  [1, 2, 3, 4, 5],
]

for (let data of input_data) {
  console.log(solution(data))
}