function solution(nums) {
  const n = nums.length
  let flag = true
  let prev = nums.length
  while (flag) {
    for (let i = 0; i < n - 1; i++) {
      const x = nums[i]
      const y = nums[i + 1]
      if (x > 0 && y < 0) {
        // 음수와 양수가 충돌할 때 아래의 코드로 값을 삭제 해줌
        if (Math.abs(x) === Math.abs(y)) {
          nums.splice(i, 2)
        } else if (Math.abs(x) > Math.abs(y)) {
          nums.splice(i + 1, 1)
        } else {
          nums.splice(i, 1)
        }
      }
    }
    if (prev === nums.length) flag = false
    // 이전의 배열과 길이가 같으면 충돌하지 않은 것이므로 while 탈출
    prev = nums.length
  }
  return nums
}