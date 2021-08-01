"use strict"

function solution(arr) {
  const n = arr.length
  let ans = 0

  let d = 0
  const dist = new Array(n).fill(0)
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      d += 1
      dist[i] = d
      dist[i + 1] = d + 1
    } else {
      d = 0
    }
  }

  d = 0
  for (let i = n - 1; i > 0; i--) {
    if (arr[i - 1] > arr[i]) {
      d += 1
    } else {
      if (dist[i] && d) {
        ans = Math.max(ans, dist[i] + d)
      }
      d = 0
    }
  }
  return ans
}

console.log(solution([7, 4, 8])); //0
console.log(solution([2, 1, 4, 7, 3, 2, 5])); //5
console.log(solution([1, 2, 1, 2, 3, 4, 5])); //3
console.log(solution([10, 10, 9, 2, 1, 5, 5])); //0
console.log(solution([1, 2, 3, 4, 2, 5, 7, 4, 3, 2, 1, 3])); //7
console.log(solution([1, 1, 1, 1, 1])); //0
console.log(solution([5, 4, 3, 2, 1])); //0
console.log(solution([10, 10, 9, 2, 1, 5, 4])); //3
console.log(solution([2, 2, 9, 9, 1, 5, 5])); //0
console.log(solution([10, 8, 9, 2, 2, 2, 2])); //3
console.log(solution([3, 2, 5, 6, 4, 3, 7])); //5
console.log(solution([3, 3, 3])); //0
console.log(solution('1 2 3 4 5 2 1'.split(' ').map(Number))); //7