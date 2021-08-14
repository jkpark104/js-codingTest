function solution(nums, k) {
  const n = nums.length

  let end = 0
  let ans = 0
  for (let start = 0; start < n; start++) {
    while (end < n && (k > 0 || nums[end] === 1)) {
      // k 한도 내에서 0을 뛰어넘어 슬라이딩 할 수 있음
      if (nums[end] === 0) k -= 1
      end += 1
    }
    ans = Math.max(ans, end - start)
    // ans를 최댓값으로 갱신해줌
    if (nums[start] === 0) k += 1
    // 배열에서 0이었던 것을 빠져 나왔으니 k 한도 늘려줌
  }
  return ans
}