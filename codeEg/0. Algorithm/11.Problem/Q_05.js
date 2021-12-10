function solution(n) {
  const data = ('' + n).split('');
  const stack = [];
  const chk = new Array(data.length).fill(0);

  let ans = Number.MAX_SAFE_INTEGER;
  function permutation(L) {
    if (L === data.length) {
      if (+stack.join('') > n) ans = Math.min(ans, +stack.join(''));
    } else {
      for (let i = 0; i < data.length; i++) {
        if (chk[i] === 0) {
          chk[i] = 1;
          stack.push(data[i]);
          permutation(L + 1);
          chk[i] = 0;
          stack.pop();
        }
      }
    }
  }
  permutation(0);
  return ans !== Number.MAX_SAFE_INTEGER ? ans : -1;
}

console.log(solution(123)); // 132
console.log(solution(321)); // -1
console.log(solution(20573)); // 20735
console.log(solution(9990)); // -1
console.log(solution(156)); // 165
console.log(solution(330)); // -1
console.log(solution(27711)); // 71127
console.log(solution(54312)); // 54321
console.log(solution(765423)); // 765432
console.log(solution(33051)); // 33105
console.log(solution(6543721)); // 6547123
console.log(solution(3902830)); // 3903028
console.log(solution(54321)); // -1
console.log(solution(54300)); // -1
