function solution(nums) {
  const total = nums.reduce((acc, cur) => acc + cur);
  let answer = 'NO';
  let flag = false;

  function dfs(L, sum) {
    if (L === nums.length) {
      if (sum === (total - sum) && !flag) {
        answer = 'YES';
        flag = true;
      }
    } else {
      dfs(L + 1, sum + nums[L]);
      dfs(L + 1, sum);
    }
  }
  dfs(0, 0);
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]))
console.log(solution([5, 2, 6, 9, 10, 12]))
console.log(solution([3, 9, 11, 13]))