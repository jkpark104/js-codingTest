function solution(nums, m) {
  const chk = new Array(nums.length).fill(0);
  const tmp = [];
  const answer = [];

  function dfs(L) {
    if (L === m) {
      answer.push([...tmp]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (!chk[i]) {
          chk[i] = 1;
          tmp.push(nums[i]);
          dfs(L + 1)
          chk[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  dfs(0);
  return answer;
}

console.log(solution([3, 6, 9], 2))