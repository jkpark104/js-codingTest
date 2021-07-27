// function solution(nums) {

//   let array = []
//   for (let i = 1; i < nums.length; i++) {
//     array.push(nums[i] - nums[i - 1])
//   }

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       if (i === 0) return 'NO'
//       for (let j = i + 1; j < array.length; j++) {
//         if (array[j] >= 0) return 'NO'
//       }
//       return 'YES'

//     } else if (array[i] === 0) {
//       return 'NO'
//     }
//   }
//   return 'NO'
// }

const input_data = [
  [1, 2, 3, 4, 5, 3, 1],
  [1, 3, 4, 5, 5, 6, 4, 3],
  [1, 2, 3, 4, 5],
]

for (let data of input_data) {
  console.log(solution(data))
}

function solution(nums) {
  let n = nums.length

  let i = 0
  while (i + 1 < n && nums[i] < nums[i + 1]) i += 1
  if (i === 0 || i === n - 1) return 'NO'
  while (i + 1 < n && nums[i] > nums[i + 1]) i += 1
  if (i !== n - 1) return 'NO'
  return 'YES'
}