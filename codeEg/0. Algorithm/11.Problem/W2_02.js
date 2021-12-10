function solution(nums) {
  const n = nums.length;
  let flag = true;

  let prevLength = n;
  while (flag) {
    for (let i = 0; i < n - 1; i++) {
      if (nums[i] > 0 && nums[i + 1] < 0) {
        // 음수와 양수가 충돌할 때 아래의 코드로 값을 삭제 해줌
        if (nums[i] === -nums[i + 1]) nums.splice(i, 2);
        else if (nums[i] > -nums[i + 1]) nums.splice(i + 1, 1);
        else nums.splice(i, 1);
      }
    }
    if (prevLength === nums.length) flag = false;
    // 이전의 배열과 길이가 같으면 충돌하지 않은 것이므로 while 탈출
    prevLength = nums.length;
  }
  return nums;
}

console.log(solution([3, 5, -2, -5])); // [3]
console.log(solution([-2, -1, -3, 1, 3])); // [-2, -1, -3, 1, 3]
console.log(solution([-2, -1, 2, 1, -3, 2])); // [-2, -1, -3, 2]
