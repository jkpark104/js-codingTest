// function solution(num, m) {
//   num = num.reverse()
//   let ans = 0

//   let idx = 0
//   while (m) {
//     ans += parseInt(m / num[idx])
//     m %= num[idx]
//     idx += 1
//   }
//   return ans
// }

function solution(num, m) {
  const _num = num.reverse();
  let _m = m;
  let ans = 0;
  for (const coin of _num) {
    ans += Math.floor(_m / coin);
    _m %= coin;
  }
  return ans;
}

console.log(solution([1, 5, 10], 15))