const solution = (nums, d, k) => {
  const students = nums.map(num =>
    num.reduce((acc, cur) => acc + 2 ** (cur - 1), 0)
  );

  let ans = 0;
  const com = (L, s, sum) => {
    if (L === k) {
      ans = Math.max(
        ans,
        students.filter(student => (student & sum) === student).length
      );
    } else {
      for (let i = s; i < d + 1; i++) {
        com(L + 1, i + 1, sum + 2 ** (i - 1));
      }
    }
  };

  com(0, 1, 0);

  return ans;
};

console.log(
  solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3)
);

// 비트 연산
// 매개변수에 비트 합 미리 구해 놓기
