// function solution(nums, d, k) {
//   function dfs(r, s) {
//     if (r === k) {
//       calc(nums, tmp)
//     } else {
//       for (let i = s; i < d + 1; i++) {
//         tmp.push(i)
//         dfs(r + 1, i + 1)
//         tmp.pop()
//       }
//     }
//   }

//   function calc(nums, tmp) {
//     let res = 0
//     for (let num of nums) {
//       if (num.filter(x => !tmp.includes(x)).length === 0) res += 1
//     }
//     ans = Math.max(ans, res)
//   }

//   const tmp = []
//   let ans = 0
//   dfs(0, 1)
//   return ans
// }

console.log(solution(
  [
    [1],
    [2, 3],
    [3],
    [1, 2],
    [],
    [2, 1],
    [2, 3, 4],
    [3, 4]
  ], 4, 3
))

function solution(nums, d, k) {
  function dfs(r, s) {
    if (r === k) {
      let val = 0
      for (num of tmp) {
        val += 1 << (num - 1)
      }
      let tmpVal = 0
      for (let student of students) {
        if ((val & student) === student) tmpVal += 1
      }
      ans = Math.max(ans, tmpVal)
    } else {
      for (let i = s; i < d + 1; i++) {
        tmp.push(i)
        dfs(r + 1, i + 1)
        tmp.pop()
      }
    }
  }
  const students = []
  for (let i = 0; i < nums.length; i++) {
    let val = 0
    for (num of nums[i]) {
      val += 1 << (num - 1)
    }
    students.push(val)
  }
  const tmp = []
  let ans = 0
  dfs(0, 1)
  return ans
}

// 비트 연산
// 매개변수에 비트 합 미리 구해 놓기