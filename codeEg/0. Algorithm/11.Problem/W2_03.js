function solution(nums, k) {
  const n = nums.length;
  let end = 0;
  let cnt = k;
  let ans = 0;

  for (let start = 0; start < n; start++) {
    while (end < n && (nums[end] || cnt > 0)) {
      // cnt 한도 내에서 0을 뛰어넘어 슬라이딩 할 수 있음
      if (nums[end] === 0) cnt -= 1;
      end += 1;
    }
    console.log(start, end, end - start);
    // ans를 최댓값으로 갱신해줌
    ans = Math.max(ans, end - start);
    // 배열에서 0이었던 것을 빠져 나왔으니 k 한도 늘려줌
    if (nums[start] === 0) cnt += 1;
  }
  return ans;
}

console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2));
