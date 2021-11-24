function solution(s) {
  const hash = {};

  const ans = [null, 0];
  for (const str of s) {
    hash[str] = hash[str] + 1 || 1;
    if (ans[1] < hash[str]) {
      ans[0] = str;
      ans[1] = hash[str];
    }
  }
  return ans[0];
}

const inputData = ['BACBACCACCBDEDE'];

for (const data of inputData) {
  console.log(solution(data));
}
