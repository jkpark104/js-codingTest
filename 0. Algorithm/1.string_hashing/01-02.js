'use strict'
function solution(s1, s2) {
  const nums = [0, 0]

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      nums[s1[i]] += 1
    }
  }
  // let movable = 0

  // while (nums[0] > 0 && nums[1] > 0) {
  //   movable += 1
  //   nums[0] -= 1
  //   nums[1] -= 1
  // }
  // return nums[0] + nums[1] + movable

  return Math.max(...nums) // max 함수로 구하는 거랑 위의 연산이랑 프로세스 같음
}


const input_data = [
  ['11000111', '11100110'],
  ['11000111', '11111110'],
]

for (let data of input_data) {
  console.log(solution(data[0], data[1]))
}