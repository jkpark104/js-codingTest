const solution = n => {
  let cnt = 1;
  n -= cnt;

  let ans = 0;

  while (n > 0) {
    cnt += 1;
    n -= cnt;
    if (n % cnt === 0) ans += 1;
  }

  return ans;
};

const inputData = [15, 45678, 98765, 7];

for (const data of inputData) {
  console.log(solution(data));
}
