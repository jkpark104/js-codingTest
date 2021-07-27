function solution(nums) {
  const empty = []
  const seated = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) seated.push(i)
    else empty.push(i)
  }

  let ans = 0
  for (let e of empty) {
    let tmp = 1e9
    for (let s of seated) {
      tmp = Math.min(Math.abs(e-s), tmp)
    }
    ans = Math.max(ans, tmp)
  }
  return ans
}

const input_data = [
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
]

for (let data of input_data) {
  console.log(solution(data))
}