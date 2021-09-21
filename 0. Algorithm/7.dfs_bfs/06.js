function solution(nums, d, k) {
  const students = [];
  for (let i = 0; i < nums.length; i++) {
    let val = 0;
    for (const num of nums[i]) val += 2 ** (num - 1);
    students.push(val);
  }

  let ans = 0;

  function dfs(L, s, sum) {
    if (L === k) {
      ans = Math.max(ans, students.filter(el => (el & sum) === el).length);
    } else {
      for (let i = s; i < d + 1; i++) {
        dfs(L + 1, i + 1, sum + 2 ** (i - 1));
      }
    }
  }
  dfs(0, 1, 0);
  return ans;
}

console.log(
  solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3)
);

// 비트 연산
// 매개변수에 비트 합 미리 구해 놓기
