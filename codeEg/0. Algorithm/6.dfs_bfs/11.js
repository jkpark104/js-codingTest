const solution = (n, m) => {
  const ans = [];
  const tmp = [];

  const com = (L, s) => {
    if (L === m) {
      ans.push([...tmp]);
    } else {
      for (let i = s; i < n + 1; i++) {
        tmp.push(i);
        com(L + 1, i + 1);
        tmp.pop();
      }
    }
  };

  com(0, 1);

  return ans;
};

console.log(solution(4, 2));
